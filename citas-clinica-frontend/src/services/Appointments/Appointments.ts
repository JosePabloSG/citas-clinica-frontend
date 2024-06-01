import { Appointment } from "@/types/Appointments"



export async function createAppointment(appointmentData: Appointment, tokenData: string) {

  let response
  try {
    response = await fetch(`${import.meta.env.VITE_API_URL}/api/Appointment/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenData}`
        },
        body: JSON.stringify(appointmentData)
      })
  } catch (error) {
    console.log('Error ocurred while creating appointment', error)
    throw error
  }

  if (!response.ok) {
    try {
      const errorResponse = await response.json()
      console.error(`Error to get appointment by user: received ${response.status} from server. Message: ${errorResponse.message}`)
      throw new Error(errorResponse.message)
    } catch (error) {
      console.error("Error occurred while parsing error response: ", error)
      throw error
    }
  }

  try {
    const responseData: Appointment = await response.json()
    return responseData
  } catch (error) {
    console.log('Error ocurred while parsing response', error)
    throw error
  }
}

export async function getAppointmentByUser(userId: string, token: string | null) {
  let response
  try {
    response = await fetch(`${import.meta.env.VITE_API_URL}/api/Appointment/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }
    )
  } catch (error) {
    console.error("Error occurred while fetching appointment : ", error)
    throw error
  }

  if (!response.ok) throw new Error(`Error to get appointment by user: received ${response.status} from server`)

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
    response = await fetch(`${import.meta.env.VITE_API_URL}/api/Appointment`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }
    )
  } catch (error) {
    console.error("Error occurred while fetching appointments : ", error)
    throw error
  }

  if (!response.ok) throw new Error(`Error to get appointments: received ${response.status} from server`)

  try {
    const responseData: Appointment[] = await response.json()
    return responseData
  } catch (error) {
    console.error("Error occurred while parsing response: ", error)
    throw error
  }
}

export async function cancellAppointment(AppointmentId: number, tokenData:string){

  let response

  try {
    response = await fetch(`${import.meta.env.VITE_API_URL}/api/Appointment/cancell/${AppointmentId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenData}`
        },
      })
  } catch (error) {
    console.log('Error ocurred while creating appointment', error)
    throw error
  }

  if (!response.ok) {
    try {
      const errorResponse = await response.json()
      console.error(`Error to get appointment by user: received ${response.status} from server. Message: ${errorResponse.message}`)
      throw new Error(errorResponse.message)
    } catch (error) {
      console.error("Error occurred while parsing error response: ", error)
      throw error
    }
  }

  try {
    const responseData: { message: string } = await response.json()
    return responseData.message
  } catch (error) {
    console.log('Error ocurred while parsing response', error)
    throw error
  }
 
}

export async function updateAppointment(AppointmentId:number,appointmentData: Appointment, tokenData: string) {

  let response
  try {
    response = await fetch(`${import.meta.env.VITE_API_URL}/api/Appointment/${AppointmentId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenData}`
        },
        body: JSON.stringify(appointmentData)
      })
  } catch (error) {
    console.log('Error ocurred while creating appointment', error)
    throw error
  }

  if (!response.ok) {
    try {
      const errorResponse = await response.json()
      console.error(`Error to get appointment by user: received ${response.status} from server. Message: ${errorResponse.message}`)
      throw new Error(errorResponse.message)
    } catch (error) {
      console.error("Error occurred while parsing error response: ", error)
      throw error
    }
  }

  try {
    const responseData: Appointment = await response.json()
    return responseData
  } catch (error) {
    console.log('Error ocurred while parsing response', error)
    throw error
  }
}

export async function deleteAppointmente(AppointmentId: number, tokenData: string) {

  let response
  try {
    response = await fetch(`${import.meta.env.VITE_API_URL}/api/Appointment/${AppointmentId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenData}`
        },
      })
  } catch (error) {
    console.log('Error ocurred while creating appointment', error)
    throw error
  }

  if (!response.ok) {
    try {
      const errorResponse = await response.json()
      console.error(`Error to get appointment by user: received ${response.status} from server. Message: ${errorResponse.message}`)
      throw new Error(errorResponse.message)
    } catch (error) {
      console.error("Error occurred while parsing error response: ", error)
      throw error
    }
  }

  try {
    const responseData: string = await response.json()
    return responseData
  } catch (error) {
    console.log('Error ocurred while parsing response', error)
    throw error
  }
}