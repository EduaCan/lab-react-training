import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div>
    <img src={picture} alt="" />
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Gender: {gender}</p>
    <p>Height: {height}m</p>
    <p>Birth: {birth.toString()}</p>

    </div>
  )
}

export default IdCard