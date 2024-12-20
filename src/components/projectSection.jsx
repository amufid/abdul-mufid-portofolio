import AnimatedComponent from "../lib/AnimatedComponent";
import { projects } from "../data";
import { Button } from "./ui/button";
import { ModalCustom } from "./ui/modal";
import ImageZoom from "./ui/imageZoom";

export default function ProjectSection() {
  return (
    <section id="Projects">
      <div className="flex flex-col items-center justify-center dark:text-slate-200 py-20 px-10">
        <h1 className="text-3xl font-bold pb-10 text-center">Projects</h1>
        <div className="wrapper relative grid sm:flex-col md:grid-cols-2 xl:grid-cols-3 justify-center pb-10 items-center gap-4">
          {projects.map((project, index) => (
            <AnimatedComponent key={index}>
              <div className="card-project rounded-lg w-auto sm:w-[330px] p-3 shadow-xl border border-slate-300 dark:border-slate-600 space-y-4">
                <div className="justify-center flex">
                  <ImageZoom image={project.images[0]} />
                </div>
                <h2 className="text-md font-semibold my-2">{project.title}</h2>
                <p className="text-sm mb-1 h-10">
                  {project.description.split(".")[0]}.
                </p>
                <div className="flex justify-end mb-2">
                  <a href={project.repo} target="_blank">
                    <Button variant="secondary" className="text-sm">
                      Repository
                    </Button>
                  </a>
                  {project.web && (
                    <a href={project.web} target="_blank" className="mr-2">
                      <Button variant="detail" className="text-sm">
                        Visit
                      </Button>
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
