import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Fetchmovie = () => {
    const [search,setSearch]=useState('')
    const [data,setData]=useState([''])

    let fetchdata=async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`)
        console.log(response.data.Search);
        setData(response.data.Search)
      }


    let handlechange=(e)=>{
        setSearch(e.target.value)
      }


  return (
    <div className='text-black'>
            <input onChange={handlechange} type="text" name="" id="" />
      <button onClick={fetchdata}>search</button>




{
  data.map((item)=>(
    <div className='bg-black text-white mb-4'>
   <Link to={`/moviedescr/${item.imdbID}`}><img src={item.Poster} alt="" /></Link>
    </div>

  ))
}

    </div>
  )
}
