import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const highlightRef = useRef(null);
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [input, setInput] = useState("");
  const passwordGenerator = useCallback(() => {
    let Pass = "";
    let str = "ZXCVBVNMASDFGHJKLQWERTYUIOPqwertyuiopasdfghjklzxcvbnm";
    if (isNumber) {
      str += "123456789";
    }
    if (char) {
      str += "~!@#$%^&*?";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Pass += str.charAt(char);
    }
    setInput(Pass);
  }, [length, isNumber, char, setInput]);
  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, char]);
  const Copy = () => {
    highlightRef.current?.select();
    highlightRef.current?.setSelectionRange(0, length);
    navigator.clipboard.writeText(input);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg center mt-20 p-3 bg-stone-400">
        <h1 className="text-stone-950 text-center py-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full">
          <input
            ref={highlightRef}
            type="text"
            value={input}
            min={5}
            max={200}
            className="w-full outline-none py-1 px-3 mr-1 rounded-r-lg"
          />
          <button
            className="bg-white rounded-lg px-1 hover:bg-slate-500 text-slate-900"
            onClick={Copy}
          >
            Copy
          </button>
        </div>
        <div className="flex">
          <div className="flex ">
            <input
              type="range"
              className="bg-stone-100 mx-3"
              onChange={(e) => {
                setLength(e.target.value);
                console.log(length);
              }}
            />
            <div className="m-0">
              <label>Length:{length}</label>
            </div>
          </div>
          <div className="flex mx-3 ">
            <input
              type="checkbox"
              className="bg-stone-100 "
              onChange={() => {
                setIsNumber((prevStat) => !prevStat);
                console.log(isNumber);
              }}
            />
            <label className="mx-2">Number</label>
          </div>
          <div className="flex  ">
            <input
              type="checkbox"
              className="bg-stone-100 px-4"
              onChange={() => {
                setChar((prevStat) => !prevStat);
                console.log(char);
              }}
            />
            <label className="mx-2">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
