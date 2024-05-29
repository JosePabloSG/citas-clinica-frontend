import useGetAppointmentsByUser from "@/hooks/Appointments/useGetAppointmentsByUser"
import Loader from "./Loader"
import { Appointment } from "@/types/Appointments"
import SingleAppointment from "./SingleAppointment"

const Appointments = () => {

    const { filteredAppointments, loading } = useGetAppointmentsByUser()

    return (
        <>
            {loading ? (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-5 place-items-center px-3 ">
                    {filteredAppointments.map((appointment: Appointment) => (
                        <SingleAppointment key={appointment.id} appointment={appointment} />
                    ))
                    }
                </section>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Appointments