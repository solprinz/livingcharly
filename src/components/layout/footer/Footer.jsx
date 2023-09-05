import { BannerInfo } from "../../bannerInfo/BannerInfo";
import "../../../styles/styles.scss";

export const Footer = () => {
  return (
    <>
      <BannerInfo />
      <div className="container-fluid">
        <div className="footer " style={{ textAlign: "left" }}>
          <div className="row">
            <div style={{ width: "284px" }}>
              {/* logo, ¡seguinos! */}
              <img src="../../../../img/Variante=Logo Full Vector.png"></img>
              <div
                style={{
                  color: "var(--v-2-txt-body-1, #F6973F)",
                }}
              >
                ¡Seguinos!
              </div>

              <div>
                <a href="https://wwww.facebook.com/">
                  <img
                    src="../../../../img/Logo Facebook.svg"
                    alt=""
                    style={{ padding: "12px 12px 12px 0px" }}
                  />
                </a>
                <a href="https://www.instagram.com">
                  <img
                    src="../../../../img/Logo IG.svg"
                    alt=""
                    style={{ padding: "12px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* sucursales */}
          <div style={{ margin: "0px 8px 0px 8px" }}>
            <div
              style={{
                color: "var(--v-2-txt-body-1, #F6973F)",
                padding: "0px 0px 16px 0px",
                width: "284px",
              }}
            >
              Sucursales
            </div>
            <div style={{ padding: "0px 0px 16px 0px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M8.5 5.8C8.5 7.12548 7.38071 8.2 6 8.2C4.61929 8.2 3.5 7.12548 3.5 5.8C3.5 4.47452 4.61929 3.4 6 3.4C7.38071 3.4 8.5 4.47452 8.5 5.8Z"
                  stroke="#1E1E1E"
                />
                <path
                  d="M11 5.8C11 8.45097 7.25 13 6 13C4.75 13 1 8.45097 1 5.8C1 3.14903 3.23858 1 6 1C8.76142 1 11 3.14903 11 5.8Z"
                  stroke="#1E1E1E"
                />
              </svg>
              Av. San Martín 2123, M5500 Mendoza
            </div>
            <div style={{ padding: "0px 0px 16px 0px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M8.5 5.8C8.5 7.12548 7.38071 8.2 6 8.2C4.61929 8.2 3.5 7.12548 3.5 5.8C3.5 4.47452 4.61929 3.4 6 3.4C7.38071 3.4 8.5 4.47452 8.5 5.8Z"
                  stroke="#1E1E1E"
                />
                <path
                  d="M11 5.8C11 8.45097 7.25 13 6 13C4.75 13 1 8.45097 1 5.8C1 3.14903 3.23858 1 6 1C8.76142 1 11 3.14903 11 5.8Z"
                  stroke="#1E1E1E"
                />
              </svg>
              Beltrán 162, M5500 Mendoza
            </div>
            {/* horarios */}
            <div
              style={{
                color: "var(--v-2-txt-body-1, #F6973F)",
                padding: "0px 0px 16px 0px",
              }}
            >
              Horarios
            </div>
            <div style={{ padding: "0px 0px 16px 0px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M7 4.33333V7.66598C7 7.66624 7.00011 7.6665 7.00029 7.66668L8.33333 9M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
                  stroke="#1E1E1E"
                />
              </svg>
              Lunes a viernes 9 a 16.30 hs
            </div>
            <div style={{ padding: "0px 0px 16px 0px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M7 4.33333V7.66598C7 7.66624 7.00011 7.6665 7.00029 7.66668L8.33333 9M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
                  stroke="#1E1E1E"
                />
              </svg>
              Sábados 10 a 13 hs
            </div>
            {/*  */}
          </div>
          <div /* style={{ padding: "0px 10px" }} */>
            <div
              style={{
                color: "var(--v-2-txt-body-1, #F6973F)",
                padding: "0px 0px 16px 0px",
                width: "284px",
              }}
            >
              Catálogo
            </div>
            <div style={{ padding: "0px 0px 16px 0px" }}>Sofá</div>
            <div style={{ padding: "0px 0px 16px 0px" }}>Sofá cama</div>
            <div style={{ padding: "0px 0px 16px 0px" }}>Esquineros</div>
            <div style={{ padding: "0px 0px 16px 0px" }}>Poltronas</div>
          </div>
          <div>
            <div
              style={{
                color: "var(--v-2-txt-body-1, #F6973F)",
                padding: "0px 0px 16px 0px",
                width: "284px",
              }}
            >
              Contacto
            </div>
            <div
              style={{
                padding: "0px 0px 16px 0px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14 " /*    viewBox="10 3 3 12 " */
                fill="none"
                overflow="visible"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M4.51548 5.06246C4.96438 5.99743 5.57632 6.87371 6.3513 7.6487C7.12629 8.42368 8.00257 9.03562 8.93754 9.48452C9.01796 9.52313 9.05817 9.54244 9.10905 9.55727C9.28987 9.60998 9.51191 9.57212 9.66505 9.46247C9.70814 9.43161 9.745 9.39475 9.81873 9.32102C10.0442 9.09553 10.157 8.98279 10.2703 8.90908C10.6979 8.6311 11.2491 8.6311 11.6766 8.90908C11.79 8.98279 11.9027 9.09553 12.1282 9.32102L12.2539 9.44671C12.5967 9.78947 12.768 9.96085 12.8611 10.1449C13.0463 10.511 13.0463 10.9433 12.8611 11.3093C12.768 11.4934 12.5967 11.6648 12.2539 12.0076L12.1522 12.1092C11.8106 12.4508 11.6398 12.6216 11.4076 12.7521C11.15 12.8968 10.7498 13.0009 10.4542 13C10.1879 12.9992 10.0058 12.9475 9.64179 12.8442C7.68534 12.2889 5.83919 11.2412 4.29901 9.70098C2.75883 8.1608 1.71109 6.31466 1.15579 4.35821C1.05246 3.99415 1.0008 3.81213 1.00001 3.54579C0.999126 3.25025 1.1032 2.85005 1.24794 2.59238C1.37839 2.36017 1.54919 2.18937 1.89078 1.84778L1.99245 1.74611C2.33521 1.40335 2.5066 1.23196 2.69066 1.13886C3.05672 0.953712 3.48902 0.953712 3.85508 1.13886C4.03914 1.23196 4.21053 1.40334 4.55329 1.74611L4.67898 1.8718C4.90447 2.09728 5.01721 2.21002 5.09092 2.3234C5.3689 2.75094 5.3689 3.30212 5.09092 3.72967C5.01721 3.84304 4.90447 3.95578 4.67898 4.18127C4.60525 4.255 4.56839 4.29186 4.53753 4.33495C4.42788 4.48809 4.39002 4.71013 4.44273 4.89095C4.45756 4.94183 4.47687 4.98204 4.51548 5.06246Z"
                  stroke="#1E1E1E"
                />
              </svg>
              0261 425-0395
            </div>
            <div style={{ padding: "0px 0px 16px 0px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M12.5303 4.45246C12.227 3.77869 11.7916 3.17377 11.2388 2.65246C10.686 2.13607 10.0452 1.72787 9.33095 1.44262C8.59227 1.14754 7.80956 1 7.00239 1C6.19523 1 5.41252 1.14754 4.67384 1.44262C3.95962 1.72787 3.31877 2.13115 2.76599 2.65246C2.2132 3.17377 1.77782 3.77869 1.47453 4.45246C1.16144 5.15082 1 5.89836 1 6.66557C1 8.0082 1.49897 9.29672 2.41376 10.3197L1.92457 13L4.52708 11.8344C5.30489 12.1689 6.13163 12.3361 6.9975 12.3361C7.80466 12.3361 8.58738 12.1885 9.32606 11.8934C10.0403 11.6082 10.6811 11.2049 11.2339 10.6836C11.7867 10.1623 12.2221 9.55738 12.5254 8.88361C12.8385 8.18524 12.9999 7.4377 12.9999 6.67049C13.0048 5.89836 12.8433 5.15574 12.5303 4.45246Z"
                  stroke="#1E1E1E"
                />
                <path
                  d="M9.43712 7.79667C9.18274 7.66881 8.99687 7.59012 8.86478 7.54094C8.78162 7.51143 8.58594 7.4229 8.51745 7.477C8.30221 7.65405 8.07228 8.15569 7.82769 8.24913C7.22109 8.1311 6.65852 7.71307 6.21825 7.2852C6.02257 7.09831 5.66057 6.56717 5.5823 6.42454C5.56763 6.277 5.83178 6.08028 5.89048 5.96717C6.19378 5.6229 5.96387 5.40651 5.92474 5.26389C5.85625 5.11635 5.73885 4.85077 5.63612 4.63438C5.54806 4.49176 5.52848 4.28028 5.37193 4.20159C4.70663 3.85733 4.32508 4.54586 4.16854 4.90487C3.2244 7.19176 8.89902 11.5442 10.0535 8.54422C10.1122 8.28356 10.0877 8.1852 9.99969 8.06717C9.82359 7.94422 9.61813 7.89012 9.43712 7.79667Z"
                  stroke="#1E1E1E"
                />
              </svg>
              +54 9 2614 72-7258
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <path
                  d="M1.6 1.8L6.26327 5.42699C6.6966 5.76402 7.3034 5.76402 7.73673 5.42699L12.4 1.8M2.92 10.8H11.08C11.7521 10.8 12.0881 10.8 12.3448 10.6692C12.5706 10.5542 12.7542 10.3706 12.8692 10.1448C13 9.88809 13 9.55206 13 8.88V3.12C13 2.44793 13 2.1119 12.8692 1.85521C12.7542 1.62941 12.5706 1.44584 12.3448 1.33079C12.0881 1.2 11.7521 1.2 11.08 1.2H2.92C2.24794 1.2 1.91191 1.2 1.65521 1.33079C1.42942 1.44584 1.24584 1.62941 1.13079 1.85521C1 2.1119 1 2.44793 1 3.12V8.88C1 9.55206 1 9.88809 1.13079 10.1448C1.24584 10.3706 1.42942 10.5542 1.65521 10.6692C1.91191 10.8 2.24794 10.8 2.92 10.8Z"
                  stroke="#1E1E1E"
                />
              </svg>
              contacto@livingcharly.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
