import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'
function Homepage() {
   const navigate=useNavigate()

   const logout=()=>{navigate('/signin')}

  return (
    <div className='homepage'>
    <h1>Hello Homepage</h1>
    <div className='button' onClick={logout}>Logout</div>

</div>
  )
}

export default Homepage