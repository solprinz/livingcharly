import Titles from "../Titles/Titles";
import StarRating from "../StarRating/StarRating";

export const Testimonials = () => {
  return (
    <div data-section className="container back-neutral">
      <Titles title={"Qué dicen nuestros clientes"} subtitle={"TESTIMONIOS"} />

      <div
        className=" testimonials"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="quote-card">
          <StarRating />
          <div className="testimonial">
            “Muy buena la atención y productos de muy buena calidad.“
          </div>
          <div className="nombre">Lorena L</div>
        </div>

        <div className="quote-card">
          <StarRating />
          <div className="testimonial">
            “Realmente excelentes productos y calidad! Carlos y Sandra una
            atención increíble, encontramos, gracias a ellos lo que estábamos
            buscando!! super recomendables, estamos muy contentos con la compra,
            en cualquier momento regresamos sin dudarlo!”
          </div>
          <div className="nombre">Jorge Y</div>
        </div>
        <div className="quote-card">
          <StarRating />
          <div className="testimonial">
            “Hermosa atención de Camila. Muy positivo: es un emprendimiento
            familiar y se nota, pues la atención es muy cálida. Sandra y Charly
            no nos atendieron sino su hija Camila, que además de mostrarnos todo
            lo que había en el salón, nos llevó a la fábrica a 1 cuadra y media
            a ver otros colores para el modelo que nos gustaba.“
          </div>
          <div className="nombre">Tucu</div>
        </div>
      </div>
    </div>
  );
};
