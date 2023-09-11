import { Formulario } from "../../Formulario/Formulario";
import Titles from "../../Titles/Titles";
import WhatsApp from "../../WhatsApp/WhatsApp";
import { DataContacto } from "../../dataContacto/DataContacto";
import { useEffect } from 'react'

export const Contacto = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Titles title={"Dejanos tu mensaje"} subtitle={"CONTACTO"} />
      <div className="content">
        <div className="left-side " style={{ width: "504px", marginTop: 0 }}>
          <DataContacto />
        </div>
        <div className="right-side " style={{ marginBottom: "40px" }}>
          <Formulario />
        </div>
        <WhatsApp mensaje={""} />
      </div>
    </div>
  );
};
