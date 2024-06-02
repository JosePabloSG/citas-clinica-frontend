import useGetAllAppointments from "@/hooks/Appointments/useGetAllAppointments"
import ItemTable from "./ItemTable"
import { Appointment } from "@/types/Appointments"
import { Loader } from "lucide-react"

const TableAdmin = () => {
  const { appointmentsResults,loading } = useGetAllAppointments()

  return (
    <>
      {loading ? (
        <div className="relative overflow-x-auto shadow-md my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#211a6d] dark:bg-[#211a6d] dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Client
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {appointmentsResults.map((appointment: Appointment) => (
                <ItemTable key={appointment.id} appointment={appointment} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default TableAdmin

