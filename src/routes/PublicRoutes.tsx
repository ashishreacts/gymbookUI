import { AuthRoutes } from "@/features/auth";
import { Landing } from "@/features/misc";
import { RouteObject } from "react-router-dom";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
