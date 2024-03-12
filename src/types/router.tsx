import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import routeData from "../router/routeData";

const Router = () => {
  const pageRoutes = routeData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
