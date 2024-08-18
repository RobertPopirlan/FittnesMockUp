import React from "react";
import facebook from "./facebook.png"
import insta from "./insta.png"
import linked from "./Linked.png"
import mail from "./mail.png"

const Footer = () => {
    return (
        <div className="p-4 bg-black dark:text-neutral-200 text-left grid grid-cols-2">
            <div>
  <h1 className='text-6xl font-saira-condensed font-bold text-white z-10  top-72 left-24 '>READY FOR YOUR </h1>
  <h1 className='text-6xl font-saira-condensed font-bold text-red-600  z-10  top-96 left-24'>NEXT LESSON ?</h1>
  </div>
  <div className="grid grid-cols-10 content-center">
    <h1>‎ </h1>
    <h1>‎ </h1>
    <h1>‎ </h1>
    <h1>‎ </h1>
    <h1>‎ </h1>
    <h1>‎ </h1>
    <a href='mailto:robert.popirlan@yahoo.com'><img src={mail}alt='Mail' class='w-8 a ' ></img></a>
    <a href="https://www.facebook.com/robert.popirlan/"><img src={facebook}alt='Facebook' class='w-8 ' ></img></a>
    <a href="https://www.instagram.com/robert.kms.kys/"><img src={insta}alt='Insta' class='w-8 ' ></img> </a>
   <a href="https://www.linkedin.com/in/popirlan-robert-3870aa274/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <img src={linked}alt='Linked' class='w-8' ></img></a>
  </div>
      </div>
            )
        }
        
        
        export default Footer