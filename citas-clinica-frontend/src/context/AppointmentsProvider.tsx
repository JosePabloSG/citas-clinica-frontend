import { ReactNode, useState } from "react"
import AppointmentsContext from "./AppointmentsContext"
import { Appointment } from "@/types/Appointments"

const AppointmentsProvider = ({ children }: { children: ReactNode }) => {
    const [newAppointmentCreated, setNewAppointmentCreated] = useState(false)
    const [appointment, setAppointment] = useState<Appointment>({} as Appointment)
    const [AppointmentId, setAppointmentId] = useState(0)  
    return (
        <AppointmentsContext.Provider value={{
            newAppointmentCreated,
            setNewAppointmentCreated,
            appointment,
            setAppointment,
            AppointmentId,
            setAppointmentId
        }}>
            {children}
        </AppointmentsContext.Provider>
    )
}

export default AppointmentsProvider
