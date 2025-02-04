import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            document.getElementById("my_modal_3").close()
            setTimeout(()=>{
                window.location.reload()
            },2000)
        } catch (error) {
            setTimeout(()=>{
                toast.error("Error" + error.message)
            },3000)
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout