import  { useState } from "react"
import useGetAllAppointments from "@/hooks/Appointments/useGetAllAppointments"
import { Appointment } from "@/types/Appointments"
import Search from "./ui/Search"

const TableAdmin = () => {
    const { appointmentsResults} = useGetAllAppointments()
    const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>(appointmentsResults)
  
    const handleSearch = (id: number) => { 
      const filtered = id ? appointmentsResults.filter((appointment) => appointment.id === id) : appointmentsResults
      setFilteredAppointments(filtered)
    }
    return (
        <>
        <Search onSearch={handleSearch} />
           
        </>
    )
}

export default TableAdmin

