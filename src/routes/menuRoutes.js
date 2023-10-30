import Contact from "../components/pages/Contact/Contact";
import Home from "../components/pages/Home/Home";
import Vehicles from "../components/pages/Vehicles/Vehicles";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "vehicles",
    path: "/vehicles",
    Element: Vehicles,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
  },
];
