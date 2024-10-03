import AnimatedComponent from "../lib/AnimatedComponent";

export default function ProjectSection() {
  return (
    <section id="Projects">
      <div className="min-h-screen flex flex-col items-center justify-center dark:text-slate-200">
        <h1 className="text-3xl font-bold font-mono pb-20 text-center">
          Projects
        </h1>

        <div className="grid flex-col sm:grid-cols-4 justify-center pb-10 items-center">
          <AnimatedComponent>
            <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl hover:scale-105 border border-slate-500">
              <div className="justify-center flex">
                <img
                  src="/images/online-shop.png"
                  alt="contoh"
                  className="h-48"
                />
              </div>
              <h2 className="text-md font-bold mt-2 mb-2">Online Shop</h2>
              <p className="text-sm mb-1">
                With Javascript, Express.js, PostgreSQL and Next.js. This online
                shop website is intended to provide all baby needs.
              </p>
              <div className="flex justify-end mt-4">
                <a href="https://github.com/groupfswd" target="_blank">
                  <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                    Repository
                  </button>
                </a>
                {/* <a href=""> */}
                <button className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full">
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </AnimatedComponent>

          <AnimatedComponent>
            <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl border border-slate-500 hover:scale-105">
              <a
                href="https://youtu.be/xPO_6Bx20wk?si=iFcnhg57CtZPrxzc"
                target="_blank"
              >
                <div className="justify-center flex relative group">
                  <img
                    src="/images/web-note.png"
                    alt="contoh"
                    className="h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 4l10 6-10 6V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <h2 className="text-md font-bold mt-2  mb-2">My Note</h2>
              <p className=" text-sm mb-1">
                With Javascript, Express.js, PostgreSQL and React.js. This
                website makes it easy to record all important things easily.(In
                development)
              </p>
              <div className="flex justify-end mt-4">
                <a
                  href="https://github.com/amufid/server_mynote"
                  target="_blank"
                >
                  <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                    Repository
                  </button>
                </a>
                {/* <a href="#"> */}
                <button className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full">
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </AnimatedComponent>

          <AnimatedComponent>
            <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl border border-slate-500 hover:scale-105">
              <div className="justify-center flex">
                <img src="/images/web-film.png" alt="contoh" className="h-48" />
              </div>
              <h2 className="text-md font-bold mt-2  mb-2">Search Film</h2>
              <p className=" text-sm mb-1">
                With Javascript, React.js and Film API. This website displays
                popular films and can search for film titles.
              </p>
              <div className="flex justify-end mt-4">
                <a
                  href="https://github.com/amufid/movie_reactjs_api.git"
                  target="_blank"
                >
                  <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                    Repository
                  </button>
                </a>
                <a
                  href="https://reactjs-movie-wine.vercel.app/"
                  target="_blank"
                >
                  <button className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </AnimatedComponent>

          <AnimatedComponent>
            <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl border border-slate-500 hover:scale-105">
              <a
                href="https://www.youtube.com/watch?v=BHRqfrj3kyE"
                className="hover:opacity-65"
                target="_blank"
              >
                <div className="justify-center flex relative group">
                  <img
                    src="https://i.ibb.co.com/DkJYrqN/Screenshot-2024-07-13-203338.png"
                    alt="contoh"
                    className="h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 4l10 6-10 6V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <h2 className="text-md font-bold mt-2  mb-2">ChatApp</h2>
              <p className=" text-sm mb-1">
                With Javascript, Express.js, MongoDB and React.js. This is a
                real time web chat with the socket.io library. (In development)
              </p>
              <div className="flex justify-end mt-4">
                <a
                  href="https://github.com/amufid/chat-app-websocket.git"
                  target="_blank"
                >
                  <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                    Repository
                  </button>
                </a>
                {/* <a href="" target='_blank'> */}
                <button className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full">
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </AnimatedComponent>

          <AnimatedComponent>
            <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl border border-slate-500 hover:scale-105">
              <div className="justify-center flex relative group">
                <img
                  src="/images/ss-products.png"
                  alt="contoh"
                  className="h-48 object-cover"
                />
              </div>
              <h2 className="text-md font-bold mt-2  mb-2">
                Product Management
              </h2>
              <p className=" text-sm mb-1">
                With Typescript, Express.js, PostgreSQL and Next.js. This
                website is used to manage warehouse inventory. (In development)
              </p>
              <div className="flex justify-end mt-4">
                <a
                  href="https://github.com/amufid/product-management"
                  target="_blank"
                >
                  <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                    Repository
                  </button>
                </a>
                {/* <a href="" target='_blank'> */}
                <button className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full">
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </AnimatedComponent>

          <AnimatedComponent>
            <div className="rounded-md w-[310px] p-3 mx-2 my-2 shadow-xl border border-slate-500 hover:scale-105">
              <div className="flex justify-center h-48">
                <img
                  src="/images/ecommerce-catalog.png"
                  alt="ecommerce-catalog"
                  height="192px"
                  width="500px"
                />
              </div>
              <h2 className="text-md font-bold mt-2  mb-2">
                Ecommerce Catalog
              </h2>
              <p className=" text-sm mb-1">
                With Vue.js and Vanilla CSS. Landing page displays product
                catalog with color design based on category.
              </p>
              <div className="flex justify-end mt-4">
                <a
                  href="https://github.com/amufid/ecommerce-catalog"
                  target="_blank"
                >
                  <button className="border-2 border-emerald-500 hover:bg-emerald-500 py-2 px-4 rounded-full mr-2">
                    Repository
                  </button>
                </a>
                {/* <a href="" target='_blank'> */}
                <button className="border-2 border-blue-500 hover:bg-blue-500 py-2 px-4 rounded-full">
                  Visit
                </button>
                {/* </a> */}
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}
