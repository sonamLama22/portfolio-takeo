import MediaCard from "@/components/card/card";
import Project from "@/model/Project";

interface ProjectProps {
  projects: Project[] | undefined;
}

const ProjectList: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="gap-16 bg-gray-20 py-10  my-10 min-h-full  flex flex-row justify-center items-center"
    >
      <div className="flex flex-wrap relative items-center justify-center">
        {projects &&
          projects.map((project) => (
            <MediaCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectList;
