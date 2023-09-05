import React from "react";
import { useState } from 'react'
import Titles from '../Titles/Titles'
import OtraCard from '../OtraCard/OtraCard'
import Loader from '../Loader/Loader'
import { pedirDatos } from '../../helpers/pedirDatos'


const ProductosRelacionados = ({categoria} ) => {

    const [loading, setLoading] = useState(true)

    const [productosRelacionados, setProductosRelacionados] = useState([])

    pedirDatos()
    .then((res) => {
        setProductosRelacionados( res.filter((prode) => prode.categoria === categoria) )
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
      
    return (
        <div>
            <Titles title={'Productos Relacionados'} subtitle={''} /> 
            <div className="content swiper">
                <div className="destacados">
                {
                    loading
                        ? <Loader/>
                        : 
                            productosRelacionados.map((prode) => <OtraCard key={prode.id} {...prode}/>)
                       
                     
                }
                </div>                 
            </div>
        </div>
    )
}


export default ProductosRelacionados

