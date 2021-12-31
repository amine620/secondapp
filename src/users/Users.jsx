import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import User from './User'

export default function Users() {



    // method 1

    // const [name, setname] = useState('')
    // const [email, setemail] = useState('')
    // const [phone, setphone] = useState('')

    // //   handle inputs
    // function handleName(e) {
    //     setname(e.target.value)
    // }
    // function handleEmail(e) {
    //     setemail(e.target.value)
    // }
    // function handlePhone(e) {
    //     setphone(e.target.value)
    // }

    // method 2

    const [info,setinfo]=useState({ })
    const [users, setusers] = useState([])

  



    function handleInfo(e) {
        setinfo({
            ...info,
            [e.target.name]:e.target.value
        })
    }


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setusers(res.data)
        })
     }, []);
     
    function add() {
        axios.post('https://jsonplaceholder.typicode.com/users',info)
        .then(res=>{
            console.log(res.data);
            setusers(
                [res.data,...users]
            )
        })
    }

    function remove(id) {
         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(data=>{
             console.log(data);
            const res=users.filter((user)=>user.id!=id)
            setusers(res)
         })
    }


    return (
        <div className='container mt-5'>

            <div className="form-group">
                <input name='name' onChange={handleInfo} type="text" className="form-control mt-2" placeholder='name' />
                <input name='email' onChange={handleInfo} type="text" className="form-control mt-2" placeholder='email' />
                <input name='phone' onChange={handleInfo} type="text" className="form-control mt-2" placeholder='phone' />
                <button onClick={add} className='btn btn-success form-control mt-2'>save</button>
            </div>

            <div className="row">
                {
                    users.map((user) => (
                        <div className='col-md-6 mt-2'>
                        <User  data={user} />
                        <button className='btn btn-danger mt-2' onClick={()=>remove(user.id)}>delete</button>
                        </div>
                         ))
                }
            </div>
        </div>
    )
}
