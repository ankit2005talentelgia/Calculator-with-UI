import { useState } from 'react';
import './Cal.css';
import { MdOutlineToggleOff } from "react-icons/md";
import { IoToggleSharp } from "react-icons/io5";


function Navbar({isDark,setIsDark}) {
  

  // Toggle state handler
  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className='navbar'>
        <img src='./logo.jpg'/>
        <button
          style={isDark?{backgroundColor:'#787878'}:{}}
          onClick={handleToggle}
          >
          {isDark?<IoToggleSharp className='toggle'/>:<MdOutlineToggleOff className='toggle'/>}
        </button>
    </div>
  )
}

export default Navbar