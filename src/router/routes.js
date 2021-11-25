import OpenLayout from "layouts/Open/Index.vue";
import Login from "src/pages/Auth/Login/Login.vue";
import SignUp from "src/pages/Auth/SignUp/SignUp.vue";
import LandingPage from "src/pages/LandingPage/Index.vue";
import MarkerPage from "pages/Marker/MarkerPage";

const routes = [
  {
    path: "/",
    name: "front",
    component: OpenLayout,
    children: [
      {
        path: "",
        component: LandingPage,
        name: "landing",
      },
      {
        path: "login",
        component: Login,
        name: "login",
        meta: {
          cantBeLogged: true,
        },
      },
      {
        path: "register",
        component: SignUp,
        name: "signup",
        meta: {
          cantBeLogged: true,
        },
      },
    ],
  },
  {
    path: "/intern",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Application/Index.vue"),
        name: "internhome",
      },
      {
        path: "museums",
        component: () => import("pages/Museum/Index.vue"),
        name: "MuseumsIndex",
      },
      {
        path: "museums/:id",
        name: "museumInfo",
        component: () => import("pages/Museum/MuseumItem/MuseumInfo.vue"),
      },
      {
        path: "marker/:id",
        name: "markerPage",
        component: MarkerPage,
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
