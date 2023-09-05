import { Contacto } from "../components/pages/contacto/Contacto";
import { Faq } from "../components/pages/faq/Faq";
import { Home } from "../components/pages/home/Home";
import { Nosotros } from "../components/pages/nosotros/Nosotros";
import { ProductDetail } from "../components/productDetail/ProductDetail";
import { ProductList } from "../components/productList/ProductList";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  /*   {
    id: "catalogo",
    path: "/catalogo",
    Element: ProductList,
  }, */
  {
    id: "catalogo",
    path: "/catalogo",
    Element: ProductList,
  },
  {
    id: "productDetail",
    path: "/producto/:urlString",
    Element: ProductDetail,
  },
  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "faq",
<<<<<<< HEAD
    path: "/faq",
=======
    path: "/preguntas-frecuentes",
>>>>>>> a597e44980e9642befce661a19ec99ecb8aeb128
    Element: Faq,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },
];
