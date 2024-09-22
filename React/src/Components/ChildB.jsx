import React from 'react'
import ChildC from '../BasicThings/ChildC'

const ChildB = ({firstname}) => {
  return (
    <div>ChildB
        <ChildC firstname={firstname}/>
    </div>
  )
}

export default ChildB