import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Appointment } from "@/types/Appointments"
import { createAppointment } from "@/services/Appointments/Appointments"
import { toast } from "sonner"
import useGetToken from "../auth/useGetToken"
import AppointmentsContext from "@/context/AppointmentsContext"

const usePostAppoinments = () => {

  const { register, handleSubmit } = useForm()
  const [showModal, setShowModal] = useState(false)
  const { tokenData } = useGetToken()
  const { newAppointmentCreated, setNewAppointmentCreated } = useContext(AppointmentsContext)

  interface Data {
    time: string;
    appointmentTypeId: string;
    clinicBranchId: string;
  }

  interface TokenData {
    Id: string;
  }

  function formatedData(data: Data, tokenData: TokenData) {
    data.time += ":00"
    const productData = JSON.parse(JSON.stringify(data))
    productData.userId = parseInt(tokenData.Id)
    productData.appointmentTypeId = parseInt(data.appointmentTypeId)
    productData.clinicBranchId = parseInt(data.clinicBranchId)
    productData.status = true
    productData.id = 0
    return productData
  }

  const OnSubmit = handleSubmit(async (data) => {
    const productData: Appointment = formatedData(data as Data, tokenData)

    try {
      await createAppointment(productData, localStorage.getItem('token') as string)
      setNewAppointmentCreated(!newAppointmentCreated)
      toast.success('Appointment scheduled successfully')
      setShowModal(false)
    } catch (error) {
      toast.error('Error scheduling appointment')
      setShowModal(false)
    }
  })

  return { OnSubmit, register, showModal, setShowModal, newAppointmentCreated, setNewAppointmentCreated }
}

export default usePostAppoinments