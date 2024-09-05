import React from 'react'
import data  from 'autoprefixer'
import Uerdetail from './Userdetails'

const users = ({id,name,age}) => {
  return (
    <>
    <h1>{name}</h1>
    <p>age : <span>{age}</span></p>
    
    <hr />
    <br />
    </>
  )
}

export default users