import React from 'react'

export const UseStateData01 = () => {
  
    var name="snehal";
    var ChangeName=()=>{
        console.log(name);
        name="Deep";
        console.log(name);
        // document.write(name);
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={ChangeName}>ChangeName</button>
    </div>
  )
}
  

