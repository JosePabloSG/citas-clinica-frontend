import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { User } from "../types/User"
import { createUser } from "../services/Auth/PostUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import LoginUserSchema from "../validations/LoginUserSchema"

const LoginPage = () => {

    type FormFields = z.infer<typeof LoginUserSchema>

    const { handleSubmit, register, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(LoginUserSchema)
    })

    const navigate = useNavigate()

    const OnSubmit = handleSubmit(async (data) => {

        const LoginData: User = JSON.parse(JSON.stringify(data))
        try {
            await createUser(LoginData)
            navigate('/')
        } catch (error) {
            console.error('Error creating product:', error)
        }

    })

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#101f33]">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={OnSubmit} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Sign in to your account</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            type="email"
                            {...register('email')}
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@gmail.com"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            type="password"
                            {...register('password')}
                            name="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>
                        )}
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in to account.</button>
                    <div className="flex items-start mb-5">
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not registered? <Link to={"/signup"} className="text-blue-600 hover:underline dark:text-blue-500">Create an account.</Link></label>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default LoginPage

