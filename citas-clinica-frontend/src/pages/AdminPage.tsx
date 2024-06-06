import TableAdmin from "@/components/TableAdmin"
import { Navbar } from "@/components/component/navbar"
const AdminPage = () => {

  return (
    <>
        <main className="min-h-screen bg-gray-200">
          <Navbar />
          <TableAdmin />
        </main>
    </>
  )
}

export default AdminPage