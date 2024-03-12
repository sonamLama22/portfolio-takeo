import Home from "../pages/Home";
import Project from "../pages/Project";
import ProjectDetail from "../pages/ProjectDetail";
import { routerType } from "../types/router.types";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },
  {
    path: "/project",
    element: <Project />,
    title: "project",
  },
  {
    path: "/projectDetail/:id",
    element: <ProjectDetail />,
    title: "projectDetail",
  },
];

export default pagesData;
