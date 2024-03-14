import MediaCard from "@/components/card/card";
import Project from "@/model/Project";
import { SelectedPage } from "@/shared/types";
// import { useState } from "react";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

interface ProjectProps {
  projects: Project[] | undefined;
  setSelectedPage: (value: SelectedPage) => void;
}

const ProjectList: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="mx-auto my-10 min-h-full w-5/6 py-20 flex flex-row justify-center items-center"
    >
      <div className="flex justify-around">
        {projects &&
          projects.map((project) => (
            <MediaCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectList;

// export default function ProjectList({  }: Props) {
// }
