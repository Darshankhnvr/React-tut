import { useEffect, useState } from "react"

export const useCurrency = (curr) =>{
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setData(res.curr)
        })

    }, [curr])
    return data;
}