import Titles from "../../Titles/Titles";
import { DataContacto } from "../../dataContacto/DataContacto";
import "../../../styles/styles.scss";

export const Contacto = () => {
  return (
    <div>
      <Titles title={"Dejanos tu mensaje"} subtitle={"CONTACTO"} />
      <div className="content">
        <div className="left-side">
          <DataContacto />
        </div>
        <div className="right-side">
          <p>Hola hola</p>
        </div>
      </div>
    </div>
  );
};
