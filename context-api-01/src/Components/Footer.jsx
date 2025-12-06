import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Footer() {
    const {footer, setfooter} = useContext(UserContext)
  return (
    <div>
      <input type="text" name="" id="" 
      value={footer}
      onChange={(e)=>setfooter(e.target.value)}
      />
      <h1>footer {footer}</h1>
    </div>
  )
}

export default Footer
