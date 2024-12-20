import { useState } from "react";
import TypeEffect from "../lib/TypeEffect";
import AnimatedComponent from "../lib/AnimatedComponent";
import { Button } from "./ui/button";

export default function CoverSection() {
  const [showText, setShowText] = useState(true);

  setTimeout(() => {
    setShowText(false);
  }, 2000);

  return (
    <section id="Home">
      <div className="bg-center dark:bg-bg-image bg-cover h-screen w-full flex py-7 items-center">
        <div className="flex flex-col-reverse sm:flex-row h-[600px] w-full justify-center items-center">
          <div className="flex flex-col sm:pr-0 md:pr-28 xl:pr-80 dark:text-slate-200">
            <AnimatedComponent>
              <div className="pt-16 md:pt-0 xl:pt-0">
                <div className="flex flex-row">
                  <h1 className="text-3xl font-bold mb-3 mr-3">Hi Everyone</h1>
                  <p className="shake text-3xl">👋</p>
                </div>
                <p className="text-3xl mb-3">
                  <TypeEffect text="I'm Abdul Mufid" speed={130} />
                </p>
                {showText ? (
                  ""
                ) : (
                  <p className="text-3xl mb-3">
                    <TypeEffect text="Frontend Developer" speed={130} />
                    <span className="flash">|</span>
                  </p>
                )}
              </div>
            </AnimatedComponent>
            {!showText && (
              <AnimatedComponent>
                <div className="flex flex-row items-center">
                  <div>
                    <a href="https://wa.link/vjqy4t" target="_blank">
                      <Button
                        variant="secondary"
                        className="hover:bg-gradient-to-r from-emerald-400  to-emerald-600 background-animate flex flex-row mr-3 btn-shadow-emerald"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                        Contact me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1DbOzXnrwd7Api1vMjtMEnozNiVdE503V/view?usp=sharing"
                      target="_blank"
                    >
                      <Button>Download CV</Button>
                    </a>
                  </div>
                </div>
              </AnimatedComponent>
            )}
          </div>
          <AnimatedComponent>
            <div className="bounce rounded-full border-4 hover:border-0 border-sky-600 dark:border-sky-700 transition-all duration-300">
              <img
                className="photo-profile w-60 h-60 md:w-[300px] xl:w-[300px] md:h-[300px] xl:h-[300px] rounded-full object-cover filter grayscale transition-all duration-300 hover:filter-none"
                src="/images/saya.png"
                alt="me"
              />
            </div>
          </AnimatedComponent>
        </div>
      </div>
      <div
        className="w-full h-[5rem] absolute top-0 hidden dark:flex"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(10, 10, 10, 0))",
        }}
      ></div>
      <div
        className="w-full h-16 absolute -bottom-1 hidden dark:flex"
        style={{
          background:
            "linear-gradient(to top, rgb(10,10,10), rgba(0, 0, 0, 0))",
        }}
      ></div>
    </section>
  );
}
