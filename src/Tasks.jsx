import React, { useState } from 'react'

import Task from './Task'

export default function Tasks() {

    // this state for handle input change

    const [tasks]=useState(['learn react','learn javascript'])


   
  
    return (
        <div>
          
            {
                tasks.map((task)=>(
                  <Task  data={task}  />
                 ))          
            }
        </div>
    )
}
