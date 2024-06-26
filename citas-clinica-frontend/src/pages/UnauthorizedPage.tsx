import { Navbar } from "@/components/component/navbar"
import { Link } from "react-router-dom"

const UnauthorizedPage = () => {
    return (
        <>
            <Navbar />
            <section className="bg-white min-h-screen">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">401</h1>
                        <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#000000" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                        </div>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-slate-800">
                            Unauthorized
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-600">
                            Sorry, you don't have permission to access this page.
                        </p>
                        <Link to={"/"} className="inline-flex text-slate-800 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UnauthorizedPage