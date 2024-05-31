import { Appointment } from "@/types/Appointments"
import React from "react"

type AppointmentsContextType = {
    newAppointmentCreated : boolean;
    setNewAppointmentCreated: (newAppointmentCreated: boolean) => void;
    appointment: Appointment;
    setAppointment: (appointment: Appointment) => void;
  };

  const AppointmentsContext = React.createContext<AppointmentsContextType>({
    newAppointmentCreated: false,
    setNewAppointmentCreated: () => {},
    appointment: {} as Appointment,
    setAppointment: () => {},
  })
  
  export default AppointmentsContext
  