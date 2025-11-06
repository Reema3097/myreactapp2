import { useState } from 'react'

export const UseStateData02 = () => {
    var[name,setName]=useState("Reema");
console.log(name);
var ChangeName=() => {
    setName("Snehal");
    console.log(name);
}
  return (
    <div>
        <h3>{name}</h3>
        <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}
