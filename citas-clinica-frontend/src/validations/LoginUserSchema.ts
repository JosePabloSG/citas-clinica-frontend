import { z } from "zod"

const LoginUserSchema = z.object({
    email: z.string().min(1, {message: 'Email is required'}).email('Invalid email address'),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
})

export default LoginUserSchema