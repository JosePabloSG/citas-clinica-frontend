import { AppointmentForm } from "@/components/component/AppointmentForm"
import { Navbar } from "@/components/component/navbar"

const HomePage = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-400 ">
        <Navbar />
        <AppointmentForm />
      </main>
    </>
  )
}

export default HomePage