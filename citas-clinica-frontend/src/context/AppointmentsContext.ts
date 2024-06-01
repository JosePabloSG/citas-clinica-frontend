import { Appointment } from "@/types/Appointments"
import React from "react"

type AppointmentsContextType = {
    newAppointmentCreated : boolean;
    setNewAppointmentCreated: (newAppointmentCreated: boolean) => void;
    appointment: Appointment;
    setAppointment: (appointment: Appointment) => void;
    AppointmentId: number
    setAppointmentId: (AppointmentId: number) => void;
  };

  const AppointmentsContext = React.createContext<AppointmentsContextType>({
    newAppointmentCreated: false,
    setNewAppointmentCreated: () => {},
    appointment: {} as Appointment,
    setAppointment: () => {},
    AppointmentId: 0,
    setAppointmentId: () =>  {}
  })
  
  export default AppointmentsContext
  