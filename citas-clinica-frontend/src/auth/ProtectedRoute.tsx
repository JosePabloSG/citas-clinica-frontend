import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (token === null) {
            navigate('/login', { replace: true })
            toast.error('You need to login to access this page')
        }
    }, [navigate, token])


    return token ? children : null
}