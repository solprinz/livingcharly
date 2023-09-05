import { Link } from "react-router-dom"

const ItemButton = ({title, subtitle}) => {

    return (
        <div className="item-button">         
            
        <Link className="button" to="/">Solicitar Cotización</Link>
            
        </div>
    )
}

export default ItemButton