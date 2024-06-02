import React from "react"

type AppointmentsContextType = {
    newAppointmentCreated : boolean;
    setNewAppointmentCreated: (newAppointmentCreated: boolean) => void;
  };

  const AppointmentsContext = React.createContext<AppointmentsContextType>({
    newAppointmentCreated: false,
    setNewAppointmentCreated: () => {},
  })
  
  export default AppointmentsContext
  