import AppointmentsContext from "@/context/AppointmentsContext"
import { deleteAppointmente } from "@/services/Appointments/Appointments"
import { useContext, useState } from "react"
import toast from "react-hot-toast"

const DeleteAppointmentButton = ({ id, setIsEditing }: { id: number, setIsEditing: (isEditing: boolean) => void }) => {

    const { setNewAppointmentCreated, newAppointmentCreated } = useContext(AppointmentsContext)
    const [showModal, setShowModal] = useState(false)

    const HandleDeleteAppointment = async () => {
        try {
            const messageResults = await deleteAppointmente(id, localStorage.getItem("token") as string)
            setNewAppointmentCreated(!newAppointmentCreated)
            toast.success(messageResults)
            setShowModal(false)
            setIsEditing(false)
        } catch (error) {
            toast.error("You don't have permission to delete this appointment")
        }
    }
    return (
        <>
            <button onClick={() => setShowModal(true)} type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
            {showModal ? (
                <>
                    <div className={`fixed inset-0 flex items-center justify-center z-50 ${showModal ? 'scale-100' : 'scale-0'} `}>
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-300 outline-none focus:outline-none">
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Are you sure you want to delete the appointment?
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
                                        onClick={HandleDeleteAppointment}
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

export default DeleteAppointmentButton