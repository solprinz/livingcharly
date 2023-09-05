
const ItemDetalles = ({relleno_asientos, cincha, estructura, relleno_respaldos, patas1, patas2, patas3}) => {

    return (
        <div className="producto-detalles">         
            <div className="estructurales">
                <h2>Detalles estructurales </h2>
                <h4>Estructura</h4>
                <p> {estructura} </p>
                <h4>Cincha</h4>
                <p> {cincha} </p>
                <h4>Relleno asientos</h4>
                <p> {relleno_asientos} </p>
                <h4>Relleno Respaldos</h4>
                <p> {relleno_respaldos} </p>
            </div>
            <div className="personalizables">
                <h2>Opciones personalizables </h2>
                <h4>Telas</h4>
                    <ul>
                        <li>Cheniles</li>
                        <li>Linos</li>
                        <li>Panas Anti manchas</li>
                    </ul>
                <h4>Patas</h4>
                    <ul>
                        <li>• {patas1}</li>
                        <li>• {patas2}</li>
                        <li>• {patas3}</li>
                    </ul>
                <h4>Color</h4>
                    <ul>
                        <li>• Consultar disponibilidad según la tela.</li>
                    </ul>
            </div>
            
        </div>
    )
}

export default ItemDetalles