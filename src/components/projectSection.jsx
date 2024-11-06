// import { useState } from "react";
// import { truncateText } from "../lib/TruncateText";
import AnimatedComponent from "../lib/AnimatedComponent";
import { projects } from "../data";
import { Button } from "./ui/button";
import { ModalCustom } from "./ui/modal";

export default function ProjectSection() {
  // const [showTextArray, setShowTextArray] = useState(
  //   // Inisialisasi array
  //   Array(projects.length).fill(false)
  // );
  // const [showModal, setShowModal] = useState(false);

  // const handleShowText = (index) => {
  //   setShowTextArray((prev) => {
  //     const newShowTextArray = [...prev];
  //     // Toggle state hanya untuk card yang sesuai
  //     newShowTextArray[index] = !newShowTextArray[index];
  //     return newShowTextArray;
  //   });
  // };

  return (
    <section id="Projects">
      <div className="flex flex-col items-center justify-center dark:text-slate-200 py-20 px-10">
        <h1 className="text-3xl font-bold pb-10 text-center">Projects</h1>
        <div className="grid sm:flex-col md:grid-cols-2 xl:grid-cols-3 justify-center pb-10 items-center gap-4">
          {projects.map((project, index) => (
            <AnimatedComponent key={index}>
              <div className="rounded-md w-auto sm:w-[330px] p-3 shadow-xl border border-slate-300 dark:border-slate-600 ">
                <div className="justify-center flex">
                  <img
                    src={project.images[0]}
                    alt={project.images[0]}
                    className="h-48"
                  />
                </div>
                <h2 className="text-md font-semibold my-2">{project.title}</h2>
                <p className="text-sm mb-1 h-10">
                  {/* <p className="text-sm mb-1 h-12 overflow-y-auto">
                  {truncateText(project.description, showTextArray[index])}
                  {project.description.length > 100 && (
                    <span
                      className="cursor-pointer text-blue-500"
                      onClick={() => handleShowText(index)}
                    >
                      {showTextArray[index] ? " Show less" : "Show more"}
                    </span>
                  )} */}
                  {project.description.split(".")[0]}.
                </p>
                <div className="flex justify-end mb-2">
                  <a href={project.repo} target="_blank">
                    <Button variant="secondary">Repository</Button>
                  </a>
                  {project.web && (
                    <a href={project.web} target="_blank" className="mr-2">
                      <Button variant="primary">Visit</Button>
                    </a>
                  )}
                  <ModalCustom project={project} />
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
