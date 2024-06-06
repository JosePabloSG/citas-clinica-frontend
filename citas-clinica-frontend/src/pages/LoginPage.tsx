import useLogin from "@/hooks/auth/useLogin"
import { Link } from "react-router-dom"

const LoginPage = () => {

    const { onSubmit, register, errors } = useLogin()

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-200">
            <div className="w-full max-w-sm p-4 bg-white border border-teal-600 rounded-lg shadow sm:p-6 md:p-8 dark:bg-teal-900 teal-900">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img src="LogoImages\LogoLogin.jpeg" alt="Greys Clinic Logo" className="h-32 w-32 rounded-full border-4 border-white" />
                </div>
                <form onSubmit={onSubmit} className="space-y-2 mt-16">
                    <h5 className="text-xl font-medium text-white dark:text-white text-center">Sign in to your account</h5>
                    <div>
                        <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input
                            data-cy="UserName"
                            type="text"
                            {...register('UserName')}
                            name="UserName"
                            id="UserName"
                            className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                        />
                        {errors.UserName && (
                            <span className="text-red-500 text-xs mt-1">{errors.UserName.message}</span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            data-cy="password"
                            type="password"
                            {...register('password')}
                            name="password"
                            id="password"
                            className="bg-gray-50 border border-gray-200 text-slate-800  text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>
                        )}
                    </div>
                    <button
                        data-cy="submit"
                        type="submit" className="text-gray bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-teal-400 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Sign in to account.</button>
                    <div className="flex items-start mb-5">
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not registered? <Link to={"/signup"} className="text-blue-600 hover:underline dark:text-teal-400">Create an account.</Link></label>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default LoginPage

