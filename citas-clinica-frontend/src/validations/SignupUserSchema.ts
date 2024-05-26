import { z } from "zod"

const SignupUserSchema = z.object({
    Id: z.string(),
    Name: z.string().min(3, {message: 'Name must be at least 3 characters'}),
    Email: z.string().min(1, {message: 'Email is required'}).email('Invalid email address'),
    CellPhone: z.string().min(8, {message: 'Cellphone must be at least 10 characters'}),
    UserName: z.string().min(3, {message: 'Username must be at least 3 characters'}),
    Password: z.string().min(6, {message: 'Password must be at least 6 characters'})
  })

export default SignupUserSchema