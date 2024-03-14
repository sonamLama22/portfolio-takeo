import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Contact({ setSelectedPage }: Props) {
  return (
    <section id="contact" className="mx-auto min-h-full w-5/6 py-20">
      Contact
    </section>
  );
}
