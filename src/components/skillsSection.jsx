import AnimatedSide from "../lib/AnimatedSide";

export default function SkillsSection() {
  return (
    <section id="Skills">
      <div className="min-h-screen flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold font-mono mb-3 text-center pb-5 dark:text-slate-200">
          Skills
        </h1>
        <div className="flex flex-col px-10 sm:px-52 justify-center mx-auto">
          <AnimatedSide from="left">
            <h2 className="font-bold text-center font-mono text-xl dark:text-slate-200">
              Backend
            </h2>
            <div className="flex flex-wrap sm:flex-row mx-auto justify-center my-3">
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/nodejs.png" alt="nodejs" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Node.js
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/express.png" alt="express" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Express.js
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/laravel.png" alt="laravel" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Laravel
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/postgresql.png" alt="postgresql" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  PostgreSQL
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/mysql.png" alt="mysql" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  MySQL
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105 justify-between">
                <img
                  src="https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp"
                  alt="mongodb"
                  className="rounded-md mb-3"
                />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  MongoDB
                </p>
              </div>
            </div>
          </AnimatedSide>
          <AnimatedSide from="right">
            <h2 className="font-bold text-center font-mono text-xl dark:text-slate-200">
              Frontend
            </h2>
            <div className="flex flex-wrap sm:flex-row mx-auto justify-center my-3">
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/reactjs.png" alt="reactjs" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  React.js
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/nextjs.png" alt="nextjs" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Next.js
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/vuejs.png" alt="nextjs" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Vue.js
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img
                  src="/images/tailwindcss.png"
                  alt="tailwindcss"
                  className="mb-2"
                />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Tailwind CSS
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/bootstrap.png" alt="bootstrap" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Bootstrap
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img
                  src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                  alt="cakra ui"
                  className="rounded-md"
                />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Cakra UI
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/html.png" alt="html" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  HTML
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img src="/images/css.png" alt="css" />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  CSS
                </p>
              </div>
            </div>
          </AnimatedSide>
          <AnimatedSide from="left">
            <h2 className="font-bold text-center font-mono text-xl dark:text-slate-200">
              Programming language
            </h2>
            <div className="flex flex-wrap sm:flex-row mx-auto justify-center my-3">
              <div className="mx-2 w-20 sm:w-24 mb-5 sm:mb-0 my-5 sm:my-0 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img
                  src="/images/javascript.png"
                  alt="javascript"
                  className="rounded-md"
                />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Javascript
                </p>
              </div>
              <div className="mx-2 w-20 sm:w-24 mb-5 sm:mb-0 my-5 sm:my-0 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                <img
                  src="https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png"
                  alt="javascript"
                  className="rounded-md"
                />
                <p className="text-center font-serif dark:text-slate-200 text-sm">
                  Typescript
                </p>
              </div>
            </div>
          </AnimatedSide>
        </div>
      </div>
    </section>
  );
}
