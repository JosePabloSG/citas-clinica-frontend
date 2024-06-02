import AppointmentsContext from "@/context/AppointmentsContext"
import { getAllAppointments } from "@/services/Appointments/Appointments"
import { Appointment } from "@/types/Appointments"
import { useContext, useEffect, useState } from "react"


const useGetAllAppointments = () => {

  const [appointmentsResults, setAppointmentsResults] = useState<Appointment[]>([])
  const {newAppointmentCreated} = useContext(AppointmentsContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    async function getAppointments() {
      if (!localStorage.getItem('token')) {
        return
      }
      try {
        const AppointmentsResult = await getAllAppointments(localStorage.getItem('token') as string)
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString().split('T')[0]
        const todayAppointments = AppointmentsResult.filter(appointment => appointment.date === today)
        setAppointmentsResults(todayAppointments)
        setLoading(true)
      } catch (error) {
        console.error("Error to get Appointments ", error)
      }
    }
    getAppointments()
  }, [newAppointmentCreated])

  return { appointmentsResults, loading }
}

export default useGetAllAppointments