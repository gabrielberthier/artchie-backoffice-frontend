import OpenLayout from "layouts/Open/Index.vue";
import Login from "pages/Auth/Login.vue";
import SignUp from "pages/Auth/SignUp.vue";

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
      { path: "", component: () => import("pages/Index.vue") },
      { path: "museums", component: () => import("pages/Museum/Index.vue") },
      {
        path: "museums/:id",
        component: () => import("pages/Museum/MuseumItem/MuseumInfo.vue"),
      },
    ],
    meta: { requiresAuth: true },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
