import Home from "../pages/home/index";
import About from "../pages/about/index";
import Consultation from "../pages/consultation/index";
import Contact from "../pages/contact/index";
import Project from "../pages/project/index";
import Services from "../pages/services/index";

export const Routers = [
  {
    id: 1,
    path: "/",
    title: "Главная",
    element: <Home />,
  },
  {
    id: 2,
    path: "/about",
    title: "О нас",
    element: <About />,
  },
  {
    id: 3,
    path: "/services",
    title: "Услуги",
    element: <Services />,
  },
  {
    id: 4,
    path: "/project",
    title: "Проекты",
    element: <Project />,
  },
  {
    id: 5,
    path: "/consultation",
    title: "Консультация",
    element: <Consultation />,
  },
  {
    id: 6,
    path: "/contact",
    title: "Контакты",
    element: <Contact />,
  },
];
