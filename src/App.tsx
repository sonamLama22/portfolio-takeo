import NavBar from "@/components/navbar/navbar";
import "../index.css";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/pages/home/Home";
import ProjectList from "@/pages/projects/ProjectList";
import Contact from "@/pages/contact/Contact";

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
  return (
    <div className="home bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
      <ProjectList setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
