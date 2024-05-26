import { z } from "zod"
import SignupUserSchema from "../../validations/SignupUserSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { UserSignup } from "../../types/UserSignup"
import { createUser } from "../../services/Auth/User"
import { useDebounce } from "../useDebounce"
import { useEffect, useState } from "react"


const useSignup = () => {

    const [navigateDebounced, setNavigateDebounced] = useState(false)
    const debouncedValue = useDebounce(navigateDebounced, 500)
    const navigate = useNavigate()

    type FormFields = z.infer<typeof SignupUserSchema>

    const { handleSubmit, register, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(SignupUserSchema)
    })

    const onSubmit = handleSubmit(async (data) => {

        const { Id, ...rest } = data

        const SignupData: UserSignup = {
            Id: Number(Id),
            ClinicId: 1,
            ...JSON.parse(JSON.stringify(rest))
        }


        try {
            await createUser(SignupData)
            setNavigateDebounced(true)
        } catch (error) {
            console.error('Error creating product:', error)
        }
    })

    useEffect(() => {
        if (debouncedValue) {
            navigate('/login')
        }
    }, [debouncedValue, navigate])

    return { onSubmit, register, errors }
}

export default useSignup