import React from 'react'
import ChildB from './Components/ChildB'

const ChildA = ({firstname}) => {
  return (
    <div>ChildA
        <ChildB firstname={firstname}/>
    </div>
  )
}

export default ChildA