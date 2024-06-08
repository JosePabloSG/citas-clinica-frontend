import useSignup from "@/hooks/auth/useSignup"
import { Link } from "react-router-dom"

const SignupPage = () => {

    const { onSubmit, register, errors } = useSignup()

    return (
        <>
            <div className="relative">
                <img className="absolute inset-0 z-0 opacity-35 h-screen w-screen object-cover" src="/backgroundImg.webp" />
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
                    <div className=" animate-open-close w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-teal-900 dark:border-gray-700">
                        <form onSubmit={onSubmit} className="space-y-6">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create an account</h5>
                            <div className="flex gap-4  ">
                                <div>
                                    <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input
                                        data-cy="Name"
                                        type="text"
                                        {...register('Name')}
                                        name="Name"
                                        id="Name"
                                        className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                                        placeholder="John Doe"
                                    />
                                    {errors.Name && <p className="text-red-500 text-xs mt-1">{errors.Name.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                    <input
                                        data-cy="UserName"
                                        type="text"
                                        {...register('UserName')}
                                        name="UserName"
                                        id="UserName"
                                        className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                                        placeholder="johndoe"
                                    />
                                    {errors.UserName && <p className="text-red-500 text-xs mt-1">{errors.UserName.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="Id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your id</label>
                                <input
                                    data-cy="Id"
                                    type="number"
                                    {...register('Id')}
                                    name="Id"
                                    id="Id"
                                    className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                                    placeholder="1234567890"
                                />
                                {errors.Id && <p className="text-red-500 text-xs mt-1">{errors.Id.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    data-cy="Email"
                                    type="Email"
                                    {...register('Email')}
                                    name="Email"
                                    id="Email"
                                    className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                                    placeholder="name@gmail.com"
                                />
                                {errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="CellPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your cellphone </label>
                                <input
                                    data-cy="CellPhone"
                                    type="text"
                                    {...register('CellPhone')}
                                    name="CellPhone"
                                    id="CellPhone"
                                    className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                                    placeholder="1234567890"
                                />
                                {errors.CellPhone && <p className="text-red-500 text-xs mt-1">{errors.CellPhone.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input
                                    data-cy="Password"
                                    type="Password"
                                    {...register('Password')}
                                    name="Password"
                                    id="Password"
                                    className="bg-gray-50 border border-gray-200 text-slate-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:white-gray-500 dark:placeholder-white-400 dark:text-grey-900"
                                />
                                {errors.Password && <p className="text-red-500 text-xs mt-1">{errors.Password.message}</p>}
                            </div>
                            <button data-cy="submit" type="submit" className="text-gray bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800">Create account</button>
                            <div className="flex items-start mb-5">
                                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <Link to={"/login"} className="text-blue-600 hover:underline dark:text-teal-400">Login here.</Link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage