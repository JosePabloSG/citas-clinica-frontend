import useSignup from "@/hooks/auth/useSignup"
import { Link } from "react-router-dom"

const SignupPage = () => {

    const { onSubmit, register, errors } = useSignup()

    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-gray-400">
                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-blue-900 dark:border-gray-700">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create an account</h5>
                        <div className="flex gap-4  ">
                            <div>
                                <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input
                                    type="text"
                                    {...register('Name')}
                                    name="Name"
                                    id="Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="John Doe"
                                />
                                {errors.Name && <p className="text-red-500 text-xs mt-1">{errors.Name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                <input
                                    type="text"
                                    {...register('UserName')}
                                    name="UserName"
                                    id="UserName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="johndoe"
                                />
                                {errors.UserName && <p className="text-red-500 text-xs mt-1">{errors.UserName.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your id</label>
                            <input
                                type="number"
                                {...register('Id')}
                                name="Id"
                                id="Id"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="1234567890"
                            />
                            {errors.Id && <p className="text-red-500 text-xs mt-1">{errors.Id.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input
                                type="Email"
                                {...register('Email')}
                                name="Email"
                                id="Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@gmail.com"
                            />
                            {errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="CellPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your cellphone </label>
                            <input
                                type="text"
                                {...register('CellPhone')}
                                name="CellPhone"
                                id="CellPhone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="1234567890"
                            />
                            {errors.CellPhone && <p className="text-red-500 text-xs mt-1">{errors.CellPhone.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input
                                type="Password"
                                {...register('Password')}
                                name="Password"
                                id="Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                            {errors.Password && <p className="text-red-500 text-xs mt-1">{errors.Password.message}</p>}
                            <div>
                                <label htmlFor="clinicId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your clinic id</label>
                                <input
                                    type="number"
                                    {...register('clinicId'
                                    )}
                                    name="clinicId"
                                    id="clinicId"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    disabled
                                />
                                {errors.clinicId && <p className="text-red-500 text-xs mt-1">{errors.clinicId.message}</p>}
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                        <div className="flex items-start mb-5">
                            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <Link to={"/login"} className="text-blue-600 hover:underline dark:text-blue-500">Login here.</Link></label>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupPage