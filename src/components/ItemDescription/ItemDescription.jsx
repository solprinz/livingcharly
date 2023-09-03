import { useState } from "react"
import useMobile from "../../hooks/useMobile"


const ItemDescription = ({nombre_producto, medidaMancho,  medidaMprofundidad, medidaLancho, medidaLprofundidad,  medidaXLancho,  medidaXLprofundidad, descripcion_larga, otra_caracteristica}) => {

    return (

            <div className="description">
                <div className="title">
                    <h1>{nombre_producto}</h1>
                </div>
                <div className="medidas">
                    <div className="medida">
                        
                    </div>
                </div>
                <div className="product-description">
                    
                </div>
                <div className="features">
                    
                </div>
                <div className="cta">
                    
                </div>
           
            </div>

    )
}

export default ItemDescription