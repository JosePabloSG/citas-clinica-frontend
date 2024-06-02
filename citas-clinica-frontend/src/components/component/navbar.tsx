import { DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import Logout from "../Logout"
import useGetToken from "@/hooks/auth/useGetToken"

export function Navbar() {

  const { tokenData } = useGetToken()

  return (
    <header className="flex h-16 items-center justify-between bg-[#211a6d] px-4 md:px-6">
      <Link className="text-lg font-bold text-white" to={"/"}>
        Greys Clinic
      </Link>
      <div className="flex items-center my-5">
        {tokenData.Role === 'ADMIN' && (
          <Link to={"/admin"}>
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Maintenance</button>
          </Link>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-75 space-y-2 p-2">
            <div className="space-y-1">
              <div className="text-sm font-medium  text-stone-900">{tokenData.Email}</div>
              <div className="text-sm text-stone-900">{tokenData.Name}</div>
              {
                tokenData.Role === 'ADMIN' && (
                  <div className="text-sm text-stone-900">Admin</div>
                )
              }
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Logout />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
