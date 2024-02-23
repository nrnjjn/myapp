import React from 'react'
import './App.css';
import img from './2160373.jpg'
import img2 from './2745173.jpg'
import { Card } from './Card'
export const App = () => {
    let a=[
        {img:img, Title:'Adam Jonson', Details:'Developer',  cls:' bg-slate-400'},
        {img:img2, Title:'john', Details:'developer', cls:'bg-slate-500'},
        {img:img, Title:'Adam Jonson', Details:'Developer',  cls:' bg-slate-400'},
        {img:img2, Title:'john', Details:'developer', cls:'bg-slate-500'},
        {img:img, Title:'Adam Jonson', Details:'Developer',  cls:' bg-slate-400'},
        {img:img2, Title:'john', Details:'developer', cls:'bg-slate-500'},

    ]
  return (
//    
<div className='flex w-[70%] flex-wrap gap-32 m-auto'>
    {/* <Card img={img} Title='Adam Jonson' Details='Developer' cls=' bg-slate-400' />
    <Card img={img2} Title='Linda Larson' Details='Manager' />
    <Card img={img} Title='Marry Hudson' Details='Designer ' cls=' bg-slate-400' />
    <Card img={img2} Title='Nina Hudson' Details='Designer' />
    <Card img={img} Title='Margo Larson' Details='Manager' cls=' bg-slate-400'/>
    <Card img={img2} Title='Nicole Scavo' Details='Manager' /> */}
    {a.map((item)=>(
                
                <Card img={item.img} Title={item.Title} Details={item.Details} cls={item.cls}/>
                
                
                ))}

</div>
  )
}
