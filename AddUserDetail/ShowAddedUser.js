import React from 'react'

const ShowAddedUser = (props) => {
  return (
    <div id={props.id}>
        <h1>{props.userdetail.name}</h1>
        <h1>{props.userdetail.age}</h1>
        <h1>{props.userdetail.clg}</h1>
    </div>
  )
}

export default ShowAddedUser