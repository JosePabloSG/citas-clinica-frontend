import TableAdmin from "@/components/TableAdmin"
import { Navbar } from "@/components/component/navbar"
const AdminPage = () => {

  return (
    <>
      <div className="relative">
        <img className="absolute inset-0 -z-30 opacity-35 h-screen w-screen object-cover blur " src="/BackgroundMain.webp" />
        <Navbar />
        <TableAdmin />
      </div>
    </>
  )
}

export default AdminPage