import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import vectorImage from "../../assets/Vector.svg";
import { SwiperSlide } from "swiper/react";

const OtraCard = ({ url_string, nombre_producto, picture1, medida }) => {

  const baseUrl = 'https://living.eproweb.net/products/'

  return (
    
      <div className="card-destacados">
        <Link to={`/producto/${url_string}`} >
          <div
            className="destacado-img"
            style={{
              backgroundImage: `url(${baseUrl + picture1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="card-data">
            <p className="medidas">
              {medida !== "" ? (
                <span>
                  <img src={vectorImage} alt="medida" />
                  {medida}{" "}
                </span>
              ) : (
                ""
              )}
            </p>

            <h2>{nombre_producto}</h2>
          </div>
        </Link>
      </div>
 
  );
};

export default OtraCard;
