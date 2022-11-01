import React from 'react'

function Rating({children, color}) {
  return (
    <div>
        <h2 style={{color: `${color}`}}>{"★".repeat(Math.round(children)).concat("☆".repeat(Math.round(5-Math.round(children))))}</h2>
    </div>
  )
}

export default Rating