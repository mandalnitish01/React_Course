import React from 'react'
import Users from './Users'
import Data from './Data'
const Userdetail = () => {
  return (
    <> 
    {
       Data.map(user =>
        <Users
        id = {user.id}
        name = {user.name}
        age = {user.age}
        />
       )
    }
    </>
  )
}

export default Userdetail  