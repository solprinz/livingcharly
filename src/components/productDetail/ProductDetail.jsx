
import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import ItemCard from '../ItemCard/ItemCard'

export const ProductDetail = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { urlString } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.url_string === urlString))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [urlString])

    return (
        <div className="container">
           {
            loading 
                ? <Loader/>
                : <ItemCard {...item}/>
           }
        </div>
    )
}


