import useGetAppointmentsByUser from "@/hooks/Appointments/useGetAppointmentsByUser"
import Loader from "./Loader"
import { Appointment } from "@/types/Appointments"
import SingleAppointment from "./SingleAppointment"

const Appointments = () => {

    const { filteredProducts, loading } = useGetAppointmentsByUser()

    return (
        <>
            {loading ? (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-5 mt-5 place-items-center">
                    {filteredProducts.map((appointment: Appointment) => (
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