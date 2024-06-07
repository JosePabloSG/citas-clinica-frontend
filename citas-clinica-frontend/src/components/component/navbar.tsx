import { DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import Logout from "../Logout"
import useGetToken from "@/hooks/auth/useGetToken"

export function Navbar() {

  const { tokenData } = useGetToken()

  return (
    <header className="flex h-16 items-center justify-between bg-[#134e4a] px-4 md:px-6">
      <Link className="flex items-center text-lg font-bold text-white" to={"/"}>
      <img width={48} height={48} src="\Ico.png" alt="Greys Clinic Logo"/>
      <span className=" ml-5 text-2xl">Grey's Clinic</span>
      </Link>
      <div className="flex items-center my-5">
        {tokenData.Role === 'ADMIN' && (
          <Link to={"/admin"}>
            <button type="button" className="text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-800">Appo List </button>
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
              <div className="col-span-2 sm:col-span-1">
                <h4 className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </h4>
                <div className="text-sm font-medium  text-stone-700">{tokenData.Name}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </h4>
                <div className="text-sm font-medium  text-stone-700">{tokenData.Email}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="block mb-2 text-sm font-medium text-gray-900">
                  Phone
                </h4>
                <div className="text-sm font-medium  text-stone-700">{tokenData.Phone}</div>
              </div>
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
