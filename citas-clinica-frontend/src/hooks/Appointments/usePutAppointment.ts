import { useForm } from "react-hook-form"
import useGetToken from "../auth/useGetToken"
import { updateAppointment } from "@/services/Appointments/Appointments"
import toast from "react-hot-toast"
import { Appointment } from "@/types/Appointments"
import { useContext } from "react"
import AppointmentsContext from "@/context/AppointmentsContext"

interface Data {
    id: string;
    time: string;
    appointmentTypeId: string;
    clinicBranchId: string;
  }

  interface TokenData {
    Id: string;
  }

  interface CustomError {
    message: string;
}

const usePutAppointment = ( setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,appointment: Appointment) => {

    const { register, handleSubmit } = useForm()
    const { tokenData } = useGetToken()
    const {newAppointmentCreated,setNewAppointmentCreated} = useContext(AppointmentsContext)

      function formatedData(data: Data, tokenData: TokenData, appointmentId: number) {
        data.time = data.time + ':00'
        const productData = JSON.parse(JSON.stringify(data))
        productData.userId = parseInt(tokenData.Id)
        productData.appointmentTypeId = parseInt(data.appointmentTypeId)
        productData.clinicBranchId = parseInt(data.clinicBranchId)
        productData.status = true
        productData.id = appointmentId
        return productData
      }

    const OnSubmit = handleSubmit(async (data) => {

        const AppointmentData: Appointment = formatedData(data as Data, tokenData, appointment.id)
        
        try {
            await updateAppointment(appointment.id, AppointmentData, localStorage.getItem('token') as string)
            toast.success('Appointment updated successfully')
            setNewAppointmentCreated(!newAppointmentCreated)
            setIsEditing(false)
        }catch (error) {
            toast.error((error as CustomError).message)
            setIsEditing(false)
            throw error
        }
    })

    return { OnSubmit, register }
 
}

export default usePutAppointment