import { deleteAppointmente } from "@/services/Appointments/Appointments"
import toast from "react-hot-toast"

const DeleteAppointmentButton = ({ id, setIsEditing }: { id: number, setIsEditing: (isEditing: boolean) => void }) => {

    const HandleDeleteAppointment = async () => {
        try {
            const messageResults = await deleteAppointmente(id, localStorage.getItem("token") as string)
            toast.success(messageResults)
            setIsEditing(false)
        } catch (error) {
            toast.error((error as Error).message)
            console.error("Error deleting product:", error)
        }
    }
    return (
        <button onClick={HandleDeleteAppointment} type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
    )
}

export default DeleteAppointmentButton