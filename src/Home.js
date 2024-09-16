import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNames } from './Store/Slice';

function Home() {

    const [name, setName]= useState("");
    const navigate= useNavigate();
    const dispatch= useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name)
        dispatch(setNames(name))
        navigate('/coin')
    }

  return (
    <div  >
        <form onSubmit={handleSubmit}>
            <input type='text'  onChange={(e)=> setName(e.target.value)}/>
            <button> Submit</button>
        </form>
    </div>
  )
}

export default Home