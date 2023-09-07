import { Link } from "react-router-dom"
import vectorImage from '../../assets/Vector.svg';

const ProductCard = ({url_string, nombre_producto,  descripcion_corta,  picture1,  medida}) => {

    const baseUrl = 'https://living.eproweb.net/products/'

    return (
         <div className = "card-catalogo">
            <Link to={`/producto/${url_string}`}>
                <div className='product-img' style={{ 
                    backgroundImage: `url(${baseUrl + picture1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"
                    }}>
                </div>
                <div className="card-data">
                    <p className="medidas">
                    {
                        medida !== ''  ? 
                        <span><img src={vectorImage} alt="medida" /> 
                        {medida} </span> 
                        : ''
                    }                    
                    </p>

                    <h2>{nombre_producto}</h2>
                    
                    <p className="description">
                        {descripcion_corta}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard