import React from 'react';
import './TodoSearch.css'
import {TodoContext} from '../TodoContext'
function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
    
    }=React.useContext(TodoContext);
 
    return(
      <div className='TodoSearchContainer'>
     <input className="TodoSearch"
     value={searchValue}
     onChange={(event)=>{
    console.log(event);
   setSearchValue(event.target.value)
  }} 
     placeholder="Cortar Cebolla"/>
     </div>

    );
  }
  export{ TodoSearch};