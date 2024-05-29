import { Appointment } from "@/types/Appointments"
import { Label } from "@radix-ui/react-label"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "./ui/input"


const SingleAppointment = ({
    appointment
}: {
    appointment: Appointment
}) => {

    const [isEditing, setIsEditing] = useState(false)
    const { register, handleSubmit, setValue } = useForm()

    const OnSubmit = handleSubmit((data) => {
        console.log(data)
    })

    useEffect(() => {
        setValue('appointmentTypeId', appointment.appointmentTypeId)
        setValue('clinicBranchId', appointment.clinicBranchId)
        setValue('date', appointment.date)
        setValue('time', appointment.time)
    }, [appointment.appointmentTypeId, appointment.clinicBranchId, appointment.date, appointment.time, setValue])

    return (
        (
            <div onDoubleClick={() => setIsEditing(true)} className="w-full max-w-sm p-4 bg-gray-400 borderborder-white rounded-lg shadow sm:p-6 md:p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
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
                                    className="text-xs bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-semibold rounded-full px-4 py-2 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-white">
                                    Cancelled
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
        )
    )
}

export default SingleAppointment
