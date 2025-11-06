import React, { useState } from 'react'

export const MultipleInputForm = () => {
    var [person, setPerson] = useState({ uname: "", uemail: "", upass: "", uage: "" });
    var [people,setPeople] = useState([]);
    var getData = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        let key = event.target.id;
        let value = event.target.value;
        setPerson({ ...person, [key]: value });
    }
    var handleSubmit = (event) => {
        event.preventDefault();
        if (person.uname && person.uemail && person.uage && person.upass) 
        {
        setPeople((p) => { return[...p, person]});
        setPerson({ uname: "", uemail: "", uage: "", upass: "" });
    }
}
return (
    <div>
        <form on onSubmit={handleSubmit}>
            <label>User Name</label>
            <input type="text" id="uname" onChange={getData} value={person.uname} /><br />
            <label>Password</label>
            <input type="password" id="upass" onChange={getData} value={person.upass} /><br />
            <label>User Email</label>
            <input type="email" id="uemail" onChange={getData} value={person.uemail} /><br />
            <label>User Age</label>
            <input type="number" id="uage" onChange={getData} value={person.uage} /><br/>

            <input type="submit" value="Submit" />
        </form>
        <h3>{person.uname}---{person.upass}---{person.uemail}---{person.uage}</h3>
        {people.map((person)=>{
            return(<div style={{color:"pink"}}><h2>{person.uname}--{person.uemail}--{person.uage}--{person.pass}</h2></div>)
            })}
    </div>
)
}
