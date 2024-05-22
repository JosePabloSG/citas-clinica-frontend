import { ReactNode, useState } from "react"
import AppointmentsContext from "./AppointmentsContext"

const AppointmentsProvider = ({ children }: { children: ReactNode }) => {
    const [newAppointmentCreated, setNewAppointmentCreated] = useState(false)
    return (
        <AppointmentsContext.Provider value={{
            newAppointmentCreated,
            setNewAppointmentCreated
        }}>
            {children}
        </AppointmentsContext.Provider>
    )
}

export default AppointmentsProvider
