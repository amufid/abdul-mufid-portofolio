import AnimatedComponent from "../lib/AnimatedComponent";
import AnimatedSide from "../lib/AnimatedSide";

export default function AboutSection() {
  return (
    <section id="About">
      <AnimatedComponent>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:px-5 md:px-10 xl:px-52 py-20">
          <AnimatedSide from="left">
            <div>
              <img
                src="/images/programmer.png"
                alt="programmer"
                className="w-[400px]"
              />
            </div>
          </AnimatedSide>
          <div className="sm:w-auto md:w-[500px] mx-5 text-left mt-5">
            <h1 className="text-3xl font-bold mb-5 dark:text-slate-200">
              About me
            </h1>
            <p className="text-md dark:text-slate-200">
              {`I’m a front-end developer with a passion for creating responsive,
              user-friendly web applications using HTML, CSS, JavaScript,
              Tailwind CSS, and React.js. While my focus is on front-end
              development, I also have experience working on the backend,
              building RESTful APIs with Node.js and Express.js, and managing
              databases like PostgreSQL and MySQL. I'm excited to contribute my
              skills to impactful projects.`}
            </p>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
