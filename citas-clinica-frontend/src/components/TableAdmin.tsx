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
          <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-200">
            <thead className="text-xs text-gray-900 uppercase bg-[#374151] dark:bg-[#115e59] dark:text-gray-200">
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

