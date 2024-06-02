import { Appointment } from "@/types/Appointments"
import React from "react"

type AppointmentsContextType = {
    newAppointmentCreated : boolean;
    setNewAppointmentCreated: (newAppointmentCreated: boolean) => void;
    appointment: Appointment;
    setAppointment: (appointment: Appointment) => void;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
  };

  const AppointmentsContext = React.createContext<AppointmentsContextType>({
    newAppointmentCreated: false,
    setNewAppointmentCreated: () => {},
    appointment: {} as Appointment,
    setAppointment: () => {},
    isEditing: false,
    setIsEditing: () => {}
  })
  
  export default AppointmentsContext
  