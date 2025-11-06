import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div style={{ backgroundColor:'lightblue', height:'800px', width:'800px'}}>
        <h2>This is Main Component</h2>
        <Link to="/" className='mg'>Main</Link>
        <Link to="/home" className='mg'>Home</Link>
        <Link to="/about" className='mg'>About</Link>
        <Link to="/product" className='mg'>Product</Link>
        <Outlet/>
    </div>
  )
}
