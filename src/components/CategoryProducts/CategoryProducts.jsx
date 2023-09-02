import React from "react";
import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { pedirDatos } from '../../helpers/pedirDatos'




const CategoryProducts = ( {value, label} ) => {

  const [productos, setProductos] = useState([])

  pedirDatos()
  .then((res) => {
    setProductos( res.filter((prod) => prod.categoria === label) )
  })
  .catch((err) => console.log(err))
  /* .finally(() => setLoading(false)) */


  return (
      <div id={value} className="product"> 

        <h2> {label}</h2>
        <div className="grilla" >
        {
            productos.map((prod) => <ProductCard key={prod.id} {...prod}/>)
        }
       </div>
        
      </div>
      
      )
};

export default CategoryProducts