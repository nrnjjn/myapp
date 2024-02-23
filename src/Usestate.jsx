import React from 'react'
import { useState } from 'react'

export const Usestate = () => {
    const [count,setCount]=useState(0)
    const [data,setdata]=useState([])

    let increment=()=>{
        setCount(count+1)
    }
    let decrement=()=>{
        if (count!=0){
            setCount(count-1)
        }
        
    }

    let addata=()=>{
        setdata([
            {
                name: 'abc',
                age: 20

            },
            {
                name:'tygj',
                age:6
            }
        ])
    }
  return (
    <div><h3>{count}</h3>
    {data.map((item)=>(
        <div>
        <h2>{item.name}</h2>
        <h2>{item.age}</h2>
        </div>
    ))}
    <button className='bg-orange-700' onClick={increment}>Incerement</button><br/><br/>
    <button className='bg-orange-700' onClick={decrement}>Decerement</button><br/><br/>
    <button className='bg-yellow-300' onClick={addata}>Add</button>
    </div>
  )
}