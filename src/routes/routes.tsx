import Layout from "layout";
import { Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LinearProgress } from "@mui/material";

const Categories = lazy(() => import("pages/categories"));
const ArticlesByCategory = lazy(() => import("pages/articlesByCategory"));
const ArticleDetail = lazy(() => import("pages/articleDetail"));
const TopRated = lazy(() => import("pages/topRated"));
const RecentNews = lazy(() => import("pages/recentNews"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/categories" />,
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<LinearProgress />}>
              <Outlet />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Categories />
          },
          {
            path: ":categoryId",
            element: <ArticlesByCategory />
          }
        ]
      },
      {
        path: "articles",
        element: (
          <Suspense fallback={<LinearProgress />}>
              <Outlet />
          </Suspense>
        ),
        children: [
          {
            path:":articleId",
            element: <ArticleDetail />
          }
        ]
      },
      {
        path: "topRated",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <TopRated />
          </Suspense>
        )
      },
      {
        path: "recentNews",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <RecentNews />
          </Suspense>
        )
      }
    ],
  }
];

export default routes;