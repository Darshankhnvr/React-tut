// import { useState } from 'react'
import "./App.css";

function App() {
  // const [count, setcount] = useState("")
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col items-center p-6">
        <h1
          className="text-4xl font-bold text-white mt-10 px-6 py-3 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       rounded-2xl shadow-xl"
        >
          Currency Converter
        </h1>
      </div>
    </>
  );
}

export default App;
