import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ItemBreadcrumb from '../ItemBreadcrumb/ItemBreadcrumb'


const ItemCard = ({id, url_string, nombre_producto,  descripcion_corta, estructura, cincha,  relleno_asientos, relleno_respaldos, otra_caracteristica, telas, picture, medidas, medida, categoria}) => {

    return (
        <div>
            <ItemBreadcrumb categoria={categoria} nombre_producto={nombre_producto} />
            
            <h2>{nombre_producto}</h2>

        </div>
    )
}

export default ItemCard