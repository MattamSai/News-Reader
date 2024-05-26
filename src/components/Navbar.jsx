
import React from 'react'
import { useState } from 'react';
const NavBar = ({setSearchString}) => {
  // const[string,setString]=useState();
  const setSearch=()=>{
    const text=document.getElementById("searchinput").value;
    setSearchString(text);
  }
    let Links =[
        {name:"India",link:"/news-feed?category=India"},
        {name:"Health",link:"/news-feed?category=Health"},
        {name:"Education",link:"/news-feed?category=Education"},
        {name:"Sports",link:"/news-feed?category=Sports"},
      ];
      let [open,setOpen]=useState(false);
    return (
      <div className='shadow-md w-full fixed top-0 left-0' style={{zIndex:1000}}>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <ion-icon name="newspaper-outline"></ion-icon>
          </span>
          NewsReader
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
             <div className=' bg-white w-full h-16 p-4  '>
 < input className=' h-8 rounded-xl size-auto outline-double outline-blue-900'type='search box' placeholder="   search here" id="searchinput"/>
 <button className=' h-8 w-22 px-5 bg-blue-800 rounded-md hover:bg-blue-700 active:bg-blue-900' onClick={()=>setSearch()}>Search</button>
 </div>
        </ul>
        </div>
      </div>
  )
}

export default NavBar
