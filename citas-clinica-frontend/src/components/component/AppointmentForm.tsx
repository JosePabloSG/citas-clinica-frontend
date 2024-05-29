import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import usePostAppoinments from "@/hooks/Appointments/usePostAppoinments"

export function AppointmentForm() {

  const { setShowModal, showModal, OnSubmit, register } = usePostAppoinments()

  return (
    <>
      <button
        data-cy="schedule"
        className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Schedule
      </button>
      {showModal ? (
        <>
            <div className={`fixed inset-0 flex items-center justify-center transform transition-transform duration-1000 z-50 ${showModal ? 'scale-100' : 'scale-0'}`}>
              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-blue-900 dark:border-[#211a6d]">
                <form onSubmit={OnSubmit} className="space-y-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="appointmentTypeId"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Appointment Type
                    </label>
                    <select
                      data-cy="appointmentTypeId"
                      id="appointmentTypeId"
                      {...register("appointmentTypeId")}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-300 appearance-none">
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
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Clinic Branch
                    </label>
                    <select
                      data-cy="clinicBranchId"
                      id="clinicBranchId"
                      {...register("clinicBranchId")}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-300 appearance-none">
                      <option > Select Clinic Branch </option>
                      <option value="1">San José</option>
                      <option value="2">Lindora</option>
                      <option value="3">LincoIl Plaza</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Appointment Date</Label>
                      <Input
                        data-cy="date"
                        {...register("date")}
                        id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-300" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Appointment Time</Label>
                      <Input
                        data-cy="time"
                        {...register("time")}
                        id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-300" type="time" />
                    </div>
                  </div>
                  <section className="flex gap-2 mt-2 justify-end">

                    <Link to="/">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="text-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        Close
                      </button>
                    </Link>
                    <button
                      data-cy="submit"
                      type="submit"
                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Save
                    </button>
                  </section>
                </form>
              </div>
            </div>
        </>
      ) : null}
    </>
  )
}
