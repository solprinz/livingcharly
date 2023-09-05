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
    path: "/category/:categoryName",
    Element: ProductList,
  }, */
  {
    id: "catalogo",
    path: "/catalogo",
    Element: ProductList,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ProductDetail,
  },
  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "faq",
    path: "/faq",
    Element: Faq,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },
];
