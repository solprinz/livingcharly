import { useState, useEffect } from "react";
import Titles from "../Titles/Titles";
import CategoryList from "../CategoryList/CategoryList";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Loader from "../Loader/Loader";
import { pedirCategorias } from "../../helpers/pedirCategorias";
import CtaPicture from "../CtaPicture/CtaPicture";

export const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);

  const [categorias, setCategorias] = useState([]);

  pedirCategorias()
    .then((res) => {
      setCategorias(res);
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));

  return (
    <div>
      <Titles title={"Conocé nuestros productos"} subtitle={"CATÁLOGO"} />
      <div className="content">
        <div className="left-side">
          <CategoryList />
        </div>
        <div className="right-side">
          {loading ? (
            <Loader />
          ) : (
            categorias.map((cat) => (
              <CategoryProducts key={cat.value} {...cat} />
            ))
          )}
        </div>
      </div>

      <CtaPicture mensaje={"la página de muebles personalizados"} />
    </div>
  );
};
