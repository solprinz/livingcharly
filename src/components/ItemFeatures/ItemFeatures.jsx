import GarantiaImage from '../../assets/Garantia.svg';
import EnviosImage from '../../assets/Envios.svg';
import ElegiImage from '../../assets/Elegi.svg';

const ItemFeatures = ({categoria}) => {

    return (         
            <div className="features">
                <div className="feature-box">
                    <img src={GarantiaImage} alt="garantía hasta 4 años" />
                    <div className="info">
                        <h4 className="info-title">Garantía</h4>
                        <p>Hasta 4 años</p>
                    </div> 
                </div>
                <div className="feature-box">
                    <img src={EnviosImage} alt="envíos A todo el país" />
                    <div className="info">
                        <h4 className="info-title">Envíos</h4>
                        <p>A todo el país</p>
                    </div> 
                </div>
                <div className="feature-box">
                    <img src={ElegiImage} alt="Elegí Telas y Patas" />
                    <div className="info">
                        <h4 className="info-title">Elegí</h4>
                        <p>Telas 
                            {
                               categoria !== "Poltronas" ? 
                               <> y Patas</>
                               : ""
                            }
                        </p>
                    </div> 
                </div>
            </div>
    
    )
}

export default ItemFeatures