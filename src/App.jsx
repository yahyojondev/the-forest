import { Routes, Route } from "react-router-dom";
import { Routers } from "./static/router";
import Header from "./components/header/Header";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Footer from "./components/footer/Footer";
import Modul from "./components/modul/Modul";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnim from "./components/loading/LoadingAnim";
function App() {
  return (
    <>
      <LoadingAnim />
      <Header />
      <div className="app">
        <Routes>
          {Routers?.map((el) => (
            <Route key={el.id} path={el.path} element={el.element} />
          ))}
          <Route path="/modul" element={<Modul />} />
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
