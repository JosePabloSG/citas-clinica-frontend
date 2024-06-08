import { Appointment } from "@/types/Appointments"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import CancellAppointmentButton from "./CancellAppointmentButton"
import { useState } from "react"
import DeleteAppointmentButton from "./DeleteAppointmentButton"
import usePutAppointment from "@/hooks/Appointments/usePutAppointment"



const SingleAppointment = ({ appointment }: { appointment: Appointment }) => {

    const [isEditing, setIsEditing] = useState(false)
    const { OnSubmit, register } = usePutAppointment(setIsEditing, appointment)

    return (
        <div className=" animate-open-close" onDoubleClick={() => setIsEditing(true)}>
            {isEditing ? (
                    <div className="w-full max-w-sm p-4 bg-slate-300 border border-white rounded-lg shadow sm:p-6 md:p-8 animate-open-close">
                        <div className=" flex justify-end">
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="text-xs rounded-full px-4 py-2 text-center me-2 mb-2 font-semibold text-gray-900 "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={OnSubmit} className="space-y-6">
                            <div className="col-span-2 sm:col-span-1">
                                <label
                                    htmlFor="appointmentTypeId"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Appointment Type
                                </label>
                                <select
                                    data-cy="appointmentTypeId"
                                    id="appointmentTypeId"
                                    {...register("appointmentTypeId")}
                                    required
                                    disabled={!isEditing}
                                    defaultValue={appointment.appointmentTypeId}
                                    className="bg-slate-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
                                >
                                    <option>Select appoinment type</option>
                                    <option value="1">General medicine</option>
                                    <option value="2">Dentistry</option>
                                    <option value="3">Pediatrics</option>
                                    <option value="4">Neurology</option>
                                </select>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label
                                    htmlFor="clinicBranchId"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Clinic Branch
                                </label>
                                <select
                                    data-cy="clinicBranchId"
                                    id="clinicBranchId"
                                    {...register("clinicBranchId")}
                                    required
                                    disabled={!isEditing}
                                    defaultValue={appointment.clinicBranchId}
                                    className="bg-slate-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
                                >
                                    <option> Select Clinic Branch </option>
                                    <option value="1">San José</option>
                                    <option value="2">Lindora</option>
                                    <option value="3">LincoIl Plaza</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="date"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Appointment Date
                                    </Label>
                                    <Input
                                        disabled={!isEditing}
                                        data-cy="date"
                                        defaultValue={appointment.date}
                                        {...register("date")}
                                        id="date"
                                        className="bg-slate-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
                                        type="date"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="time"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Appointment Time
                                    </Label>
                                    <Input
                                        disabled={!isEditing}
                                        data-cy="time"
                                        {...register("time")}
                                        defaultValue={appointment.time}
                                        id="time"
                                        className="bg-slate-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
                                        type="time"
                                    />
                                </div>
                            </div>
                            <section className="flex gap-3 mt-2 justify-end">
                                <>
                                    <CancellAppointmentButton id={appointment.id} setIsEditing={setIsEditing} />
                                    <DeleteAppointmentButton id={appointment.id} setIsEditing={setIsEditing} />
                                    <button
                                        data-cy="submit"
                                        type="submit"
                                        className="text-xs bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  font-semibold rounded-full px-4 py-2 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white"
                                    >
                                        Save
                                    </button>
                                </>
                            </section>
                        </form>
                    </div>
            ) : (
                    <div className="w-full max-w-sm p-4 bg-slate-300 borderborder-white rounded-lg shadow sm:p-6 md:p-8 animate-open-close hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="flex mb-2 text-sm font-medium justify-center text-gray-900">
                                Status
                            </h4>
                            <p className="flex justify-center text-gray-700">{appointment.status ? 'Pending' : 'Cancelled'}</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="flex justify-center mb-2 text-sm font-medium text-gray-900">
                                Appointment Type
                            </h4>
                            <p className=" flex justify-center text-gray-700">{appointment.appointmentType.name}</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="flex justify-center mb-2 text-sm font-medium text-gray-900">
                                Clinic Branch
                            </h4>
                            <p className="flex justify-center text-gray-700">{appointment.clinicBranch.name}</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="flex justify-center mb-2 text-sm font-medium text-gray-900">
                                Appointment Date
                            </h4>
                            <p className="flex justify-center text-gray-700"> {new Date(appointment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}    </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="flex justify-centermb-2 text-sm font-medium text-gray-900">
                                Appointment Time
                            </h4>
                            <p className="flex justify-center text-gray-700">
                            {appointment.time.split(':').slice(0, 2).join(':')}
                            </p>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default SingleAppointment
