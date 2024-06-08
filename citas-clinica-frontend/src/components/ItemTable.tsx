import { Appointment } from "@/types/Appointments"
import DeleteAdmin from "./DeleteAdmin"



const ItemTable = ({ appointment }: { appointment: Appointment }) => {

    return (
        <tr className=" bg-white border-b dark:border-gray-800 rounded m-4">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-white-200 whitespace-nowrap dark:text-gray-900 text-green-500"

            >
                {appointment.id}
            </th>
            <td className=" text-slate-900 font-medium  px-6 py-4">{appointment.date}</td>
            <td className="text-slate-900 font-medium  px-6 py-4">{appointment.time}</td>
            <td className={`${appointment.status ? 'text-green-500' : 'text-red-500'} font-medium  px-6 py-4`}>
                {appointment.status ? "Pending" : "Cancelled"}
            </td>
            <td className=" text-slate-900 font-medium  px-6 py-4">{appointment.userId}</td>
            <td className=" text-slate-900 font-medium  px-6 py-4">{appointment.user.name}</td>
            <td className=" text-slate-900 font-medium  px-6 py-4">{appointment.clinicBranch.name}</td>
            <td className=" text-slate-900 font-medium  px-6 py-4">{appointment.appointmentType.name}</td>
            <td className=" text-slate-900 px-9 py-4 ">
                <DeleteAdmin AppoinmentId={appointment.id} />
            </td>
        </tr>
    )
}

export default ItemTable
