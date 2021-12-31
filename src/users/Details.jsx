import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

export default function Details() {

    const data=useParams()
    const [users,setusers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setusers(res.data)
        })
     }, []);

    return (
        <div className='container'>
            <h1 className='text-secondary fw-bold'>user details</h1>
            {
                users
                .filter((user)=>user.id==data.id)
                .map(user=>(
                    <ul key={user.id} className="list-group">
                    <li className="list-group-item">name : {user.name}</li>
                    <li className="list-group-item">email : {user.email}</li>
                    <li className="list-group-item">phone : {user.phone}</li>
                    <li className="list-group-item">
                        <Link to={`/users`} className='btn btn-secondary'>go back</Link>
                    </li>
                </ul>
                ))
            }
        </div>
    )
}
