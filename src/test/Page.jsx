import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

export default function Page() {

  const [increment,setincrement]=useState(0)
 

    // useEffect(() => {
    // //   this will run once after the component mounts
    //    axios.get('https://jsonplaceholder.typicode.com/users')
    //    .then(res=>{
    //        console.log(res.data);
    //    })
    // }, []);
    


    // useEffect(() => {
    //     //    this will run once after component update
    //     // this can either by change in props or state
    //     console.log('props or state is changed right now ');
      
    // });
    
    // useEffect(() => {
    //     // this will run once after the component mounts
    //   console.log('component mounts');

    //     return () => {
    //         console.log('compoents unmounts');
    //     // this will run only after the component  unmounts
            
    //     };
    // }, []);
  

    // useEffect(() => {
    // //   this will run once , after component mounts
    // // and every time value change

           
    // // value may be some prpps or state
    // }, [products]);



   function numberInc()
   {
       setincrement(increment+1)
   }

   
    return (
        <div>
            <h1>{increment}</h1>
         
            <button onClick={numberInc}>click</button>
        </div>
    )
}
