import { Appointment } from "@/types/Appointments"

const SingleAppointmentAdmin = ({
    appointment
}: {
    appointment: Appointment
}) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-gray-500">{appointment.date}</p>
            <p className="text-gray-500">{appointment.time}</p>
        </div>
    )
}

export default SingleAppointmentAdmin