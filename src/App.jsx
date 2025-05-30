import { Suspense } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import RoutesPages from "./utils/routers/RoutesPages";
import "./App.css";
import Loader from "./components/common/Loader/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <RoutesPages />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
