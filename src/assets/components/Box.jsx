import React from 'react'
import Boy from './Rectangle 1.png'
import Stuff from './Stuff.png'

const box = () => {
    return (
  <div className=''>
    <div className=' top-52 left-24'>
    <div className='content-center grid grid-cols-1 text-left '>
<h1 className='text-9xl font-saira-condensed font-bold text-white z-10 relative top-32'>FIGHT LIKE A </h1>
<h1 className='text-9xl font-saira-condensed font-bold text-red-600  z-10 relative top-32'>CHAMPION </h1>
</div>
</div>
<img src={Boy} alt='Box guy' className='contrast-100 absolute top-0  -z-10 w-screen drop-shadow-2xl'></img>
<div className='absolute -bottom-28 left-1/4'>
<img src={Stuff} alt='Stuffy' className='-z-10 content-center'></img>
</div>
  </div>
    )
}


export default box