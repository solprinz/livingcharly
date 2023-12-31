import { DataContacto } from "../../dataContacto/DataContacto";
import Titles from "../../Titles/Titles";
import FaqContainer from "./FaqContainer";
import WhatsApp from "../../WhatsApp/WhatsApp";
import { RespuestaRedes } from "./RespuestaRedes";
import { useEffect } from "react";

export const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Titles title={"Información útil"} subtitle={"PREGUNTAS FRECUENTES"} />
      <div className="content">
        <div className="left-side" style={{ width: "40%" }}>
          <DataContacto />
        </div>
        <div className="right-side" style={{ marginBottom: "100px" }}>
          <FaqContainer
            category={"General"}
            question={"¿Cuáles son las formas de pago?"}
            answer={
              'Aceptamos efectivo, transferencia y tarjetas de débito y crédito bancarizada con planes "AHORA" de 3, 6 o 12 cuotas.'
            }
          />
          <FaqContainer
            question={"¿Cuentan con stock disponible para entrega inmediata?"}
            answer={"Sí, tenemos stock listo para entrega."}
          />
          <FaqContainer
            question={"¿Cómo realizan los traslados?"}
            answer={"Contamos con fletes de confianza."}
          />
          <FaqContainer
            question={"¿Cómo es la cobertura de la garantía?"}
            answer={
              "Todos nuestros sillones cuentan con 4 años de garantía en la estructura de madera y costuras."
            }
          />
          <FaqContainer
            question={"¿Cuentan con venta mayorista?"}
            answer={
              "Sí, contactanos por email a livingcharly@gmail.com para opciones mayoristas."
            }
          />
          <FaqContainer
            category={"Fabricación"}
            question={"¿Son fabricantes?"}
            answer={
              "Sí, somos fabricantes con más de 20 años de experiencia. Personalizamos tus sillones en medidas, tela, color y más."
            }
          />
          <FaqContainer
            question={"¿Qué materiales usan?"}
            answer={
              "Madera maciza de álamo y cinchas elásticas en estructura. En respaldos utilizamos goma espuma de alta densidad y vellón siliconado para un confort duradero. Algunas de nuestras líneas están fabricadas con resortes zigzag."
            }
          />
          <FaqContainer
            question={"¿Fabrican en otras medidas a pedido?"}
            answer={
              "Sí, fabricamos nuestros modelos en otras medidas según tus necesidades."
            }
          />
          <FaqContainer
            category={"Telas"}
            question={"¿Qué tipos de telas ofrecen?"}
            answer={
              "Ofrecemos chenilles, linos, panas anti-manchas y cuero ecológico, todos de primera calidad."
            }
          />
          <FaqContainer
            question={"¿Qué es el proceso antimanchas?"}
            answer={
              "Es un tratamiento textil que repele líquidos y suciedad para un mayor durabilidad y facilidad de limpieza."
            }
          />
          <FaqContainer
            question={"¿Cómo quitar las manchas"}
            answer={
              "Lo ideal es actuar rápido y absorberlas con un paño seco. Limpiá la zona con agua o productos aptos para tapizados. No recomendamos lavar en lavarropas."
            }
          />
          <FaqContainer
            question={"¿Hay demora en caso de elegir una tela?"}
            answer={
              "La fabricación puede llevar de 15 a 25 días según la tela elegida."
            }
          />
          <FaqContainer
            category={"Contacto y redes sociales"}
            question={"¿Dónde nos encontramos en redes sociales?"}
            answer={<RespuestaRedes />}
          />
        </div>
        <WhatsApp mensaje={""} />
      </div>
    </div>
  );
};
