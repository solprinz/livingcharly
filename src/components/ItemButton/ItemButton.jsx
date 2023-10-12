import { Link } from "react-router-dom";

const ItemButton = ({ title, subtitle, nombre_producto }) => {
  const telefono = "5492614727258";
  const whatsAppUrl = `https://wa.me/${telefono}?text=Hola%20Living%20Charly%20te%20contacto%20por%20`;

  return (
    <div className="item-button">
      <Link className="button" to={`${whatsAppUrl}`}>
        Solicitar Cotización
      </Link>
    </div>
  );
};

export default ItemButton;
