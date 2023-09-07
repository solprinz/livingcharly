import { useState, useEffect } from "react"
import useMobile from "../../hooks/useMobile"


const ItemPictures = ({picture1, picture2, picture3, nombre_producto}) => {

    const [pictureId, setpictureId] = useState(picture1)

    const fullImg = document.getElementById('fullImg')

    function bigImage(pictureId) {
        setpictureId(pictureId)
        fullImg.src = pictureId
    }

    useEffect(() => {
        setpictureId(pictureId)
    }, [pictureId])


    return (

            <div className="pictures">
                <div className="main-picture">
                    <img src={picture1} alt={nombre_producto} id="fullImg"/>
                </div>
                <div className="thumbnails">
                    {picture2 != '' && 
                    <img src={picture2} alt={nombre_producto} onMouseEnter={() => bigImage(picture2)}
                    onClick={() => bigImage(picture2)} />
                     }
                     {picture3 != '' && 
                    <img src={picture3} alt={nombre_producto} onMouseEnter={() => bigImage(picture3)}
                    onClick={() => bigImage(picture3)} />
                     }
                     {picture1 != '' && 
                    <img src={picture1} alt={nombre_producto} onMouseEnter={() => bigImage(picture1)}
                    onClick={() => bigImage(picture1)} />
                     }
                     
                
                </div>

           

        </div>
    )
}

export default ItemPictures