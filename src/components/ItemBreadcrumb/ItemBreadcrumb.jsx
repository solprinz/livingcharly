import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const ItemBreadcrumb = ({nombre_producto, categoria}) => {

    return (
        <div>
            <div className="breadcrumb">
            <p> <Link to={`/catalogo`}>Catálogo</Link>  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.33813 6.55791C7.55395 6.80209 7.55395 7.19793 7.33813 7.44211L1.7039 13.8169C1.48808 14.061 1.13823 14.061 0.922411 13.8169L0.661865 13.5221C0.446045 13.2779 0.446045 12.882 0.661865 12.6379L5.64481 7.00001L0.661865 1.36214C0.446045 1.11795 0.446045 0.722116 0.661865 0.47793L0.922411 0.183139C1.13823 -0.0610466 1.48808 -0.0610466 1.7039 0.183139L7.33813 6.55791Z" fill="#F6973F"/>
            </svg> <Link to={`/catalogo/#${categoria}`}>{categoria} </Link> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.33813 6.55791C7.55395 6.80209 7.55395 7.19793 7.33813 7.44211L1.7039 13.8169C1.48808 14.061 1.13823 14.061 0.922411 13.8169L0.661865 13.5221C0.446045 13.2779 0.446045 12.882 0.661865 12.6379L5.64481 7.00001L0.661865 1.36214C0.446045 1.11795 0.446045 0.722116 0.661865 0.47793L0.922411 0.183139C1.13823 -0.0610466 1.48808 -0.0610466 1.7039 0.183139L7.33813 6.55791Z" fill="#F6973F"/></svg> <span>{nombre_producto}</span>  </p>
          </div>

        </div>
    )
}

export default ItemBreadcrumb