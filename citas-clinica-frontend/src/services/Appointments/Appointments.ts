import { Appointment } from "@/types/Appointments"

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
    }

    try {
        const responseData: Appointment = await response.json()
        return responseData
    } catch (error) {
        console.log('Error ocurred while parsing response', error)
        throw error
    }
  }

  export async function getAppointmentByUser(userId:string, token: string | null) {
    let response
    try {
      response = await fetch(`http://localhost:5030/api/Appointment/user/${userId}`,
        {
          method: "GET",
          headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
           },
        }
      )
      if (!response.ok) throw new Error("Error to get appointment by user")
    } catch (error) {
      console.error("Error occurred while fetching appointment : ", error)
      throw error
    }
    try {
      const responseData: Appointment[] = await response.json()
      return responseData
    } catch (error) {
      console.error("Error occurred while parsing response: ", error)
      throw error
    }
  }

   export async function getAllAppointments(token: string | null) {
    let response
    try {
      response = await fetch(`http://localhost:5030/api/Appointment`,
        {
          method: "GET",
          headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
           },
        }
      )
      if (!response.ok) throw new Error("Error to get appointments")
    } catch (error) {
      console.error("Error occurred while fetching appointments : ", error)
      throw error
    }
    try {
      const responseData: Appointment[] = await response.json()
      return responseData
    } catch (error) {
      console.error("Error occurred while parsing response: ", error)
      throw error
    }
  }
