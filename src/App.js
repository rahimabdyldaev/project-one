import Home from "./Home";
import Rahim from "./Rahim";
import './style.css';
import { useState } from "react";


function App() {
  const [num,setNum] = useState(0);
  const [rahim, setRahim] = useState('Rahim');
  const [text,setText] = useState("Hello World!")
  return (
    <div >

      <h1>{num}</h1>
      <button onClick={()=>{
        if(num < 15) setNum(num + 1)
      }}>+</button>

      <button onClick={()=>{
        if(num > 0)  setNum(num - 1)
      }}>-</button>

      <button onClick={()=>{
        setNum(0)
      }}>reset</button>

      <button onClick={()=>{
        setNum(15)
      }}>Max</button>

      <button onClick={()=>{
        setNum(num + 5)
      }}>5+</button>
      <button onClick={()=>{
        setNum(num - 5)
      }}>5-</button>
      

      <Rahim rahim={rahim} setRahim={setRahim}/>

      <Home text={text} setText={setText}/>

    </div>
  );
}

export default App;
