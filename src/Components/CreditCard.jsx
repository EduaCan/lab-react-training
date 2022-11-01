import React from 'react'
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/mastercard.png"

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  return (
    <div style={{backgroundColor:`${bgColor}`}}>
        <img src={type==="Visa" ? visa : mastercard} alt="" />
        <p style={{color: `${color}`}}>···· ···· ···· {number.slice(12)}</p>
        <span style={{color: `${color}`}}>Expires {expirationMonth}/{expirationYear} </span>
        <span style={{color: `${color}`}}>{bank}</span>
        <p style={{color: `${color}`}}>{owner}</p>
    </div>
  )
}

export default CreditCard