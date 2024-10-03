import AnimatedComponent from "../lib/AnimatedComponent";
import AnimatedSide from "../lib/AnimatedSide";

export default function AboutSection() {
  return (
    <section id="About">
      <AnimatedComponent>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-5 sm:px-52 min-h-screen py-5 sm:py-20">
          <AnimatedSide from="left">
            <div>
              <img
                src="/images/programmer.png"
                alt="programmer"
                className="w-[400px]"
              />
            </div>
          </AnimatedSide>
          <div className="w-96 sm:w-[500px] text-center sm:text-left mt-5">
            <h1 className="text-3xl font-bold mb-7 dark:text-slate-200">
              About me
            </h1>
            <p className="text-md dark:text-slate-200 text-justify">
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
