import { getAllAppointments } from "@/services/Appointments/Appointments"
import { Appointment } from "@/types/Appointments"
import { useEffect, useState } from "react"


const useGetAllAppointments = () => {

    const [appointmentsResults, setAppointmentsResults] = useState<Appointment[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(false)
      async function getAppointments() {
        if (!localStorage.getItem('token')) {
            return
          }
          try {
            const AppointmentsResult = await getAllAppointments(localStorage.getItem('token') as string)
            setAppointmentsResults(AppointmentsResult)
            setLoading(true)
          } catch (error) {
            console.error("Error to get Appointments ", error)
          }
      }
      getAppointments()
    }, [])
  
    return { appointmentsResults, loading }
}

export default useGetAllAppointments