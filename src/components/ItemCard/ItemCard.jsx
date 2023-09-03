import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ItemBreadcrumb from '../ItemBreadcrumb/ItemBreadcrumb'
import ItemPictures from '../ItemPictures/ItemPictures'
import ItemDescription from '../ItemDescription/ItemDescription'

const ItemCard = ({id, url_string, nombre_producto,  descripcion_corta, estructura, cincha,  relleno_asientos, relleno_respaldos, descripcion_larga, otra_caracteristica, telas, picture1, picture2, picture3, picture4, medidas, medidaMancho, medidaMprofundidad, medidaLancho, medidaLprofundidad, medidaXLancho, medidaXLprofundidad, categoria}) => {

    return (
        <div>
            <ItemBreadcrumb categoria={categoria} nombre_producto={nombre_producto} />
            <div className="producto-card">
                <ItemPictures picture1={picture1} picture2={picture2} picture3={picture3} picture4={picture4} nombre_producto={nombre_producto} />
                <ItemDescription nombre_producto={nombre_producto} medidas={medidas} medidaMancho={medidaMancho} medidaMprofundidad={medidaMprofundidad} medidaLancho={medidaLancho} medidaLprofundidad={medidaLprofundidad} medidaXLancho={medidaXLancho} medidaXLprofundidad={medidaXLprofundidad} descripcion_larga={descripcion_larga} otra_caracteristica={otra_caracteristica} />
            
            </div>
           

        </div>
    )
}

export default ItemCard