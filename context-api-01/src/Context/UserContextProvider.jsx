import React, { useState } from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
    const [user, setuser] = useState(null)
    const [footer, setfooter] = useState("")
  return (
    <UserContext.Provider value={{user, setuser, footer, setfooter}}>
        {children}
    </UserContext.Provider>
    
    
  )
}

export default UserContextProvider
