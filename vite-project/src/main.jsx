import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const MyApp =()=>{
  return(
    <>
    <h2>Custom App</h2>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
