import MedidaItem from "../MedidaItem/MedidaItem";
import ItemFeatures from "../ItemFeatures/ItemFeatures";
import ItemButton from "../ItemButton/ItemButton";

const ItemDescription = ({
  nombre_producto,
  descripcion_corta,
  medida,
  medidaMancho,
  medidaMprofundidad,
  medidaLancho,
  medidaLprofundidad,
  medidaXLancho,
  medidaXLprofundidad,
  descripcion_larga,
  patas,
  otra_caracteristica,
  categorias_id,
  categoria,
}) => {
  return (
    <div className="description">
      <div className="title">
        <h1>{nombre_producto}</h1>
      </div>

      <MedidaItem
        medida={medida}
        medidaMancho={medidaMancho}
        medidaMprofundidad={medidaMprofundidad}
        medidaLancho={medidaLancho}
        medidaLprofundidad={medidaLprofundidad}
        medidaXLancho={medidaXLancho}
        medidaXLprofundidad={medidaXLprofundidad}
        otra_caracteristica={otra_caracteristica}
        categoria={categoria}
      />

      <div className="product-description">{descripcion_larga}</div>

      <ItemFeatures categoria={categoria} />

      <ItemButton mensaje={nombre_producto} />
    </div>
  );
};

export default ItemDescription;
