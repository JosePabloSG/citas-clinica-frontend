import Appointments from "@/components/Appointments"
import { AppointmentForm } from "@/components/component/AppointmentForm"
import { Navbar } from "@/components/component/navbar"

const HomePage = () => {

  return (
    <>
      <Navbar />
      <div className="relative">
        <img className="absolute inset-0 -z-30 opacity-35 h-screen w-screen object-cover blur " src="/BackgroundMain.jpg" />
        <AppointmentForm />
        <Appointments />
      </div>
    </>
  )
}

export default HomePage