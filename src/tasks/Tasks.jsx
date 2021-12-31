import React, { useEffect, useState } from 'react'

import Task from './Task'

export default function Tasks() {

    // this state for handle input change
    const [text,settext]=useState('')

    const [tasks,settask]=useState(['learn react','learn javascript'])

       
 
  function  handleChange(e) {
       settext(e.target.value)
  }

  function add() {

  settask([...tasks,text])
 
  }

  function remove(i)
  {
      const newState= tasks.filter((task,index)=>index!=i)
        settask(newState)
  }

  
    return (
        <div className='container mt-5 d-flex justify-content-around'>
         
            <div className='form-group col-md-4'>
                <input type="text"  onChange={handleChange} className='form-control'/>
                <button onClick={add} className='form-control mt-2 btn btn-success'>add</button>
            </div>

            <ul className='list-group col-md-6'>
            {
                tasks.map((task,index)=>(
                    <>
                  <Task unique={index}  data={task}   />
                  <button onClick={()=>remove(index)} className='btn btn-secondary mt-2'>delete</button>
                    </>
                 ))          
            }
            </ul>
        </div>
    )
}
