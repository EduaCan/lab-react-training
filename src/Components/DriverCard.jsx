import React from 'react'
import Rating from './Rating'

function DriverCard({name, rating, img, car}) {
  return (
    <div style={{backgroundColor: "blue"}}>
        <img src={img} alt="" width="50px"/>
        <h4 style={{color: "white"}}>{name}</h4>
        <Rating color="white">{rating}</Rating>
        <span style={{color: "white"}}>{car.model} - {car.licensePlate}</span>
    </div>
  )
}

export default DriverCard