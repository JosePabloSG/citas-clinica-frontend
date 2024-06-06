import AppointmentsContext from "@/context/AppointmentsContext"
import { deleteAppointmente } from "@/services/Appointments/Appointments"
import { Appointment } from "@/types/Appointments"
import { useContext } from "react"
import toast from "react-hot-toast"

interface CustomError {
    message: string;
}

const ItemTable = ({ appointment }: { appointment: Appointment }) => {

    const { setNewAppointmentCreated, newAppointmentCreated } = useContext(AppointmentsContext)

    const handleDelete = async () => {
        try {
            const messageResults = await deleteAppointmente(
                appointment.id,
                localStorage.getItem("token") as string
            )
            setNewAppointmentCreated(!newAppointmentCreated)
            toast.success(messageResults)
        } catch (error) {
            toast.error((error as CustomError).message)
        }
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-200 rounded m-4">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-white-200 whitespace-nowrap dark:text-white"
            >
                {appointment.id}
            </th>
            <td className="px-6 py-4">{appointment.date}</td>
            <td className="px-6 py-4">{appointment.time}</td>
            <td className="px-6 py-4">
                {appointment.status ? "Pending" : "Cancelled"}
            </td>
            <td className="px-6 py-4">{appointment.userId}</td>
            <td className="px-6 py-4">{appointment.user.name}</td>
            <td className="px-6 py-4">{appointment.clinicBranch.name}</td>
            <td className="px-6 py-4">{appointment.appointmentType.name}</td>
            <td className="px-6 py-4">
                <button
                    onClick={handleDelete}
                    className="font-medium text-red-500 dark:text-red-6bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-red-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-100 appearance-none00 hover:underline"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ItemTable
