import { useState, useContext } from "react"
import { cancellAppointment } from "@/services/Appointments/Appointments"
import useGetToken from "../auth/useGetToken"
import AppointmentsContext from "@/context/AppointmentsContext"
import { toast } from "sonner"

const useCancellAppointment = () => {
  const {tokenData} = useGetToken()
  const {newAppointmentCreated, setNewAppointmentCreated, AppointmentId} = useContext(AppointmentsContext)
  const [loading, setloading] = useState (false)


const HandlecancellAppointment = async () => {
  console.log("Submit delete product")
  try {
    await cancellAppointment(AppointmentId, localStorage.getItem('token') as string)
    toast.success("'Correcto")
  } catch (error) {
    console.error('Error deleting product:', error)
    }
  }

return{HandlecancellAppointment, loading}

}

export default useCancellAppointment
