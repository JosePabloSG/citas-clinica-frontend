import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import usePostAppoinments from "@/hooks/Appointments/usePostAppoinments"

export function AppointmentForm() {

  const { setShowModal, showModal, OnSubmit, register } = usePostAppoinments()

  return (
    <>
      <button
        data-cy="schedule"
        className="m-4 text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Schedule
      </button>
      {showModal ? (
        <>
          <div className={`fixed inset-0 flex items-center justify-center transform transition-transform duration-1000 z-50 ${showModal ? 'scale-100' : 'scale-0'}`}>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-teal-900 dark:border-[#134e4a]">
              <div >
                <div className=" flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-xs rounded-full px-4 py-2 text-center me-2 mb-2 font-semibold text-gray-900 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="#ffffff" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" /></svg>
                  </button>
                </div>

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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 appearance-none">
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 appearance-none">
                      <option > Select Clinic Branch </option>
                      <option value="1">San José</option>
                      <option value="2">Heredia</option>
                      <option value="3">Lindora</option>
                      <option value="4">LincoIl Plaza</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Appointment Date</Label>
                      <Input
                        data-cy="date"
                        {...register("date")}
                        id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Appointment Time</Label>
                      <Input
                        data-cy="time"
                        {...register("time")}
                        id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" type="time" />
                    </div>
                  </div>
                  <section className="flex gap-2 mt-2 justify-end">
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
          </div>
        </>
      ) : null}
    </>
  )
}
