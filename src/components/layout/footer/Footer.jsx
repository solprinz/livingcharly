import LogoFull from "/logo-full-vector.png";
import LogoFacebook from "/Logo Facebook.svg";
import LogoIG from "/Logo IG.svg";
import Ubicacion from "../../../assets/Ubicacion.svg";
import Horarios from "../../../assets/Horarios.svg";
import Correo from "../../../assets/Correo.svg";
import Whatsapp from "../../../assets/Whatsapp.svg";
import Telefono from "../../../assets/Telefono.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="footer" style={{ textAlign: "left" }}>
          <div className="row">
            <div style={{ width: "284px" }}>
              <img src={LogoFull}></img>
              <div className="data-title">¡Seguinos!</div>

              <div>
                <a href="https://wwww.facebook.com/LivingCharly">
                  <img
                    src={LogoFacebook}
                    alt=""
                    style={{ padding: "12px 12px 12px 0px" }}
                  />
                </a>
                <a href="https://www.instagram.com/LivingCharly">
                  <img src={LogoIG} alt="" style={{ padding: "12px" }} />
                </a>
              </div>
            </div>
          </div>

          <div style={{ margin: "0px 8px 0px 8px" }}>
            <div className="data-title">Sucursales</div>
            <div className="data-padding">
              <img src={Ubicacion} style={{ marginRight: "10px" }} />
              Av. San Martín 2123, M5500 Mendoza
            </div>
            <div className="data-padding">
              <img src={Ubicacion} style={{ marginRight: "10px" }} />
              Beltrán 162, M5500 Mendoza
            </div>

            <div className="data-title">Horarios</div>
            <div className="data-padding">
              <img src={Horarios} style={{ marginRight: "10px" }} />
              Lunes a viernes 9 a 16.30 hs
            </div>
            <div className="data-padding">
              <img src={Horarios} style={{ marginRight: "10px" }} />
              Sábados 10 a 13 hs
            </div>
          </div>
          <div>
            <div className="data-title">Catálogo</div>
            <div className="data-padding">
              <a href="/catalogo/#sofa">Sofá</a>
            </div>
            <div className="data-padding">
              <a href="/catalogo/#sofa-cama">Sofá cama</a>
            </div>
            <div className="data-padding">
              <a href="/catalogo/#esquineros">Esquineros</a>
            </div>
            <div className="data-padding">
              <a href="/catalogo/#poltronas">Poltronas</a>
            </div>
          </div>
          <div>
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
              <div>
                <img src={Correo} style={{ marginRight: "10px" }} />
                <a
                  href="mailto:contacto@livingcharly.com?subject=Consulta&body=Hola%20Living%20Charly%2C%20quisiera%20realizarte%20una%20consulta%20sobre%20"
                  className="correo"
                >
                  contacto@livingcharly.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
