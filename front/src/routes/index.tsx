import {Layout, ErrorFallback} from "@/components";
import {RouteObject} from "react-router-dom";
import {Error404} from "@/pages/error_404";
import {Top} from "@/pages/top";
import {TaskPage} from "@/pages/task";

export const AppRoutes: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <Layout />,
        children: [
          {index: true, element: <Top />},
          {path: "/tasks/:id", element: <TaskPage />},
        ],
      },
      {path: "*", element: <Error404 />},
    ],
  },
];
