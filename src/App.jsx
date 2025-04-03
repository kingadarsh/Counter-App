import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function IncreaseHandler(){
    setCount((prev)=>prev+1);
  }

  function DecrementHandler(){
    if(count!=0){
      setCount((prev)=>prev-1);
    }
    else{
      alert(`Count is set to ${count}`);
    }
    
  }

  function ResetHandler(){
    if(count!=0){
      setCount(0);
    }
    else{
      alert(`Count is set to ${count}`);
    }
    
  }

  return (
    <>
    <div>
      <h1 id='Count'>{count}</h1>
      <div className='Btn'>
        <button id="IncBtn" onClick={IncreaseHandler}>Increse</button>
        <button id="DecBtn" onClick={DecrementHandler}>Descrease</button>
        <button id="ReBtn" onClick={ResetHandler}>Reset</button>
      </div>
    </div>

    </>
  )
}

export default App
