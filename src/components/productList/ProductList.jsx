import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Titles from '../Titles/Titles'

export const ProductList = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
  
    return (
        <div>
            <Titles title={'Conocé nuestros productos'} subtitle={'CATÁLOGO'} /> 
            <div className="content">
                <div className="left-side">
                    <CategoriesNav />
                </div>
                <div className="right-side">

                </div>                
            </div>
        </div>
    )
}

