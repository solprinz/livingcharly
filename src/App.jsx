import "./styles/styles.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { menuRoutes } from "./routes/menuRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {menuRoutes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center" }}>
              <h1>Página no encontrada</h1>
              <Link to="/">Volver atrás</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
