import { z } from "zod"
import SignupUserSchema from "../../validations/SignupUserSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { User } from "../../types/User"
import { createUser } from "../../services/Auth/PostUser"

export const useSignup = () => {
    type FormFields = z.infer<typeof SignupUserSchema>

    const { handleSubmit, register, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(SignupUserSchema)
    })

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const LoginData: User = JSON.parse(JSON.stringify(data))
        try {
            await createUser(LoginData) // ! Cambiar a endpoint de signup en el futuro
            navigate('/')
        } catch (error) {
            console.error('Error creating product:', error)
        }
    })

    return { onSubmit, register, errors }
}