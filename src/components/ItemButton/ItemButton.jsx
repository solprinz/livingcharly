import { Link } from "react-router-dom";

const ItemButton = ({ mensaje }) => {
  const telefono = "5492614727258";
  const whatsAppUrl = `https://wa.me/${telefono}?text=Hola%20Living%20Charly%20te%20contacto%20por%20${mensaje}`;

  return (
    <div className="item-button">
      <Link className="button" to={`${whatsAppUrl}`} target="_blank">
        Solicitar Cotización
      </Link>
    </div>
  );
};

export default ItemButton;
