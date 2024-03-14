//import useMediaQuery from "@/hooks/useMediaQuery";
import homeImage from "@/assets/home.jpg";

function Home() {
  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center ">
        {/* MAIN HEADER */}
        <div>
          {/* Header */}
          <div className="z-10 mt-20 md:basis-3/5">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Welcome
              </span>{" "}
              to my portfolio
            </h1>
          </div>
          <p className="mt-8 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi
            suscipit voluptas quas laborum quisquam voluptate esse optio
            debitis, dolore earum sed amet soluta culpa sapiente. Vel sapiente
            quibusdam commodi.
          </p>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-32 md:justify-end">
          <img alt="home-page-img" src={homeImage}></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
