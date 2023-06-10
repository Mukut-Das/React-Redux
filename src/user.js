import React from 'react'

const User = (props) => {

  return (
    <>
    <div>user details</div>
    <h3>Name : {props.data.name}</h3>
    <h3>Age : {props.data.age}</h3>
    </>
  )
}

export default User