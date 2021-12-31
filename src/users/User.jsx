import React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {
    return (
       
        
            <ul key={props.data.id} className="list-group">
                <li className="list-group-item">name : {props.data.name}</li>
                <li className="list-group-item">email : {props.data.email}</li>
                <li className="list-group-item">phone : {props.data.phone}</li>
                <li className="list-group-item">
                    <Link to={`/details/${props.data.id}`} className='btn btn-warning'>details</Link>
                </li>
                
            </ul>
  
    )
}
