import { useState } from "react"
import useGetAllAppointments from "@/hooks/Appointments/useGetAllAppointments"
import { Appointment } from "@/types/Appointments"
import ItemTable from "../ItemTable"
import Loader from "../Loader"

const Search = ({ onSearch }: { onSearch: (id: number) => void }) => {
  const { appointmentsResults, loading } = useGetAllAppointments()
  const [searchId, setSearchId] = useState<number | null>(null)

  const handleChange = (e: { target: { value: string } }) => {
    const id = parseInt(e.target.value)
    setSearchId(id)
    onSearch(id) // Llama a la función de búsqueda con el ID de usuario
  }

  const filteredAppointments = searchId
    ? appointmentsResults.filter((appointment) => appointment.id === searchId)
    : appointmentsResults

  return (
    <>
      <div className="flex">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            onChange={handleChange}
            className="block md:w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by User ID"
          />
        </div>
      </div>
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
              {filteredAppointments.map((appointment: Appointment) => (
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

export default Search