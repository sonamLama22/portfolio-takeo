import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ProjectList({ setSelectedPage }: Props) {
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 py-20">
      ProjectList
    </section>
  );
}
