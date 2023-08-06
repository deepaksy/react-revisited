import React, { useState } from 'react'
import UserGreeting from './UserGreeting'

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        <UserGreeting loggedIn={isLoggedIn}/>
        
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{!isLoggedIn?"Log-on":"logout"}</button>
    </div>
  )
}

export default Index