import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';


interface AdminRouteProps {
    children: React.ReactNode;
}

function AdminRoute({ children }: AdminRouteProps) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let Role: any;

    if (token) {
        Role = jwtDecode(token);
    }

    useEffect(() => {
        if (!Role || Role?.Role !== 'ADMIN') {
            navigate('/', { replace: true });
            toast.error('You are not authorized to access this page');
        }
    }, [Role, navigate]);

    return children;
}

export default AdminRoute;