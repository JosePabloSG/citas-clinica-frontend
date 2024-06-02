import AppointmentsContext from "@/context/AppointmentsContext"
import { cancellAppointment } from "@/services/Appointments/Appointments"
import { useContext } from "react"
import toast from "react-hot-toast"

const CancellAppointmentButton = ({ id, setIsEditing }: { id: number, setIsEditing: (isEditing: boolean) => void }) => {
    interface CustomError {
        message: string;
    }
    const { setNewAppointmentCreated, newAppointmentCreated } = useContext(AppointmentsContext)

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
            className="text-xs rounded-full px-4 py-2 text-center me-2 mb-2 font-semibold text-gray-900"
        >
            Cancel
        </button>
    )
}

export default CancellAppointmentButton
