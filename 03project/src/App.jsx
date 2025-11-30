import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");
  const change = (clr) => {
    setcolor(clr);
    localStorage.setItem("bgclr", clr);
  };

  useEffect(() => {
    const saved = localStorage.getItem("bgclr");
    if (saved) {
      let applyColor = () => setcolor(saved);
      applyColor();
    }
  }, []);

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="text-black fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-4 py-1">
          <button
            id="btn"
            className="bg-red-300 px-3 rounded-xl border border-black gap-3 shadow-2xl hover:scale-95"
            onClick={() => change("red")}
          >
            Red
          </button>
          <button
            id="btn"
            className="bg-green-300 px-3 rounded-xl border border-black gap-3 hover:scale-95"
            onClick={() => change("green")}
          >
            Green
          </button>
          <button
            id="btn"
            className="bg-blue-300 px-3 rounded-xl border border-black gap-3 hover:scale-95"
            onClick={() => change("blue")}
          >
            Blue
          </button>
          <button
            id="btn"
            className="bg-pink-300 px-3 rounded-xl border border-black gap-3 hover:scale-95"
            onClick={() => change("pink")}
          >
            Pink
          </button>
          <button
            id="btn"
            className="bg-white px-3 rounded-xl gap-3 border border-black hover:scale-95"
            onClick={() => change("white")}
          >
            White
          </button>
          <button
            id="btn"
            className="bg-purple-300 px-3 rounded-xl border border-black  gap-3 hover:scale-95"
            onClick={() => change("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
