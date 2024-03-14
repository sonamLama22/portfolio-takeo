import Home from "../pages/home/Home";
import ProjectDetail from "../pages/details/ProjectDetail";
import { routerType } from "../shared/router.types";
import Contact from "../pages/contact/Contact";
import ProjectList from "../pages/projects/ProjectList";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },
  {
    path: "/projectList",
    element: <ProjectList />,
    title: "projectList",
  },
  {
    path: "/projectDetail/:id",
    element: <ProjectDetail />,
    title: "projectDetail",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "contact",
  },
];

export default pagesData;
