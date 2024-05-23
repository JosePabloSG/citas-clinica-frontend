import TableAdmin from "@/components/TableAdmin"
import { Navbar } from "@/components/component/navbar"
import AppointmentsProvider from "@/context/AppointmentsProvider"

const AdminPage = () => {

  return (
    <>
      <AppointmentsProvider>
        <main className="min-h-screen bg-gray-400">
          <Navbar />
          <TableAdmin />
        </main>
      </AppointmentsProvider>
    </>
  )
}

export default AdminPage