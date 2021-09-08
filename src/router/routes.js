const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue"),
    name: "front",
  },
  {
    path: "/login",
    name: "login",
    children: [{ path: "", component: () => import("pages/Auth/Login.vue") }],
    component: () => import("layouts/Open/Index.vue"),
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
