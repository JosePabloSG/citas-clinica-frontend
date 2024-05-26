import { z } from "zod"
import SignupUserSchema from "../../validations/SignupUserSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { UserSignup } from "../../types/UserSignup"
import { createUser } from "../../services/Auth/User"


const useSignup = () => {

    type FormFields = z.infer<typeof SignupUserSchema>

    const { handleSubmit, register, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(SignupUserSchema)
    })

    const navigate = useNavigate()


const onSubmit = handleSubmit(debounce(async (data) => {
    const clinicId = 1
    const { Id, ...rest } = data
    
    const SignupData: UserSignup = {
        Id: Number(Id),
        ClinicId: Number(clinicId),
        ...JSON.parse(JSON.stringify(rest))
    }
    
    try {
        await createUser(SignupData)
        navigate('/')
    } catch (error) {
        console.error('Error creating product:', error)
    }
}, 1000)) 

    return { onSubmit, register, errors }
}

export default useSignup