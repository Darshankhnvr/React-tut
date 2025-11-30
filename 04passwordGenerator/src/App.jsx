import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(0);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys";
    if (numberAllowed) {
      str += "0123456789";
    }

    if (charactersAllowed) {
      str += "?>:}{";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); 
    }

    setpassword(pass);
  }, [length, numberAllowed, charactersAllowed, setpassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password);
      // alert("Password copied")
  }, [password])
    useEffect(() => {
      passwordGen()
    
    
    }, [length, numberAllowed, charactersAllowed,passwordGen])
    
  
  return (
    <div>
      <div className="w-full h-screen bg-slate-800 text-slate-200 text-center font-bold text-4xl pt-10 gap-2">
        Password Generator
        <div className=" flex justify-center gap-2 shadow rounded-2xl overflow-hidden mb-4 text-center bg-slate-600 py-5">
          <input
            className="bg-white text-slate-500 rounded-xl text-center py-2 shadow-amber-200 mt-3"
            type="text"
            name="pass"
            id="pass"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button className="cursor-pointer hover:scale-95 "
          onClick={copyPassword}
          > 📋</button>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label className="text-sm">Length: {length}</label>
          <input type="checkbox" 
          name="" 
          id="" 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setnumberAllowed((prev) =>!prev)
          }}
          />
          <label className="text-sm" htmlFor="">
            Number Allowed
          </label>
          <input type="checkbox" 
          name="" 
          id="" 
          defaultChecked={charactersAllowed}
          onChange={()=>{
            setcharactersAllowed((prev) =>!prev)
          }}
          />
          <label className="text-sm" htmlFor="">
            Characters allowed
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
