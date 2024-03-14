import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const View = () => {
    const [data,setdata]=useState([''])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get('http://localhost:5000/find')
            console.log(response.data);
            setdata(response.data)
        }
        fetchdata()
    },[])
  return (
    <div>
{data.map((item)=>(
    <div className='bg-black text-white mb-3'>
    <h2>{item.name}</h2>
    <h2>{item.username}</h2>
    <h2>{item.password}</h2>
    </div>
))}
    </div>
  )
}