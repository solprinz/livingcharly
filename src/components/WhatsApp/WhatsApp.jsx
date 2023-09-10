import React from 'react';
import { Link } from "react-router-dom"
import WhatsappImage from '../../assets/Whatsapp2.svg';

const WhatsApp = ({mensaje}) => {

  const telefono = '5491155746175'

  const whatsAppUrl = `https://wa.me/${telefono}?text=Hola%20Living%20Charly%20te%20contacto%20por%20${mensaje}`;

  return (
    <div className="whatsapp">
      <Link to={`${whatsAppUrl}`}  target="_blank">
        <img src={WhatsappImage} width="80" height="80" loading="lazy" alt="Whatsapp" />
         
      </Link>
  </div>
  
)
}
export default WhatsApp
