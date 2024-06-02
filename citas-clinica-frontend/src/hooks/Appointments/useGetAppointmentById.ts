import AppointmentsContext from "@/context/AppointmentsContext"
import { getAppointmentById } from "@/services/Appointments/Appointments"
import { Appointment } from "@/types/Appointments"
import { useContext, useEffect, useState } from "react"

const useGetAppointmentById = () => {
    
    const {AppointmentId} = useContext(AppointmentsContext)
    const [loading, setLoading] = useState(false)
    const [appointmentIdData, setAppointmentIdData] = useState<Appointment>()

    useEffect(() => {
        setLoading(false)
        async function getAppointmentByIdData() {
          try {
            const appointmentsResult = await getAppointmentById(AppointmentId, localStorage.getItem('token') as string)
            setAppointmentIdData(appointmentsResult)
            setLoading(true)
          } catch (error) {
            console.error("Error to get Appointments ", error)
          }
        }
        getAppointmentByIdData()
      }, [AppointmentId])

  return {loading,appointmentIdData}
}

export default useGetAppointmentById