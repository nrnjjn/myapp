import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
const [data,setData]=useState('')


 
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    let handleSubmit=async (event)=>{
        event.preventDefault()
       let response=await axios.post('http://localhost:5000/add',data)
       console.log(response);
        
    }
  return (
    <div>
     
        <form onSubmit={handleSubmit}  className='bg-black p-4'>
            <input onChange={handleChange} value={data.username ? data.username : ''}   className='mb-3' placeholder='username'name='username' type="text"  id="" /><br />
            <input className='mb-3' value={data.password ? data.password :''} onChange={handleChange} placeholder='password' type="text" name="password" id="" /><br></br>
            <input className='mb-3' value={data.name ? data.name:''} onChange={handleChange} placeholder='name' type="text" name="name" id="" /><br></br>
        <input type="submit" name="" id="" className='text-black bg-white p-3' />
        </form>
    </div>
  )
}

export default Register