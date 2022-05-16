import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

/* Páginas del administrador */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signIn";
import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/NotFound/NotFound";

/* Rutas disponibles para el administrador */
const AdminRoutes = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];
const ClientRoutes = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];
const NotFoundRoute = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];
const routes = [...AdminRoutes, ...ClientRoutes, ...NotFoundRoute];
export default routes;