import { Link } from "react-router-dom";
import RightImage from "../../../assets/Right.svg";
import ChevronImage from "../../../assets/Chevron.svg";
import { BannerInfo } from "../../bannerInfo/BannerInfo";
import EsquineroGold from "../../../../img/Esquinero.jpeg";
import TrabajoImage from "../../../assets/resto.jpg";
import { Testimonials } from "../../Testimonials/Testimonials";
import { Contacto } from "../../pages/contacto/Contacto";
import WhatsApp from "../../WhatsApp/WhatsApp";
import CategoryContainer from "../../CategoryContainer/CategoryContainer";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const telefono = "5492614727258";

  const mensaje = "";

  const whatsAppUrl = `https://wa.me/${telefono}?text=Hola%20Living%20Charly%20te%20contacto%20por%20${mensaje}`;

  return (
    <>
      <div className="container-fluid">
        {/* Hero */}
        <div className="hero">
          <h1>
            Compromiso con la calidad <br /> y el diseño
          </h1>
          <p>
            Desde 1988 creamos piezas únicas y duraderas para que <br /> te
            acompañen en momentos inolvidables.
          </p>
          <Link to={`/catalogo/`} className="btn-cta">
            Ver Catálogo <img src={RightImage} alt="Catálogo" />
          </Link>
        </div>
        {/* Hero */}

        <BannerInfo />

        {/* INFO CTA */}
        <div className="home-image-left ">
          <div className="info-container bg-personalizado">
            <br />

            <h2 style={{ position: "relative" }}>Tu espacio, tu elección</h2>

            <ul>
              <li>
                • Solicitá muebles personalizados a la medida de tus ideas
              </li>
              <li>• Consultá opciones de personalización</li>
              <li>• Verificá stock</li>
              <li>• Recibí asesoramiento personalizado </li>
            </ul>
            <div>
              <p style={{ position: "relative" }}>
                Escribinos a través de WhatsApp o correo electrónico para
                ayudarte a dale vida a tus espacios.
              </p>
            </div>
            <div className="cta" style={{ position: "relative" }}>
              <Link to={`${whatsAppUrl}`} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M0 40C0 62.0915 17.9086 80 40 80C62.0915 80 80 62.0915 80 40C80 17.9086 62.0915 0 40 0C17.9086 0 0 17.9086 0 40Z"
                    fill="#EEE9BB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M54 25.75C50.25 22 45.25 20 40 20C29 20 20 29 20 40C20 43.5 21 47 22.75 50L20 60L30.5 57.25C33.5 58.75 36.75 59.75 40 59.75C51 59.75 60 50.75 60 39.75C60 34.5 57.75 29.5 54 25.75ZM40 56.5C37 56.5 34 55.75 31.5 54.25L31 54L24.75 55.75L26.5 49.75L26 49C24.25 46.25 23.5 43.25 23.5 40.25C23.5 31.25 31 23.75 40 23.75C44.5 23.75 48.5 25.5 51.75 28.5C55 31.75 56.5 35.75 56.5 40.25C56.5 49 49.25 56.5 40 56.5ZM49 44C48.5 43.75 46 42.5 45.5 42.5C45 42.25 44.75 42.25 44.5 42.75C44.25 43.25 43.25 44.25 43 44.75C42.75 45 42.5 45 42 45C41.5 44.75 40 44.25 38 42.5C36.5 41.25 35.5 39.5 35.25 39C35 38.5 35.25 38.25 35.5 38C35.75 37.75 36 37.5 36.25 37.25C36.5 37 36.5 36.75 36.75 36.5C37 36.25 36.75 36 36.75 35.75C36.75 35.5 35.75 33 35.25 32C35 31.25 34.5 31.25 34.25 31.25C34 31.25 33.75 31.25 33.25 31.25C33 31.25 32.5 31.25 32 31.75C31.5 32.25 30.25 33.5 30.25 36C30.25 38.5 32 40.75 32.25 41.25C32.5 41.5 35.75 46.75 40.75 48.75C45 50.5 45.75 50 46.75 50C47.75 50 49.75 48.75 50 47.75C50.5 46.5 50.5 45.5 50.25 45.5C50 44.25 49.5 44.25 49 44Z"
                    fill="#FE9331"
                  />
                </svg>
              </Link>
              <div className="mensaje-whatsapp">
                <h2
                  style={{
                    marginBlockEnd: "0px",
                    fontFamily: "Jost",
                    fontSize: "32px",
                    alignSelf: "stretch",
                  }}
                >
                  +54 261 472-7258
                </h2>
                <p>
                  Mensaje <strong> directo</strong> a nuestro Whatsapp
                </p>
              </div>
            </div>
            {/*  <Link to={`/contacto/`} className="btn-cta-primary">
              Solicitar cotización{" "}
            </Link> */}
          </div>
          <div className="img-cotizacion">
            <img
              src={EsquineroGold}
              alt=""
              width="500"
              height="650"
              className="rounded"
            />
          </div>
        </div>

        {/* INFO CTA */}

        <Testimonials />

        <CategoryContainer />

        <div className="nosotros-image-left back-neutral home-container">
          <div className="img-container">
            <img
              src={TrabajoImage}
              alt="Tres décadas de experiencia"
              width="592"
              height="456"
            />
          </div>
          <div className="info-container">
            <h2>Exclusivos sillones a medida para restaurantes</h2>
            <p>
            Nuestro equipo de artesanos expertos y diseñadores de interiores trabajará contigo de cerca para crear los sillones perfectos que se ajusten a tus necesidades. 
            </p>
            <br />
            <p>Ya sea que desees un ambiente acogedor y cálido o un toque de elegancia contemporánea, cada detalle se personaliza para encajar a la perfección con la estética de tu restaurante.</p>

            <div className="btn-container">
              <Link to={`/nosotros/`} className="btn-cta-primary">
                Nuestra Historia
                <img src={ChevronImage} alt="Catálogo" />
              </Link>
            </div>
          </div>
        </div>

{/*         <div className="nosotros-image-left back-neutral home-container">
          <div className="img-container">
            <img
              src={TrabajoImage}
              alt="Tres décadas de experiencia"
              width="592"
              height="456"
            />
          </div>
          <div className="info-container">
            <h2>Historia y experiencia en cada detalle</h2>
            <p>
              Más que muebles, somos historias y pasión por el diseño. Conoce al
              equipo detrás de Living Charly y nuestra misión de transformar tu
              hogar en un refugio de tradición y confort.
            </p>

            <div className="btn-container">
              <Link to={`/nosotros/`} className="btn-cta-primary">
                Nuestra Historia
                <img src={ChevronImage} alt="Catálogo" />
              </Link>
            </div>
          </div>
        </div> */}

        <Contacto />

        <WhatsApp mensaje={""} />
      </div>
    </>
  );
};
