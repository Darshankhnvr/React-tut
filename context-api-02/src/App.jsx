import React, { useEffect, useState } from "react";
import { Themeprovider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light")

  const darkTheme =()=>{
    setthemeMode("dark")
  }
  const lightTheme =()=>{
    setthemeMode("light")
  }

    // actual chane in theme 

    useEffect(()=>{
      document.querySelector('html').classList.remove("light", "dark")

      document.querySelector('html').classList.add(themeMode)
    },[themeMode])


  return (
    <Themeprovider value={{themeMode , darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
         
        </div>

        <div className="w-full max-w-sm mx-auto"> <Card /></div>
      </div>
    </div>
    </Themeprovider>
  );
}

export default App;
