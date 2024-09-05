import React, { useState } from 'react'

const PasswordGenrator = () => {
    const [length, setlength]= useState(0)
    const [number, setnumber] = useState(false)
    const [charectar, setcharectar] = useState(false)
    const [password, setpassword] = useState("")

    const passwordgenrator = useCallback(() =>{
      let pass = ""

      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(number) str = "0123456789"
      if(charectar) str = "`~!@#$%^&*()/_-"
      for(let i=1;i<= Array.length;i++)
        {
          let char = math.floor(math.random() * str.length + 1)
          pass = str.charAt(char)
        }
        setpassword(pass)
        



    },[length,number,charectar,password])
  return (
   <>
   <h1 className='text-4xl text-white text-center '>PasswordGenrator</h1>
   </>
  )
}

export default PasswordGenrator