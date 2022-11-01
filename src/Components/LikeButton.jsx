import { useState } from "react"



const colorsArray = ['purple','blue','green','yellow','orange','red']

function LikeButton() {

    let [buttonColor, setButtonColor] = useState("purple")
    let [counter, setCounter] = useState(0)


    const counterAndChangeColor = () => {
        counter = counter +1
        buttonColor = colorsArray[counter % colorsArray.length]
        setButtonColor(buttonColor)
        setCounter(counter)
    }

  return (
    <div>
        <button style={{backgroundColor: `${buttonColor}`}} onClick={counterAndChangeColor}>Like {counter}</button>
    </div>
  )
}

export default LikeButton