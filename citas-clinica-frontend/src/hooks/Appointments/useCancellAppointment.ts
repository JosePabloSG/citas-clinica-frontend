import { useState, useContext } from "react"
import { cancellAppointment } from "@/services/Appointments/Appointments"
import AppointmentsContext from "@/context/AppointmentsContext"
import { toast } from "react-hot-toast"
import useAppointment from "./useAppointment"

const useCancellAppointment = () => {
  const { setNewAppointmentCreated, AppointmentId } = useContext(AppointmentsContext)
  const {setIsEditing} = useAppointment()
  const [loading, setloading] = useState(false)

  interface CustomError {
    message: string;
  }

  const HandlecancellAppointment = async () => {
    setloading(true)
    
    try {
      await cancellAppointment(AppointmentId, localStorage.getItem('token') as string)
      setloading(false)
      setNewAppointmentCreated(true)
      setIsEditing(false)
      toast.success('Appointment canceled successfully')
    } catch (error) {
      toast.error((error as CustomError).message)
      console.error('Error deleting product:', error) 
    }
  }

  return { HandlecancellAppointment, loading }

}

export default useCancellAppointment
