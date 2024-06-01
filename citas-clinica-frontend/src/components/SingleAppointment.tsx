import { Appointment } from "@/types/Appointments"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import AppointmentsContext from "@/context/AppointmentsContext"
import useAppointment from "@/hooks/Appointments/useAppointment"
import { useContext, useEffect } from "react"
import useCancelAppoinments from "@/hooks/Appointments/useCancellAppointment"


const SingleAppointment = ({
    appointment
}: {
    appointment: Appointment
}) => {

    const { setAppointment,setAppointmentId } = useContext(AppointmentsContext)
    const {isEditing,OnSubmit,register,handleDoubleClick,setIsEditing,appointmentTypes,clinicBranches } = useAppointment()
    
    const { HandlecancellAppointment } = useCancelAppoinments()

    useEffect(() => {
        setAppointment(appointment)
        setAppointmentId(appointment.id)
    }, [appointment, setAppointment, setAppointmentId])
    

    return (
        <div onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <div className="w-full max-w-sm p-4 bg-gray-400 borderborder-white rounded-lg shadow sm:p-6 md:p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <form onSubmit={OnSubmit} className="space-y-6">
                        <div className="col-span-2 sm:col-span-1">
                            <label
                                htmlFor="appointmentTypeId"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                Appointment Type
                            </label>
                            <select
                                data-cy="appointmentTypeId"
                                id="appointmentTypeId"
                                {...register("appointmentTypeId")}
                                required
                                disabled={!isEditing}
                                className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none">
                                <option >Select appoinment type</option>
                                <option value="1">General medicine</option>
                                <option value="2">Dentistry</option>
                                <option value="3">Pediatrics</option>
                                <option value="4">Neurology</option>
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label
                                htmlFor="clinicBranchId"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                Clinic Branch
                            </label>
                            <select
                                data-cy="clinicBranchId"
                                id="clinicBranchId"
                                {...register("clinicBranchId")}
                                required
                                disabled={!isEditing}
                                className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none">
                                <option > Select Clinic Branch </option>
                                <option value="1">San José</option>
                                <option value="2">Lindora</option>
                                <option value="3">LincoIl Plaza</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Appointment Date</Label>
                                <Input
                                    disabled={!isEditing}
                                    data-cy="date"
                                    {...register("date")}
                                    id="date" className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none" type="date" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Appointment Time</Label>
                                <Input
                                    disabled={!isEditing}
                                    data-cy="time"
                                    {...register("time")}
                                    id="time" className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none" type="time" />
                            </div>
                        </div>
                        <section className="flex gap-1 mt-2 justify-end">
                            {isEditing && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="text-xs rounded-full px-4 py-2 text-center me-2 mb-2 font-semibold text-gray-900 ">
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        onClick={HandlecancellAppointment}
                                        className="text-xs bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-semibold rounded-full px-4 py-2 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-white">
                                        Cancel
                                    </button>
                                    <button
                                        data-cy="submit"
                                        type="submit"
                                        className="text-xs bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  font-semibold rounded-full px-4 py-2 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white">
                                        Save
                                    </button>
                                </>
                            )}
                        </section>
                    </form>
                </div>
            ) : (
                <div className="w-full max-w-sm p-4 bg-gray-400 borderborder-white rounded-lg shadow sm:p-6 md:p-8 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">

                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="block mb-2 text-sm font-medium text-gray-900">
                            Appointment Type
                        </h4>
                        <p className=" text-gray-700">{appointmentTypes[appointment.appointmentTypeId]}</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="block mb-2 text-sm font-medium text-gray-900">
                            Clinic Branch
                        </h4>
                        <p className=" text-gray-700">{clinicBranches[appointment.clinicBranchId]}</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="block mb-2 text-sm font-medium text-gray-900">
                            Appointment Date
                        </h4>
                        <p className=" text-gray-700">{new Date(appointment.date).toLocaleDateString('en-EN')}</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="block mb-2 text-sm font-medium text-gray-900">
                            Appointment Time
                        </h4>
                        <p className=" text-gray-700">{appointment.time}</p>
                    </div>

                </div>
            )}
        </div>

    )
}

export default SingleAppointment
