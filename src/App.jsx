import { Suspense } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import RoutesPages from "./utils/routers/RoutesPages";
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Cargando pagina...</div>}>
        <Header />
        <RoutesPages />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
