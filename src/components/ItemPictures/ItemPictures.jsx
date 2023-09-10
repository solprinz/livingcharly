import { useState, useEffect } from "react"


const ItemPictures = ({picture1, picture2, picture3, picture4, nombre_producto}) => {

    const [pictureId, setpictureId] = useState(picture1)

    const fullImg = document.getElementById('fullImg')

    const baseUrl = 'https://living.eproweb.net/products/'

    function bigImage(pictureId) {
        setpictureId(pictureId)
        fullImg.src = baseUrl + pictureId
    }

    useEffect(() => {
        setpictureId(pictureId)
    }, [pictureId])

    return (

            <div className="pictures">
                <div className="main-picture">
                    <img src={baseUrl + picture1} alt={nombre_producto} id="fullImg"/>
                </div>
                <div className="thumbnails">
                    {picture2 != '' && 
                    <img src={baseUrl + picture2} alt={nombre_producto} onMouseEnter={() => bigImage(picture2)}
                    onClick={() => bigImage(picture2)} />
                     }
                     {picture3 != '' && 
                    <img src={baseUrl + picture3} alt={nombre_producto} onMouseEnter={() => bigImage(picture3)}
                    onClick={() => bigImage(picture3)} />
                     }
                     {picture1 != '' && 
                    <img src={baseUrl + picture1} alt={nombre_producto} onMouseEnter={() => bigImage(picture1)}
                    onClick={() => bigImage(picture1)} />
                     }
                     
                     
                
                </div>

           

        </div>
    )
}

export default ItemPictures