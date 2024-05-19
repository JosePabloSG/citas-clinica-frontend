import { zodResolver } from "@hookform/resolvers/zod"
import LoginUserSchema from "../../validations/LoginUserSchema"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../../services/Auth/PostUser"
import { UserLogin } from "@/types/UserLogin"

export const useLogin = () => {
    type FormFields = z.infer<typeof LoginUserSchema>

    const { handleSubmit, register, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(LoginUserSchema)
    })

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const LoginData: UserLogin = JSON.parse(JSON.stringify(data))
        try {
            await LoginUser(LoginData)
            navigate('/')
        } catch (error) {
            console.error('Error creating product:', error)
        }
    })

    return { onSubmit, register, errors }
}