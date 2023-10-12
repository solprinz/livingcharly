import Titles from "../Titles/Titles";
import { useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { pedirCategorias } from "../../helpers/pedirCategorias";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import RightImage from "../../assets/Right.svg";

const CategoryContainer = () => {
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState([]);

  pedirCategorias()
    .then((res) => {
      setCategories(res);
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));

  return (
    <div data-section className="container">
      <Titles title={"Ver por Categoría"} subtitle={"CATÁLOGO"} />
      <div
        className="content"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {loading ? (
          <Loader />
        ) : (
          categories.map((cat) => <CategoryCard key={cat.value} {...cat} />)
        )}
      </div>
      <div className="link-catalogo">
        <Link to={`/catalogo/`}>
          Ver Catálogo
          <img src={RightImage} alt="Catálogo" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default CategoryContainer;
