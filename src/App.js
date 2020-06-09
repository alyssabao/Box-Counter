import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  let count = useSelector(state => state.count);
  let dispatch = useDispatch();
  let [color,setColor] = useState("red");

  const increaseNum = () => {
    dispatch ({type:"Increment"})
  }

  const decreaseNum = () => {
    dispatch ({type:"Decrement"})
  }

  const resetButton = () => {
    dispatch ({type:"Reset"})
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={()=>increaseNum()}>Increment</button>
      <button onClick={()=>decreaseNum()}>Decrement</button>
      <button onClick={()=>resetButton()}>Reset</button>
      </div>
      
      <p>Type any color to change the color of the box(es).</p>
      <div>
        <input onChange={(e)=>setColor(e.target.value)}></input>
      </div>
      {
        Array(count).fill("box").map(box => {
          return(
            <div style={{width:"150px",height:"150px",backgroundColor:`${color}`,margin:"10px"}}></div>
          )
        })
      }
    </div>
  );
}

export default App;
