import { getAppointmentByUser } from "@/services/Appointments/Appointments"
import { Appointment } from "@/types/Appointments"
import { useContext, useEffect, useState } from "react"
import useGetToken from "../auth/useGetToken"
import AppointmentsContext from "@/context/AppointmentsContext"


const useGetAppointmentsByUser = () => {

  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(false)
  const { newAppointmentCreated } = useContext(AppointmentsContext)
 

  const { tokenData } = useGetToken()
  const userId = tokenData?.Id

  useEffect(() => {
    setLoading(false)
    async function getAppointments() {
      if (!userId || !localStorage.getItem('token')) {
        return
      }
      try {
        const appointmentsResult = await getAppointmentByUser(userId, localStorage.getItem('token') as string)
        setFilteredAppointments(appointmentsResult)

        setLoading(true)
      } catch (error) {
        console.error("Error to get Appointments ", error)
      }
    }
    getAppointments()
  }, [userId, newAppointmentCreated])

  return { filteredAppointments, loading }
}

export default useGetAppointmentsByUser