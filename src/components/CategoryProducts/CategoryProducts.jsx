import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { pedirDatos } from "../../helpers/pedirDatos";
import WhatsApp from "../WhatsApp/WhatsApp";

const CategoryProducts = ({ value, label }) => {
  const [productos, setProductos] = useState([]);

  pedirDatos()
    .then((res) => {
      setProductos(res.filter((prod) => prod.categoria === label));
    })
    .catch((err) => console.log(err));

  return (
    <div data-section id={value} className="product">
      <h2>| {label}</h2>
      <div className="grilla">
        {productos.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
      <WhatsApp mensaje={""} />
    </div>
  );
};

export default CategoryProducts;
