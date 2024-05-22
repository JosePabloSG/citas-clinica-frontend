import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (token === null) {
            navigate('/login', { replace: true })
        }
    }, [navigate, token])

    if (token === null) {
        return null
    }

    return children
}