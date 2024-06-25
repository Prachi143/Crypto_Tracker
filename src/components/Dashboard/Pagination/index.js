import React , {useState} from 'react';
import  "./styles.css"
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent({page,handlePageChange}) {
  
  return (
    <div className="pagination-component">
      <Pagination 
       count={10}
       page={page} 
       onChange={(event, value) => handlePageChange(event, value)} 
       sx={{
        color:"var(--white)",
        "& .Mui-Selected":{
            backgroundColor:"var(-blue) !important",
            color:"#fff !important",
            borderColor:"var(--blue) !important",
        },
        "& .MuiPanginationItem-ellipsis":{
            border:"1px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text":{
            color:"var(--white)",
            border:"1px solid var(--grey)",
        },
       }}
       />
    </div>
  );
}

//[0,99]
// page1 -> [0,10)
//page2 -> [10,20)
//page3 -> [20-30)
//........
//page 10 -> [90,100]

//page 1 -> coins.slice(0,10)
//var page = 1
//var initialIndex = page-1*10
//coins.slice(initialIndex,initialIndex+10)
