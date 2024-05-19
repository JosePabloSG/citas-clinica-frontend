import { Role } from '@/types/Role';
import { createContext, PropsWithChildren, useContext, useState } from 'react';


const AuthContext = createContext<Role | null>(null);

type AuthProviderProps = PropsWithChildren & {
    isSignedIn?: boolean;
};

export default function AuthProvider({
    children,
    isSignedIn,
}: AuthProviderProps) {
    
    const [user] = useState<Role | null>(isSignedIn ? { Role: "Admin" } : null);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};