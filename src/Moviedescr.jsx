import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Moviedescr = () => {
    const [data,setData]=useState('')
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='text-black flex flex-wrap justify-center w-80  gap-3 text-center'>
        <img src={data.Poster} alt="" />
        <div >
        <h2 className=''>{data.Title}</h2>
        <h4 className=''>{data.Released}</h4>
        </div>
        <h5>{data.Plot}</h5>
        <h5>IMDB Rating: {data.imdbRating}</h5>
    
    </div>
  )
}
