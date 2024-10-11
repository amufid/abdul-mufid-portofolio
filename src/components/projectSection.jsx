import { useState } from "react";
import AnimatedComponent from "../lib/AnimatedComponent";
import { truncateText } from "../lib/TruncateText";
import { projects } from "../projects";

export default function ProjectSection() {
  const [showTextArray, setShowTextArray] = useState(
    Array(projects.length).fill(false)
  ); // Inisialisasi array

  const handleShowText = (index) => {
    setShowTextArray((prev) => {
      const newShowTextArray = [...prev];
      // Toggle state hanya untuk card yang sesuai
      newShowTextArray[index] = !newShowTextArray[index];
      return newShowTextArray;
    });
  };

  return (
    <section id="Projects">
      <div className="flex flex-col items-center justify-center dark:text-slate-200 py-20">
        <h1 className="text-3xl font-bold pb-10 text-center">Projects</h1>
        <div className="grid sm:flex-col md:grid-cols-3 xl:grid-cols-4 justify-center pb-10 items-center">
          {projects.map((project, index) => (
            <AnimatedComponent key={index}>
              <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl border border-slate-300 dark:border-slate-600 hover:scale-105">
                <div className="justify-center flex">
                  <img src={project.image} alt="contoh" className="h-48" />
                </div>
                <h2 className="text-md font-semibold mt-2  mb-2">
                  {project.title}
                </h2>
                <p className="text-sm mb-1 h-16 overflow-y-auto">
                  {truncateText(project.description, showTextArray[index])}
                  {project.description.length > 125 && (
                    <span
                      className="cursor-pointer text-blue-500"
                      onClick={() => handleShowText(index)}
                    >
                      {showTextArray[index] ? " Show less" : "Show more"}
                    </span>
                  )}
                </p>
                <div className="flex justify-end mt-4">
                  <a href={project.repo} target="_blank">
                    <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                      Repository
                    </button>
                  </a>
                  <a href={project.web} target="_blank">
                    <button
                      className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full"
                      disabled={!project.web}
                    >
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
