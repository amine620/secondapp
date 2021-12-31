import React from 'react'

export default function Task(props) {

    return (
        <>
           <li key={props.unique} className="list-group-item">{props.data}</li>
        </>
            
    )
}

