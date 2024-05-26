import React, { useContext, useEffect, useState } from 'react'
import Newselements from './Newselements';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useLocation } from 'react-router-dom';



const Test = ({searchString}) => {
const [newsFeed,setNewsFeed]=useState();
const [pageNumber,setPageNumber]=useState(1);
const [totalPages,setTotalPages]=useState(100/20);
const queryParams = useLocation()?.search;
// const { searchString, setSearchString}= useContext(SearchContext)

const searchQuery = new URLSearchParams(queryParams).get('category');

function handlePageClick(event){
setPageNumber(event)

}


useEffect(() => {
    getNewsFeed();

}, [pageNumber,searchQuery,searchString])

async function getNewsFeed(){
    const response=await fetch(`https://newsapi.org/v2/everything?q=${searchString||searchQuery}&apiKey=74a922059caf4d4cbce6835d18d2bd8d&pageSize=20&page=`+ pageNumber);
// const response=await fetch(`https://newsapi.org/v2/everything?q=${searchString||searchQuery}&apiKey=6734fd7d2bdf4d00912ad1424bc858e2&pageSize=20&page=`+ pageNumber);
const result= await response.json();
console.log(result);
setNewsFeed(result?.articles);

}
    return (


<>
    <div className='flex flex-wrap justify-center pt-28 bg-gradient-to-tl from-[#fbc2eb] to-[#a6ceee]'>
        {newsFeed?.map((element,index)=>{
            return (
                <>

                {element?.title!='[Removed]'&& element?.description!='[Removed]'&&<Newselements key={index} newsFeed={element}/>
                }
                </>
            )
        })

        }
    </div>
    <ResponsivePagination  onPageChange={handlePageClick} total={totalPages} current={pageNumber} />

 
    </>)

    }
export default Test
