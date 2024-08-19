import React from 'react'
import {ReactComponent as Logo} from './logo.svg'

const NavBar = () => {
  return (
    <div className='grid grid-cols-3 p-5  content-center'>
      
     <div className=' grid grid-cols-2  w-40 content-center '>
      <div className=''></div>
        <div className=' grid grid-cols-2  w-40  '>
        <Logo className=''/>
        <h1 className='text-7xl font-saira-condensed font-bold text-white'>BOXCHAMP</h1>
        </div>
     </div>
     
     <div className='grid grid-cols-5  text-2xl font-saira-condensed font-bold text-white  place-content-evenly  '>
            <button className='hover:text-zinc-500'>HOME</button>
            <button className='hover:text-zinc-500'>ABOUT</button>
            <button className='hover:text-zinc-500'>CONTACT</button>
            <button className='hover:text-zinc-500'>LOCATION</button>

        </div>
        <div className='content-center'>
        <button  className='bg-red-600 hover:bg-red-800 text-2xl font-saira-condensed font-bold text-white   h-14 w-32'>SIGN UP</button>
        </div>
       
    </div>
  )
}


export default NavBar