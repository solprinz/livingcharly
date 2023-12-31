import { useRef } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzd1ufo",
        "template_kh1kiuc",
        form.current,
        "DhfWboagkGjdT1zNO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    mailEnviado();
    handleReset();
  };

  function mailEnviado() {
    Swal.fire({
      title: `Su mensaje ha sido enviado. `,
      icon: "success",
      iconColor: "#f55b1c",
      confirmButtonColor: "#f55b1c",
    });
  }

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemvalues: [{}],
    });
  };
  return (
    <div className="container-fluid">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-container ">
          <div className="row">
            <label className="form-label row">Nombre y Apellido</label>
          </div>
          <div className="row">
            <input
              type="text"
              name="user_name"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-container ">
          <div className="row">
            <label className="form-label row">Email</label>
          </div>
          <div className="row">
            <input
              type="email"
              name="user_email"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-container ">
          <div className="row">
            <label className="form-label row">Mensaje</label>
          </div>
          <div className="row">
            <input
              type="text"
              name="message"
              className="form-input"
              style={{ height: "150px" }}
              required
            />
          </div>
        </div>

        <div
          style={{
            width: "189px",
          }}
        >
          <button
            type="submit"
            value="Enviar Mensaje"
            className="submit-button"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};
