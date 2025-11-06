import { useEffect, useState } from 'react';
export const UseEffectChangeName01 = () => {
    var[name,setName]=useState("Reema");
    var changeName=() => {
        setName("Prachi");
    }
    useEffect(()=> {
        alert("Good Afternoon");
    },[]) //it will not call for dispatcher
    //  useEffect(()=> {
    //     alert("Good Afternoon");
    // })
  return (
    <div>
        <h3>{name}</h3>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}