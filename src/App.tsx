import NavBar from "@/components/navbar/navbar";
import "../index.css";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/pages/home/Home";
import ProjectList from "@/pages/projects/ProjectList";
import Contact from "@/pages/contact/Contact";
import Project from "./model/Project";
import { useAppSelector } from "./redux/hooks/hooks";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //remove when we leave the page
  }, []);

  const getProjectList = useAppSelector((state) => state.project.projectList);

  const [projectListData, setProjectListData] = useState<Project[]>();

  useEffect(() => {
    setProjectListData(getProjectList);
  }, [getProjectList]);

  return (
    <div className="home bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
      <ProjectList projects={projectListData} />
      <Contact />
    </div>
  );
}

export default App;
