import { Link } from "react-router-dom";
import ItemBreadcrumb from "../ItemBreadcrumb/ItemBreadcrumb";
import ItemPictures from "../ItemPictures/ItemPictures";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemDetalles from "../ItemDetalles/ItemDetalles";
import InformationImage from "../../assets/Information.svg";
import WhatsApp from "../WhatsApp/WhatsApp";
import ItemButton from "../ItemButton/ItemButton";

const ItemCard = ({
  nombre_producto,
  descripcion_corta,
  estructura,
  cincha,
  relleno_asientos,
  relleno_respaldos,
  relleno,
  descripcion_larga,
  otra_caracteristica,
  patas1,
  patas2,
  patas3,
  telas,
  picture1,
  picture2,
  picture3,
  picture4,
  medida,
  medidas,
  medidaMancho,
  medidaMprofundidad,
  medidaLancho,
  medidaLprofundidad,
  medidaXLancho,
  medidaXLprofundidad,
  categoria,
}) => {
  return (
    <div className="item-content">
      <ItemBreadcrumb categoria={categoria} nombre_producto={nombre_producto} />
      <div className="producto-card">
        <ItemPictures
          picture1={picture1}
          picture2={picture2}
          picture3={picture3}
          picture4={picture4}
          nombre_producto={nombre_producto}
        />
        <ItemDescription
          nombre_producto={nombre_producto}
          descripcion_corta={descripcion_corta}
          medidas={medidas}
          medida={medida}
          medidaMancho={medidaMancho}
          medidaMprofundidad={medidaMprofundidad}
          medidaLancho={medidaLancho}
          medidaLprofundidad={medidaLprofundidad}
          medidaXLancho={medidaXLancho}
          medidaXLprofundidad={medidaXLprofundidad}
          descripcion_larga={descripcion_larga}
          otra_caracteristica={otra_caracteristica}
          categoria={categoria}
        />
      </div>

      <ItemDetalles
        relleno_asientos={relleno_asientos}
        cincha={cincha}
        estructura={estructura}
        relleno_respaldos={relleno_respaldos}
        relleno={relleno}
        patas1={patas1}
        patas2={patas2}
        patas3={patas3}
      />

      <div className="dudas">
        <img src={InformationImage} alt="Informacion Living Charly" />
        <Link to="/preguntas-frecuentes">
          ¿Dudas? Consultá nuestra sección de Preguntas Frecuentes
        </Link>
      </div>
      <WhatsApp mensaje={nombre_producto} />
    </div>
  );
};

export default ItemCard;
