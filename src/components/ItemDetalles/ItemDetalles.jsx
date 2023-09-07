
const ItemDetalles = ({relleno_asientos, cincha, estructura, relleno_respaldos, relleno, patas1, patas2, patas3}) => {

    return (
        <div className="producto-detalles">         
            <div className="estructurales">
                <h2>Detalles estructurales </h2>
                <h4>Estructura</h4>
                <p> {estructura} </p>
                <h4>Cincha</h4>
                <p> {cincha} </p>
                {relleno_asientos != '' && 
                <>
                <h4>Relleno asientos</h4>
                <p> {relleno_asientos} </p> 
                </> }

                {relleno_respaldos != '' && 
                <>
                <h4>Relleno respaldos</h4>
                <p> {relleno_respaldos} </p> 
                </> }
                {relleno != '' && 
                <>
                <h4>Relleno</h4>
                <p> {relleno} </p> 
                </> }
                
            </div>
            <div className="personalizables">
                <h2>Opciones personalizables </h2>
                <h4>Telas</h4>
                    <ul>
                        <li>• Cheniles</li>
                        <li>• Linos</li>
                        <li>• Panas Anti manchas</li>
                    </ul>
                <h4>Patas</h4>
                    <ul>
                        {patas1 != '' && <li>• {patas1}</li>  }
                        {patas2 != '' && <li>• {patas2}</li>  }
                        {patas3 != '' && <li>• {patas3}</li>  }
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