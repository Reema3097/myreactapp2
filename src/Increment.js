import { useState } from 'react'

export const increment = () => {
    var[num,setNum]= useState(1);
    var add=()=>{
        setNum(num+1)
    }
     var sub =() => {
        setNum(num-1)
     }
  return (
    <div>
        <h3>{num}</h3>
        <button onClick={add}>Add by 1</button><br></br>
        <button onClick={sub}>Sub by 1</button>
    </div>
  )
}
