import {useState} from "react"

let count = 0
function Carousel({images}) {
    const [img, setImg] = useState(images[count])

    const left = () => {
        count--
        if (count<0) count=images.length-1 
        setImg(images[count])
        console.log(count)
    }

    const right = () => {
        count++
        if (count>images.length-1)  count=0 
        setImg(images[count])
        console.log(count)
    }

  return (
    <div>
        <img src={img} alt="" />
        <button onClick={left}>Left</button>
        <button onClick={right}>Right</button>
    </div>
  )
}

export default Carousel