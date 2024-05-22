import AppointmentsAdmin from "@/components/AppointmentsAdmin"
import { Navbar } from "@/components/component/navbar"
import AppointmentsProvider from "@/context/AppointmentsProvider"

const AdminPage = () => {

  return (
    <>
      <AppointmentsProvider>
        <Navbar />
        <AppointmentsAdmin />
      </AppointmentsProvider>
    </>
  )
}

export default AdminPage