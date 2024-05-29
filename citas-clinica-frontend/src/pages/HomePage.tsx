import Appointments from "@/components/Appointments"
import { AppointmentForm } from "@/components/component/AppointmentForm"
import { Navbar } from "@/components/component/navbar"
import AppointmentsProvider from "@/context/AppointmentsProvider"

const HomePage = () => {

  return (
    <>
      <main className="min-h-screen bg-gray-500 ">
        <Navbar />
        <AppointmentsProvider>
          <AppointmentForm />
          <Appointments />
        </AppointmentsProvider>
      </main>
    </>
  )
}

export default HomePage