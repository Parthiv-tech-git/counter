
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
    <div className="">
     <div className="border-s-red-600 m-20" >
     <h1 class="bg-white h-min 20px"> {data}</h1>
     
     <button onClick={inc} className="text-white bg-blue-500 ">increment </button>
     <button onClick={de} className="text-white bg-pink-400 m-3">decrement </button>
     <button onClick={re} className="text-white bg-black m-3" >reset </button>


     </div>
    </div>
  );
}

export default App;
