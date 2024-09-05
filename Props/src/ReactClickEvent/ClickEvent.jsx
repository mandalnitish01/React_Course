import React from 'react'

const ClickEvent = () => {
    // let count = 0;
    // function handleclick(name)
    // {
    //     // console.log(`${name} you don't clicked me`)

    //     if(count < 3)
    //         {
    //             count++;
    //             console.log(`${name} clicked me ${count} times`);
    //         }
    //         else{
    //             console.log(`${name} don't clicked me`)
    //         }
    // }
    function handleclick(name) {
        name.target.textContent = "ye kya hai";
     
    }

  return (
    <div className='flex justify-center items-center  my-96'>
        
        {/* <button className='border-4 border-amber-500 text-lg ' onClick={handleclick}>Click me</button> */}
        {/* <button className='border-4 border-amber-500 text-lg ' onClick={ () => handleclick("nitish")}>Click me</button> */}
        <button className='border-4 border-amber-500 text-lg ' onClick={ (agpass) => handleclick(agpass)}>Click me</button>
    </div>
  )
}

export default ClickEvent