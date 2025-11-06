import React from 'react'

export const Dashboard = ({user}) => {
  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        <h3>User Name: {user.Fname}</h3>
        <h3>User Mail: {user.mail}</h3>
    </div>
  )
}
