import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"

interface TokenData {
  Email: string;
  Name: string;
  Role: string;
  Phone: number;
  Id: string;
}

const useGetToken = () => {

  const [tokenData, setTokenData] = useState<TokenData>({
    Email: "",
    Name: "",
    Role: "",
    Phone: 0,
    Id: ""
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token) as TokenData
      setTokenData(decodedToken)
    }
  }, [])

  return { tokenData }
}

export default useGetToken
