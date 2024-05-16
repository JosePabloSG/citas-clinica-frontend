import { z } from "zod"

const LoginUserSchema = z.object({
    email: z.string().email({
        message: 'Invalid email. Example: "john@example.com"'
    }),
    password: z.string().min(6,
        {
            message: 'Password must be at least 6 characters long. Example: "password123"'
        }
    ).max(255,
        {
            message: 'Password must be at most 255 characters long'
        }
    ),
})

export default LoginUserSchema