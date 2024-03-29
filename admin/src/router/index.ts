import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../page/index.vue"),
    children: [
      {
        path: "/blog/create",
        name: "BlogCreate",
        component: () => import("../page/blog/BlogCreate.vue"),
      },
      {
        path: "/blog/update/:id",
        name: "BlogUpdate",
        component: () => import("../page/blog/BlogCreate.vue"),
      },
      {
        path: "/blog/tags",
        name: "BlogTags",
        component: () => import("../page/blog/BlogTags.vue"),
      },
      {
        path: "/blog/list",
        name: "BlogList",
        component: () => import("../page/blog/BlogList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
