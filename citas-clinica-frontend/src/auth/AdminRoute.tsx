import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'



interface AdminRouteProps {
    children: React.ReactNode;
}

function AdminRoute({ children }: AdminRouteProps) {
    interface Role {
        Role: string;
    }

    const token = localStorage.getItem('token')
    let Role: Role | null = null

    if (token) {
        Role = jwtDecode(token)
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (!Role || Role.Role !== 'ADMIN') {
            navigate('/unauthorized')
        }
    }, [Role, navigate])

    return token && Role && Role.Role === 'ADMIN' ? <>{children}</> : null
}

export default AdminRoute