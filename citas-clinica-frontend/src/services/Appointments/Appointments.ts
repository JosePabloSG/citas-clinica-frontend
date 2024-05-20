import { Appointment } from "@/types/Appointments";

export async function createAppointment(appointmentData: Appointment, tokenData: string) {
    let response
    try {
        response = await fetch('http://localhost:5030/api/Appointment/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${tokenData}`
            },
            body: JSON.stringify(appointmentData)
        })
        if (!response.ok) throw new Error("Error to create User")
    } catch (error) {
        console.log('Error ocurred while creating appointment', error)
        throw error
    } finally {
        console.log('Appointment created successfully')
    }

    try {
        const responseData: Appointment = await response.json()
        return responseData
    } catch (error) {
        console.log('Error ocurred while parsing response', error)
        throw error
    }
  }