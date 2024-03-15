import mailImage from "@/assets/mail.png";
import githubImage from "@/assets/github.png";
import linkedInImage from "@/assets/linked.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 my-10 flex flex-row justify-center items-center"
    >
      <div className="md:flex mx-auto w-5/6 items-center justify-center m-20">
        <div className="flex flex-col ">
          <div className="text-gray-500 text-4xl font-bold">
            Let's Connect and Get to know each other
          </div>
          <div className="mt-5 text-2xl">aashirwad43@gmail.com</div>
          <div className="my-5 text-2xl">Chicago, IL, USA</div>
          <div className="flex size-8">
            <img alt="github" src={githubImage} className="mr-5"></img>
            <img alt="linkedIn" src={linkedInImage}></img>
          </div>
        </div>

        <div
          className="flex basis-1/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="mail-image" src={mailImage} />
        </div>
      </div>
    </section>
  );
}
