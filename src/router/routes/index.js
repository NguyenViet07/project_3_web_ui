import { lazy } from "react";

// ** Default Route
const DefaultRoute = "/";

// ** Merge Routes
const Routes = [
  {
    path: "/",
    title: "Trang chủ",
    component: lazy(() => import("../../views/Home")),
  },
  {
    path: "/test",
    title: "test",
    component: lazy(() => import("../../views/Test")),
  },
  {
    path: "/error",
    title: "404",
    component: lazy(() => import("../../views/Error/404")),
  },
];

export { DefaultRoute, Routes };
