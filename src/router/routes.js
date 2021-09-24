import OpenLayout from "layouts/Open/Index.vue";
import Login from "src/pages/Auth/Login/Login.vue";
import SignUp from "src/pages/Auth/SignUp/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "front",
    component: OpenLayout,
    children: [
      { path: "login", component: Login, name: "login" },
      { path: "register", component: SignUp, name: "signup" },
    ],
  },
  {
    path: "/intern",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "internhome",
      },
      { path: "museums", component: () => import("pages/Museum/Index.vue") },
      {
        path: "museums/:id",
        component: () => import("pages/Museum/MuseumItem/MuseumInfo.vue"),
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
