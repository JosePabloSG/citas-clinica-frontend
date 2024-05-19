import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import Logout from "../Logout"
import { useGetToken } from "@/hooks/auth/useGetToken"



export function Navbar() {

  const { tokenData } = useGetToken();
  
  return (
    <header className="flex h-16 items-center justify-between bg-[#211a6d] px-4 md:px-6">
      <Link className="text-lg font-bold text-white" to={"/"}>
        Greys Clinic
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Avatar" src="/user.svg" />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-75 space-y-2 p-2">
          <div className="space-y-1">
            <div className="text-sm font-medium  text-stone-900">{tokenData.Email}</div>
            <div className="text-sm text-stone-900">{tokenData.Name}</div>
            <div className="text-sm text-stone-900">{tokenData.Role}</div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
