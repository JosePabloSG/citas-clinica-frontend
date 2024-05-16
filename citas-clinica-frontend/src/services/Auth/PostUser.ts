import { User } from "../../types/User";


export async function createUser(LoginUserData:User) {

    let response
    try {
        response = await fetch(' https://api.escuelajs.co/api/v1/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(LoginUserData)
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