import React from "react";
import { useState } from "react";
export const CounterApp = () => {
    var [counter, setCounter]=useState(1);
    var increment=() => {
        counter=counter+1;
        setCounter(counter); //setCounter(counter+1);
    }
    var decrement= () =>
    {
        counter=counter-1;
        setCounter(counter);
    }
  return (
    <div>
        <h3>{counter}</h3>
        <button onClick={increment}>+</button><br></br>
        <button onClick={decrement}>-</button>
    </div>
  )
} 
