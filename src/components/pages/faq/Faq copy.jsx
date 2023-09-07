import { DataContacto } from "../../dataContacto/DataContacto";

import FaqContainer from "./FaqContainer";

export const Faq = () => {
  return (
    <div className="container-fluid" style={{ display: "flex" }}>
      <div className="row">
        <div className="col-md">
          <DataContacto />
        </div>
        <div className="col-md">
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
            answer={"Contamos con fletes de confianza a cargo del cliente."}
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
              "Madera maciza de álamo y cinchas elásticas en estructura. En respaldos utilizamos goma espuma de alta densidad y vellón siliconado para un confort duradero."
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
              "Aplicamos un tratamiento textil impermeabilizante que repele líquidos y suciedad para una mayor durabilidad y facilidad de limpieza."
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
            answer={
              "Para más detalles, visitá nuestras redes o escribinos directamente: Instagram: @livingcharly -Facebook: /LivingCharly-- Whatsapp: +54 261 472-7258"
            }
          />
        </div>
      </div>
    </div>
  );
};
