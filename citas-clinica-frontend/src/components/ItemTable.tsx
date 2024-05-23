import { Appointment } from "@/types/Appointments"

const ItemTable = ({
    appointment
}: {
    appointment: Appointment
}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 rounded m-4">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {appointment.id}
            </th>
            <td className="px-6 py-4">
                {appointment.date}
            </td>
            <td className="px-6 py-4">
                {appointment.time}
            </td>
            <td className="px-6 py-4">
                {appointment.status ? 'Pending' : 'Cancelled'}
            </td>
            <td className="px-6 py-4">
                {appointment.userId}
            </td>
            <td className="px-6 py-4">
                {appointment.clinicBranchId}
            </td>
            <td className="px-6 py-4">
                {appointment.appointmentTypeId}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-red-500 dark:text-red-500 hover:underline">Delete</a>
            </td>
        </tr>
    )
}

export default ItemTable