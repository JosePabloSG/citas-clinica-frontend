import AppointmentsContext from "@/context/AppointmentsContext"
import { cancellAppointment } from "@/services/Appointments/Appointments"
import { useContext, useState } from "react"
import toast from "react-hot-toast"

interface CustomError {
    message: string;
}

const CancellAppointmentButton = ({ id, setIsEditing }: { id: number, setIsEditing: (isEditing: boolean) => void }) => {

    const { setNewAppointmentCreated, newAppointmentCreated } = useContext(AppointmentsContext)
    const [showModal, setShowModal] = useState(false)

    const HandlecancellAppointment = async () => {
        try {
            const messageResults = await cancellAppointment(id, localStorage.getItem("token") as string)
            setNewAppointmentCreated(!newAppointmentCreated)
            setIsEditing(false)
            setShowModal(false)
            toast.success(messageResults)
        } catch (error) {
            toast.error((error as CustomError).message)
            console.error("Error deleting product:", error)
        }
    }

    return (
        <>
            <button
                type="button"
                className="text-xs rounded-full px-4 py-2 text-center me-2 mb-2 font-semibold text-gray-900"
                onClick={() => setShowModal(true)}
            >
                Cancel
            </button>
            {showModal ? (
                <>
                    <div className={`fixed inset-0 flex items-center justify-center z-50 ${showModal ? 'scale-100' : 'scale-0'} `}>
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-300 outline-none focus:outline-none">
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Are you sure you want to cancel the appointment?
                                    </p>
                                </div>
                                <div className="flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b justify-center">
                                    <button
                                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        type="button"
                                        onClick={HandlecancellAppointment}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default CancellAppointmentButton
