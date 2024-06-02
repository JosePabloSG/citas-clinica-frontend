import AppointmentsContext from "@/context/AppointmentsContext"
import { cancellAppointment } from "@/services/Appointments/Appointments"
import { useContext } from "react"
import toast from "react-hot-toast"

const CancellAppointmentButton = ({ id }: { id: number }) => {
    interface CustomError {
        message: string;
    }
    const { setNewAppointmentCreated,setIsEditing,newAppointmentCreated } = useContext(AppointmentsContext)

    const HandlecancellAppointment = async () => {
        try {
            const messageResults = await cancellAppointment(id, localStorage.getItem("token") as string)
            setNewAppointmentCreated(!newAppointmentCreated)
            setIsEditing(false)
            toast.success(messageResults)
        } catch (error) {
            toast.error((error as CustomError).message)
            console.error("Error deleting product:", error)
        }
    }

    return (
        <button
            type="button"
            onClick={HandlecancellAppointment}
            className="text-xs bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-semibold rounded-full px-4 py-2 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-white"
        >
            Cancel
        </button>
    )
}

export default CancellAppointmentButton
