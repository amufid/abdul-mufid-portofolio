import { backend, frontend, tools } from "../data";
import AnimatedSide from "../lib/AnimatedSide";

export default function SkillsSection() {
  return (
    <section id="Skills">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold mb-3 text-center pb-5 dark:text-slate-200">
          Skills
        </h1>
        <div className="flex flex-col sm:px-10 md:px-10 xl:px-52 mx-auto">
          <AnimatedSide from="left">
            <h2 className="font-bold text-center text-xl dark:text-slate-200">
              Frontend
            </h2>
            <div className="flex flex-wrap sm:flex-row justify-center my-3">
              {frontend.map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-between mx-2 w-20 sm:w-20 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-110 transition delay-100"
                >
                  <img src={item.image} alt={item.name} />
                  <p className="text-center dark:text-slate-200 text-sm">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSide>

          <AnimatedSide from="right">
            <h2 className="font-bold text-center text-xl dark:text-slate-200">
              Backend
            </h2>
            <div className="flex flex-wrap sm:flex-row justify-center my-3">
              {backend.map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-between mx-2 w-20 sm:w-20 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-110 transition delay-100"
                >
                  <img src={item.image} alt={item.name} />
                  <p className="text-center dark:text-slate-200 text-sm">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSide>

          <AnimatedSide from="left">
            <h2 className="font-bold text-center text-xl dark:text-slate-200">
              Programming language and tools
            </h2>
            <div className="flex flex-wrap sm:flex-row justify-center my-3">
              {tools.map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-between mx-2 w-20 sm:w-20 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-110 transition delay-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-md"
                  />
                  <p className="text-center dark:text-slate-200 text-sm">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSide>
        </div>
      </div>
    </section>
  );
}
