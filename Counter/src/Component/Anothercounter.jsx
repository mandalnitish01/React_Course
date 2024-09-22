// practics 
import React from 'react'
import { useState } from 'react'
const Anothercounter = () => {
    const [form, setform] =  useState({
        firstname: "nitish",
        lastname:"Mandal",
        email:"exaple@gmail.com"
    })
  return (
    <div>
        <label htmlFor="#">
            <input type="text"
            value={form.firstname}
            onChange={(e)=>{
                setform({
                    ...form,
                    firstname: e.target.value
                })
            }}
            />
        </label>
        <label htmlFor="#">
            <input type="text"
            value={form.lastname}
            onChange={(e)=>{
                setform({
                    ...form,
                    lastname: e.target.value
                })
            }}
            />
        </label>
        <label htmlFor="#">
            <input type="text"
            value={form.email}
            onChange={(e)=>{
                setform({
                    ...form,
                    email: e.target.value
                })
            }}
            />
        </label>
        <p>
            {form.firstname}
            {form.lastname}
            {form.email}
        </p>
    </div>
  )
}

export default Anothercounter