import { Link } from "react-router-dom";

const CategoryCard = ({ value, label, picture }) => {

  const baseUrl = 'https://living.eproweb.net/products/'

  return (
    
      <div className="card-destacados">
        <Link to={`/catalogo/#${value}`}>
          <div
            className="destacado-img"
            style={{
              backgroundImage: `url(${baseUrl + picture})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="card-data" style={{ alignItems: "flex-end", paddingRight: "35px"}}>

            <h2>{label}</h2>
          </div>
        </Link>
      </div>
 
  );
};

export default CategoryCard;
