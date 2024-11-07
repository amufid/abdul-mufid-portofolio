import AnimatedComponent from "../lib/AnimatedComponent";

export default function AboutSection() {
  return (
    <section id="About">
      <AnimatedComponent>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:px-5 md:px-10 xl:px-60 py-20">
          <div>
            <img
              src="/images/programmer.png"
              alt="programmer"
              className="w-[350px]"
            />
          </div>
          <div className="sm:w-auto md:w-[500px] mx-5 text-left mt-5">
            <h1 className="text-3xl font-bold mb-5 dark:text-slate-200">
              About me
            </h1>
            <p className="text-md dark:text-slate-200">
              {`I'm a Frontend Developer passionate about creating responsive and engaging web experiences. Proficient in HTML, CSS, JavaScript,
               Tailwind CSS, and some frontend frameworks, I'm committed to building intuitive and modern user interfaces. I'm always looking for 
               ways to enhance my frontend skills to add more value to every project I work on.`}
            </p>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
