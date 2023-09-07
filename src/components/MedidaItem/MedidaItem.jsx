
import vectorImage from '../../assets/Vector.svg';
import gearImage from '../../assets/Gear.svg';

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
                        otra_caracteristica.length < 48 ?
                     
                    <div className="medida-card">
                        <span><img src={gearImage} alt="medida" /> <br/> </span>
                        <p className="medidas"> {otra_caracteristica} </p>
                        
                    </div>
                    :
                    <div className="medida-card">
                        <span style={{paddingBottom: '3px'}}  ><img src={gearImage} alt="medida" />
                         {otra_caracteristica} </span>
                    </div>
                    )
                }
               
            </div>
        </div>
        )
        
    }
}

export default MedidaItem