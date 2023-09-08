import { Boton } from "../Boton/Boton";

export const Formulario = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col" style={{ width: "560px" }}>
          <div className="row">
            <label className="form-label row">Nombre y apellido</label>
          </div>
          <div className="row">
            <input
              type="text"
              id="nombre"
              placeholder=""
              className="form-input"
            ></input>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <label className="form-label row">Mail</label>
          </div>
          <div className="row">
            <input
              type="email"
              id="nombre"
              placeholder=""
              className="form-input"
            ></input>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <label className="form-label row">Teléfono de contacto</label>
          </div>
          <div className="row">
            <input
              type="text"
              id="nombre"
              placeholder=""
              className="form-input"
            ></input>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <label className="form-label row">Asunto</label>
          </div>
          <div className="row">
            <input
              type="text"
              id="nombre"
              placeholder=""
              className="form-input"
            ></input>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <label className="form-label row">Mensaje</label>
          </div>
          <div className="row">
            <input
              type="text"
              id="nombre"
              placeholder=""
              className="form-input"
              style={{ height: "144px" }}
            ></input>
          </div>
        </div>
        <Boton button={"Enviar Mensaje"} />
      </div>
    </>
  );
};
