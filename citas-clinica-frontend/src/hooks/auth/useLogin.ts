import { zodResolver } from "@hookform/resolvers/zod"
import LoginUserSchema from "../../validations/LoginUserSchema"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { User } from "../../types/User"
import { createUser } from "../../services/Auth/PostUser"

export const useLogin = () => {
    type FormFields = z.infer<typeof LoginUserSchema>

    const { handleSubmit, register, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(LoginUserSchema)
    })

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const LoginData: User = JSON.parse(JSON.stringify(data))
        try {
            await createUser(LoginData) // ! Cambiar a endpoint de login en el futuro
            navigate('/')
        } catch (error) {
            console.error('Error creating product:', error)
        }
    })

    return { onSubmit, register, errors }
}