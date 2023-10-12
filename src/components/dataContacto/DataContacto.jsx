import "../../styles/styles.scss";
import LogoFacebook from "/Logo Facebook.svg";
import LogoIG from "/Logo IG.svg";
import Ubicacion from "../../assets/Ubicacion.svg";
import Horarios from "../../assets/Horarios.svg";
import Correo from "../../assets/Correo.svg";
import Whatsapp from "../../assets/Whatsapp.svg";
import Telefono from "../../assets/Telefono.svg";

export const DataContacto = () => {
  return (
    <>
      <div className="data-contacto">
        <div>
          <div className="data-title">Sucursales</div>
          <div className="data-padding">
            <img src={Ubicacion} style={{ marginRight: "10px" }} />
            Av. San Martín 2123, Ciudad de Mendoza
          </div>
          <div className="data-padding">
            <img src={Ubicacion} style={{ marginRight: "10px" }} />
            Beltrán 162, Ciudad de Mendoza
          </div>

          <div className="data-title">Horarios</div>
          <div className="data-padding">
            <img src={Horarios} style={{ marginRight: "10px" }} />
            Lunes a viernes 9 a 16.30 hs
          </div>
          <div className="data-padding">
            <img src={Horarios} style={{ marginRight: "10px" }} />
            Sábados 9 a 13 hs
          </div>
        </div>

        <div>
          <div className="data-title">Contacto</div>
          <div className="data-padding">
            <img src={Telefono} style={{ marginRight: "10px" }} />
            0261 425-0395
          </div>
          <div className="data-padding">
            <img src={Whatsapp} style={{ marginRight: "10px" }} />
            +54 9 2614 72-7258
          </div>
          <div className="data-padding">
            <img src={Correo} style={{ marginRight: "10px" }} />
            <a
              href="mailto:livingcharly@gmail.com?subject=Consulta&body=Hola%20Living%20Charly%2C%20quisiera%20realizarte%20una%20consulta%20sobre%20"
              className="correo "
            >
              livingcharly@gmail.com
            </a>
          </div>
        </div>
        <div>
          <div className="data-title">Nuestras redes</div>

          <div>
            <a href="https://www.facebook.com/LivingCharly">
              <img
                src={LogoFacebook}
                alt="Facebook"
                style={{ padding: "12px 12px 12px 0px" }}
              />
            </a>
            <a href="https://www.instagram.com/LivingCharly">
              <img src={LogoIG} alt="Instagram" style={{ padding: "12px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
