
import logo from './../Images/logo.png';

import { Link } from 'react-router-dom'
import { CgNametag } from 'react-icons/cg'
<head>
<link rel="stylesheet" href="App.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
</head>
  import React, { useState } from 'react';

  const Nav = (setSearchString) => {
    const setSearch=()=>{
      const text=document.getElementById("searchinput").value;
      setSearchString(text);
      }
  
  return (
    <>
       <div className='font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen'>
    <header className='bg-white'>
      <nav className='flex sm:flex-col md:flex-row justify-around py-8'>
        <div className='flex gap-8'>
        <img className='w-16' src={logo} alt='.....' ></img>
        {/* <a href="javascript:void(0)" className='flex items-center'> News Reader</a> */}

        <form action=''>
          <input className='outline-double rounded-2xl h-8 px-5' type='search' placeholder='Search here' id='searchinput'/>
          <button className='h-8 w-22 px-5 bg-blue-800 rounded-md hover:bg-blue-700 active:bg-blue-900' onClick={()=>setSearch()}>Search</button>
          
          </form>
          </div>

        <div className=' '>
        <ul className='flex sm:flex-col md:flex-row gap-10'>
        <li className='cursor-pointer hover:text-blue-600'> <Link to="/Home?category=India"> Home </Link> </li>
<li className='cursor-pointer hover:text-blue-600'> <Link to="/Home?category=Health"> Health </Link></li>
<li className='cursor-pointer hover:text-blue-600'> <Link to="/Home?category=Education"> Education </Link></li>
<li className='cursor-pointer hover:text-blue-600'> <Link to="/Home?category=Politics"> Politics</Link> </li>
<li className='cursor-pointer hover:text-blue-600'> <Link to="/Home?category=Movies"> Movies </Link></li>
<li className='cursor-pointer hover:text-blue-600'> <Link to="/Home?category=Sports"> Sports </Link></li>
         
          </ul>
  
          </div>
          </nav>
</header>
</div>
    </>)
}

export default Nav
