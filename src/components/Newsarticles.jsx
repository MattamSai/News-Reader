import React,{useState,useEffect} from 'react'

function Newsarticles () {

    let [value,setValue]=useState("hi");
   async function news (){
        let response=await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=7591a73c5a3148fabc70e4286d3be729")
        let result=await response.json()
        console.log(result)
        console.log(result.articles)
        
        let p=result.articles.map((a)=>{
          return(
          <div>
        
        
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />
           
          <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
          
              </div>)} )
        console.log(p);
setValue(p);
      }
news();
    // console.log(news);
return <div>hello{value}</div>
}

export default Newsarticles
