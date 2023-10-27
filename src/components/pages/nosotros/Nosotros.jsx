import Titles from "../../Titles/Titles";
import FachadaImage from "../../../assets/fachada.png";
import TapizadoImage from "../../../assets/tapizado.jpg";
import CosturaImage from "../../../assets/costura.jpg";
import WhatsApp from "../../WhatsApp/WhatsApp";
import CategoryContainer from "../../CategoryContainer/CategoryContainer";
import useMobile from "../../../hooks/useMobile";
import TitlesMobile from "../../TitlesMobile/TitlesMobile";
import NosotrosImage from "../../../assets/NosotrosMobile.png";
import { useEffect } from "react";

export const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile = useMobile();

  return (
    <div>
      {isMobile ? (
        <TitlesMobile
          title={"Tres décadas de experiencia y calidad"}
          subtitle={"SOBRE NOSOTROS"}
          image={NosotrosImage}
        />
      ) : (
        <Titles
          title={"Tres décadas de experiencia y calidad"}
          subtitle={"SOBRE NOSOTROS"}
        />
      )}

      <div className="container-fluid">
        <div className="nosotros-image-left">
          <div className="img-container">
            <img
              src={FachadaImage}
              alt="Tres décadas de experiencia"
              width="592"
              height="456"
            />
          </div>
          <div className="info-container">
            <h2>En 1988</h2>
            <p>
              Carlos Giménez estableció "Compra y Venta Charly", una modesta
              empresa dedicada a la venta de muebles antiguos. La historia tomó
              un giro en 2001 cuando, enfrentando una crisis económica nacional,
              Carlos apostó valientemente por la fabricación y dio vida a
              "Living Charly".
              <br />
              El camino no fue fácil, en 2006 un incendio arrasó con nuestra
              fábrica, obligándonos a comenzar de nuevo. Sin embargo, gracias a
              la ayuda de cercanos y a la determinación de Carlos y su familia,
              prevalecimos sobre los desafíos, manteniendo su legado en el mundo
              de los muebles y la decoración.
            </p>
          </div>
        </div>

        <div className="nosotros">
          <h2>Lo logramos con:</h2>
          <div className="nosotros-logramos">
            <div className="logramos-left">
              <div className="logramos-info">
                <h4>Calidad</h4>
                <p>
                  Nos comprometemos a ofrecer productos de calidad excepcional
                  que cumplan con las expectativas y necesidades de nuestros
                  clientes.
                </p>
              </div>
              <div className="logramos-info">
                <h4>Servicio al cliente</h4>
                <p>
                  Nos enfocamos en brindar una atención al cliente excepcional,
                  asegurándonos de que cada interacción sea satisfactoria y
                  memorable.
                </p>
              </div>
            </div>

            <div className="logramos-right">
              <div className="logramos-info">
                <h4>Experiencia</h4>
                <p>
                  Valoramos la tradición familiar, aprovechando el conocimiento
                  y la destreza de nuestro equipo de trabajadores
                  especializados.
                </p>
              </div>
              <div className="logramos-info">
                <h4>Ambiente hogareño</h4>
                <p>
                  Valoramos la creación de espacios hogareños y nos esforzamos
                  por ofrecer productos que aporten comodidad y estilo a los
                  hogares.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="nosotros-image-right">
          <div className="info-container">
            <h2>Nuestra fábrica</h2>
            <p>
              <br />
              ¡Te damos la bienvenida a nuestro rincón de creación en la Calle
              Beltrán 162, en la Ciudad de Mendoza! <br /> <br />
              En este lugar especial, nos apasiona crear y dar vida a las
              estructuras y tapicerías más sorprendentes para superar tus
              expectativas.
              <br />
              <br />
              Nos encanta compartir nuestra pasión y permitirte ser parte de
              nuestro mundo creativo. Visitanos cuando quieras para descubrir la
              magia que ocurre en nuestra fábrica.
            </p>
          </div>
          <div className="img-container">
            <img
              src={CosturaImage}
              alt="Tres décadas de experiencia"
              width="500"
              height="456"
              className="primera-img"
            />
          </div>
        </div>

        <div className="nosotros-image-left back-neutral">
          <div className="img-container">
            <img
              src={TapizadoImage}
              alt="Tres décadas de experiencia"
              width="592"
              height="456"
            />
          </div>
          <div className="info-container">
            <h2>¿Sabías qué...</h2>
            <p>
              También tenemos un espacio especialmente diseñado para vos? <br />{" "}
              <br /> En el frente de nuestra área de producción, hemos creado un
              acogedor rincón de venta al público y podrás acercarte y ser
              testigo de nuestro proceso productivo de primera mano.
              <br /> <br />
              ¡Te esperamos con los brazos abiertos!
            </p>
          </div>
        </div>

        <CategoryContainer />
      </div>
      <WhatsApp mensaje={""} />
    </div>
  );
};
