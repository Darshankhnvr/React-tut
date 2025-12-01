import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState("")
    useEffect(()=>{
        fetch("https://api.github.com/users/Darshankhnvr")
    .then((res) =>{
        return res.json();
    })
    .then((res) =>{
        setdata(res.followers);
    })
    })
    
  return (
    <div className='text-center text-3xl bg-gray-600 p-4 '>
      GitHub followers : {data}
      
    </div>
  )
}

export default Github
