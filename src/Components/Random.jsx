import React from 'react'

function Random(props) {
    const randomGenerator = (min, max) => {
        return min + Math.floor(Math.random() * (max - min))
    }
  return (
    <p>Random value between {props.min} and {props.max} => {randomGenerator(props.min, props.max)}</p>
  )
}

export default Random