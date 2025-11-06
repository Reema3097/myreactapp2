import React, { useState } from 'react'
import { Dashboard } from './Dashboard';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    var[fname,setFname]=useState('');
    var[mail,setMail]=useState('');
    var go=useNavigate();

    var getFname=(event)=>{
        setFname(event.target.value);
    }

    var getMail=(event)=>{
        setMail(event.target.value);
    }

    var handleSubmit=()=>{
        event.preventDefault();
        if(fname && mail)
        {
            setUser({fname,mail});
            go('/dashboard');
        }
    }
  return (
    <div>
        <form on onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name={fname} onChange={getFname}/><br/>
            <label>Email</label>
             <input type="email" name={mail} onChange={getMail}/><br/>
        </form>
    </div>
  )
}
