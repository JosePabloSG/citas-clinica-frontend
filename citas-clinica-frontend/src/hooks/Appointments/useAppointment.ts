import { useState } from 'react'
import { useForm } from 'react-hook-form'

const useAppointment = () => {
 
    const [isEditing, setIsEditing] = useState(false)
    const { register, handleSubmit } = useForm()
    const OnSubmit = handleSubmit(() => {
        
    })

    const handleDoubleClick = () => {
        setIsEditing(true)
    }


    return { OnSubmit, register, isEditing,setIsEditing, handleDoubleClick}
}

export default useAppointment