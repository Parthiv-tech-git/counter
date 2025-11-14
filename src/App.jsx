
import './App.css';
import { useState } from 'react';

function App() {
   const[data,setdata]=useState(0);
   const inc=()=>{
    setdata(data+1)
   }
   const de=()=>{
    setdata(data-1)
   } 
   const re= ()=>{
    setdata(0);
   }
  return (
    <div className="ma">
      <h1 id='h'>counter app</h1>
     <div className="mi" >
     <p id='d'>{data}</p>
     <button onClick={inc} id="o">increment </button>
     <button onClick={de} id='t'>decrement </button>
     <button onClick={re} id='r'>reset </button>


     </div>
    </div>
  );
}

export default App;
