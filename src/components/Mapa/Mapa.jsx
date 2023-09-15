import React from "react";

export const Mapa = () => {
  return (
    <div className="container-fluid">
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13403.006713836174!2d-68.835718!3d-32.878289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08e0676d2375%3A0x4b496d47b853c6fe!2sLiving%20Charly!5e0!3m2!1ses-419!2sar!4v1694814126970!5m2!1ses-419!2sar"
          style={{ width: "100%", height: "450px" }}
        ></iframe>
      </div>
    </div>
  );
};
