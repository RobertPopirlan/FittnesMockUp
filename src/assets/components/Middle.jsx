import React from 'react'
import Girl from './Girl fight.jpg'

const Middle = () => {
    return (
        <div className=' grid grid-cols-3 relative -bottom-40'>
<img src={Girl} alt='Girl box' class='relative top-96 left-1/4 w-full drop-shadow-2xl'></img>
<div>
    <div className='h-96 w-10 bg-red-600 relative top-96 left-80 rounded-3xl'></div>
    <h2 className='text-5xl font-saira-condensed font-bold text-black z-10  text-left relative -right-96 w-96 py-2'>How we got started in this buissnes?</h2>
    <p className='text-lg font-saira-condensed  text to-black text-left relative -right-96 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt numquam, dolor deserunt necessitatibus pariatur veritatis nam at velit dolores, itaque harum odio voluptatum vel debitis? Iusto hic ut natus perferendis.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto expedita ipsa reprehenderit voluptatibus nemo nulla iure laborum cumque, est similique? Mollitia eius, fugit perferendis saepe enim ut magnam quos amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus expedita, quaerat ab ad ipsum voluptatum provident impedit vero fugit. Quos, quibusdam reiciendis quidem incidunt a amet sapiente aperiam sit?lore
    </p>
    <div className='content-center p-10 '>
        <button  className='bg-red-600 hover:bg-red-800 text-2xl font-saira-condensed font-bold text-white  h-14 w-32 relative -right-36 rounded-3xl'>SIGN UP</button>
        </div>
</div>

        </div>
          )
        }
        
        export default Middle