import useGetAllAppointments from "@/hooks/Appointments/useGetAllAppointments"
import { Appointment } from "@/types/Appointments"

import SingleAppointmentAdmin from "./SingleAppointmentAdmin"
import Loader from "./Loader"

const AppointmentsAdmin = () => {
    
    const { appointmentsResults, loading } = useGetAllAppointments()

    return (
        <>
            {loading ? (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-5 mt-5 place-items-center">
                    {appointmentsResults.map((appointment: Appointment) => (
                        <SingleAppointmentAdmin key={appointment.id} appointment={appointment} />
                    ))
                    }
                </section>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default AppointmentsAdmin