import React from 'react'

function Greetings(props) {
    const greet = (lang) =>{
      if(lang==="de") {
        return "Hallo"
      }
      if(lang==="fr"){
        return "Bonjour"
      }
    }
  return (
        <p>{greet(props.lang)} {props.children}</p>
    
  )
}

export default Greetings