import {useState} from "react"


function ClickablePicture({img, imgClicked}) {



    let [image, setImage] = useState(img)

    const imageClick = () => {
        image = img ? setImage(imgClicked) : setImage(img)
    }

  return (
    <div>
        <img src={image} alt="" onClick={imageClick}/>
    
    </div>
  )
}

export default ClickablePicture