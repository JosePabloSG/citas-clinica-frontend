import { UserLogin } from "@/types/UserLogin"
import { UserSignup } from "@/types/UserSignup"


export async function createUser(SignupUserData:UserSignup) {

    let response
    try {
        response = await fetch('http://localhost:5030/api/user/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SignupUserData)
        })
        if (!response.ok) throw new Error("Error to create User")
    } catch (error) {
        console.log('Error ocurred while creating user', error)
        throw error
    } finally {
        console.log('User created successfully')
    }

    try {
        const responseData = await response.json()
        return responseData
    } catch (error) {
        console.log('Error ocurred while parsing response', error)
        throw error
    }
}

export async function LoginUser(LoginData:UserLogin) {

    let response
    try {
        response = await fetch('http://localhost:5030/api/User/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(LoginData)
        })
        if (!response.ok) throw new Error("Error to create User")
    } catch (error) {
        console.log('Error ocurred while creating user', error)
        throw error
    } finally {
        console.log('User created successfully')
    }

    try {
        const responseData = await response.json()
        if (responseData.access_token) {
            localStorage.setItem('token', responseData.access_token)
        }
        return responseData
    } catch (error) {
        console.log('Error ocurred while parsing response', error)
        throw error
    }
}


