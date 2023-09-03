import { useState } from "react"
import useMobile from "../../hooks/useMobile"


const ItemPictures = ({picture1, picture2, picture3, picture4,nombre_producto}) => {

    return (

            <div className="pictures">
                <div className="main-picture">
                    <img src={picture1} alt={nombre_producto} />
                </div>
                <div className="thumbnails">
                    <img src={picture2} alt={nombre_producto} />
                    <img src={picture3} alt={nombre_producto} />
                    <img src={picture4} alt={nombre_producto} />
                </div>

           

        </div>
    )
}

export default ItemPictures