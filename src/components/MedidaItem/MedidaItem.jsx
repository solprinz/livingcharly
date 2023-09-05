import { useState } from "react"
import vectorImage from '../../assets/Vector.svg';



const MedidaItem = ({medida, medidaMancho, medidaMprofundidad, medidaLancho, medidaLprofundidad, medidaXLancho, medidaXLprofundidad, otra_caracteristica, categoria}) => {

    if(medida !== '') {
        return (
        <div className="medidas">

            <div className="medidas-card">
                {
                    medidaMancho !== '' ?
                    <div className="medida-card">
                        <span><img src={vectorImage} alt="medida" /> M</span>
                        <p className="medidas">
                            Ancho: {medidaMancho} cm <br />
                            Profundidad: {medidaMprofundidad} cm
                        </p>   
                    </div>
                    :
                    ''
                }
                {
                    medidaLancho !== '' ?
                    <div className="medida-card">
                        <span><img src={vectorImage} alt="medida" /> L</span>
                        <p className="medidas">
                            Ancho: {medidaLancho} cm <br />
                            Profundidad: {medidaLprofundidad} cm
                        </p>   
                    </div>
                    :
                    ''
                }
                {
                    medidaXLancho !== '' ?
                    <div className="medida-card">
                        <span><img src={vectorImage} alt="medida" /> XL</span>
                        <p className="medidas">
                            Ancho: {medidaXLancho} cm <br />
                            Profundidad: {medidaXLprofundidad} cm
                        </p>   
                    </div>
                    :
                    ''
                }
                { 

                    otra_caracteristica !== '' && 
                    (
                    categoria === 'Sofá' || categoria === 'Esquineros' ?
                     
                    <div className="medida-card">
                        <span><img src={vectorImage} alt="medida" /> </span>
                        <p className="medidas"> {otra_caracteristica}</p>
                        
                    </div>
                    :
                    <div className="medida-card">
                        <span><img src={vectorImage} alt="medida" /> {otra_caracteristica}</span>
                    </div>
                    )
                }
               
            </div>
        </div>
        )
        
    }
}

export default MedidaItem