import React from 'react'
import img from './2160373.jpg'

export const Card = (props) => {
  return (

<div className={`pt-10 h-44 w-48 text-center ${ props.cls}`} >
    <div><img src= { props.img } alt="" className='rounded-[50%] w-14 h-14 ml-10 m-auto'/></div>
    <div className=''><b>{props.Title}</b></div>
    <div className='' ><p className='text-[13px]'>{props.Details}</p></div>
</div>

  )
}
