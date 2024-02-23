import React, {useState,useEffect} from 'react'

export const Effect = () => {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)


useEffect(()=>{
    console.log('In mounting phase');
},[])

useEffect(()=>{
    return()=>{
        console.log('Unmount');
    }
},[])

useEffect(()=>{
    console.log(count,count2);
},[count,count2])

let increment=()=>{
    setCount(count+1)
}

let increment5=()=>{
    setCount2(count2+5)
}
  return (
      <>
      <div>{count},{count2}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={increment5}>Increment5</button>
      </>
  )
}
