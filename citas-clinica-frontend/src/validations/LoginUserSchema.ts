import { z } from "zod"

const LoginUserSchema = z.object({
    UserName: z.string().min(3, {message: 'Username must be at least 3 characters'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
})

export default LoginUserSchema