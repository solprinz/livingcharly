import { Link } from "react-router-dom"
import vectorImage from '../../assets/Vector.svg';

const ProductCard = ({id, url_string, nombre_producto,  descripcion_corta, estructura, cincha,  relleno_asientos, relleno_respaldos, otra_caracteristica, telas, picture1, medidas, medida}) => {


    return (
         <div className = "card-catalogo">
            <Link to={`/producto/${url_string}`}>
                <div className='product-img' style={{ 
                    backgroundImage: `url(${picture1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"
                    }}>
                </div>
                <div className="card-data">

                    <p className="medidas">
                    <img src={vectorImage} alt="medida" />
                    {medida}     
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