import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";


export const useGetToken = () => {
    interface TokenData {
        Email: string;
        Name: string;
        Role: string;
        Id : string;
      }
    
      const [tokenData, setTokenData] = useState<TokenData>({
        Email: "",
        Name: "",
        Role: "",
        Id: ""
      });
    
      useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = jwtDecode(token) as TokenData;
          setTokenData(decodedToken);
        }
      }, []);

    return {tokenData};
}
