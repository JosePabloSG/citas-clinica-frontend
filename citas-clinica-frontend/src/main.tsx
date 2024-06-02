import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AuthProvider from './auth/AuthProvider'
import ProtectedRoute from './auth/ProtectedRoute'
import SignupPage from './pages/SignupPage'
import AdminRoute from './auth/AdminRoute'
import AdminPage from './pages/AdminPage'
import { Toaster } from 'react-hot-toast'
import NotFound from './pages/NotFound'
import UnauthorizedPage from './pages/UnauthorizedPage'
import AppointmentsProvider from './context/AppointmentsProvider'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminPage />
      </AdminRoute>
    )
  },
  {
    path: "*",
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppointmentsProvider>  
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
      </AppointmentsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
