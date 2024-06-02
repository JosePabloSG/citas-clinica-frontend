import { ReactNode, useState } from "react"
import AppointmentsContext from "./AppointmentsContext"
import { Appointment } from "@/types/Appointments"

const AppointmentsProvider = ({ children }: { children: ReactNode }) => {
    const [newAppointmentCreated, setNewAppointmentCreated] = useState(false)
    const [appointment, setAppointment] = useState<Appointment>({} as Appointment)
    const [isEditing, setIsEditing] = useState(false)

    return (
        <AppointmentsContext.Provider value={{
            newAppointmentCreated,
            setNewAppointmentCreated,
            appointment,
            setAppointment,
            isEditing,
            setIsEditing
        }}>
            {children}
        </AppointmentsContext.Provider>
    )
}

export default AppointmentsProvider
