import React from 'react'

export default function User(props) {
    return (
       
        
            <ul className="list-group">
                <li className="list-group-item">name : {props.data.name}</li>
                <li className="list-group-item">email : {props.data.email}</li>
                <li className="list-group-item">phone : {props.data.phone}</li>
            </ul>
  
    )
}
