import AppointmentsContext from '@/context/AppointmentsContext'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const useAppointment = () => {

    const {appointment} = useContext(AppointmentsContext)
    
    const [isEditing, setIsEditing] = useState(false)
    const { register, handleSubmit, setValue } = useForm()

    const OnSubmit = handleSubmit((data) => {
        console.log(data)
    })


    useEffect(() => {
        setValue('appointmentTypeId', appointment.appointmentTypeId)
        setValue('clinicBranchId', appointment.clinicBranchId)
        setValue('date', appointment.date)
        setValue('time', appointment.time)
    }, [appointment.appointmentTypeId, appointment.clinicBranchId, appointment.date, appointment.time, setValue])

    const handleDoubleClick = () => {
        setIsEditing(true)
    }

    type AppointmentTypes = { [key: number]: string }

    const appointmentTypes: AppointmentTypes = {
        1: 'General medicine',
        2: 'Dentistry',
        3: 'Pediatrics',
        4: 'Neurology'
    }

    type ClinicBranches = { [key: number]: string }

    const clinicBranches: ClinicBranches = {
        1: 'San José',
        2: 'Lindora',
        3: 'Lincoln Plaza'
    }

    return { OnSubmit, register, isEditing,setIsEditing, handleDoubleClick, appointmentTypes, clinicBranches }

}

export default useAppointment