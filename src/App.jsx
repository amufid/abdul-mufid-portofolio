import { useState } from 'react';
import TypeEffect from './lib/TypeEffect';
import ScrollTop from './lib/ScrollTop';
import AnimatedComponent from './animated/AnimatedComponent';
import { FaCode } from "react-icons/fa6";
import { MdOutlineDensityMedium } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import SwitchTheme from './lib/SwitchTheme';
import AnimationSide from './animated/AnimatedSide'
import AnimatedSide from './animated/AnimatedSide';

function App() {
  const [showText, setShowText] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  setTimeout(() => {
    setShowText(false);
  }, 2000);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='dark:bg-sky-950'>
      <section id="home">
        <nav className="pb-16">
          <div className="flex flex-row bg-sky-500 dark:bg-sky-900 py-5 px-5 sm:px-20 justify-between shadow-md top-0 left-0 right-0 fixed w-full">
            <div>
              <h1 className="mint text-xl font-bold text-sky-950 dark:text-slate-200">Abdul Mufid</h1>
            </div>
            <div className="hidden sm:flex">
              <ul className="flex flex-row gap-5">
                <li>
                  <a
                    href="/#home"
                    className="cursor-pointer text-sky-950 mr-2 text-md dark:text-slate-200 hover:text-sky-200 dark:hover:text-sky-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="cursor-pointer text-sky-950 mr-2 text-md dark:text-slate-200 hover:text-sky-200 dark:hover:text-sky-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#skill"
                    className="cursor-pointer text-sky-950 mr-2 text-md dark:text-slate-200 hover:text-sky-200 dark:hover:text-sky-500"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="/#project"
                    className="cursor-pointer text-sky-950 mr-2 text-md dark:text-slate-200 hover:text-sky-200 dark:hover:text-sky-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="cursor-pointer text-sky-950 mr-2 text-md dark:text-slate-200 hover:text-sky-200 dark:hover:text-sky-500"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <SwitchTheme />
                </li>
              </ul>
            </div>
            {/* mobile mode  */}
            <div className="flex sm:hidden ml-32">
              <SwitchTheme />
            </div>
            <div className="flex sm:hidden dark:text-slate-200">
              <button>
                <a onClick={toggleMenu}>
                  {menuOpen ? <IoMdClose className="w-7 h-7" /> : <MdOutlineDensityMedium className="w-7 h-7" />}
                </a>
              </button>
            </div>
          </div>
          <div className="block sm:hidden text-sky-950 hover:text-sky-200">
            <div id="myLinks" className={`block ${menuOpen ? 'block delay-1000' : 'hidden'} fixed w-full mt-[68px] justify-center flex h-[300px] items-center z-50 right-0 bg-sky-300 dark:bg-sky-800`}>
              <ul>
                <li>
                  <a
                    href="/#cover"
                    className="cursor-pointer mr-2 text-md dark:text-slate-200"
                  >
                    <button className="w-96 h-12 border border-gray-500 mb-2 rounded-md" onClick={toggleMenu}>
                      Home
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="cursor-pointer mr-2 text-md dark:text-slate-200"
                  >
                    <button className="w-96 h-12 border border-gray-500 mb-2 rounded-md" onClick={toggleMenu}>
                      About
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="/#skill"
                    className="cursor-pointer mr-2 text-md dark:text-slate-200"
                  >
                    <button className="w-96 h-12 border border-gray-500 mb-2 rounded-md" onClick={toggleMenu}>
                      Skill
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="/#project"
                    className="cursor-pointer mr-2 text-md dark:text-slate-200"
                  >
                    <button className="w-96 h-12 border border-gray-500 mb-2 rounded-md" onClick={toggleMenu}>
                      Projects
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="cursor-pointer mr-2 text-md dark:text-slate-200"
                  >
                    <button className="w-96 h-12 border border-gray-500 mb-2 rounded-md" onClick={toggleMenu}>
                      Contact
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section id="cover">
        <div className="bg-gradient-to-r from-cyan-400 to-sky-700 dark:from-cyan-900 dark:bg-sky-900 bg-cover bg-center h-screen sm:h-[675px] w-full flex py-7">
          <div className="flex flex-col-reverse sm:flex-row h-[600px] w-full justify-center items-center ">
            <AnimationSide from='left'>
              <div className="flex flex-col pr-0 sm:pr-80 dark:text-slate-200">
                <div className="pb-5 pt-16 sm:pt-10">
                  <h1 className="text-3xl font-bold font-mono mb-3">
                    Hi Everyone 👋
                  </h1>
                  <p className="text-2xl font-mono mb-3">
                    <TypeEffect text="I'm Abdul Mufid" speed={130} />
                  </p>
                  {showText ? '' : (
                    <p className="text-2xl font-mono mb-3">
                      <TypeEffect text="Fullstack Web Developer" speed={130} />
                    </p>
                  )}
                </div>
                <div className='flex flex-row items-center'>
                  <div>
                    <a href="https://wa.link/vjqy4t" target="_blank">
                      <button className="bg-green-600 px-4 py-3 text-sky-100 text-md rounded-md shadow-md hover:bg-green-400 flex flex-row mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                        Contact me
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1EeppI6snzQzLt-hu2tEYMJifn6vj0hvt/view?usp=sharingt" target="_blank">
                      <button className="bg-indigo-600 px-4 py-3 text-sky-100 text-md rounded-md shadow-md hover:bg-indigo-400 flex flex-row">
                        Download CV
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimationSide>
            <AnimationSide from='right'>
              <div className="pt-48 sm:pt-0">
                <img
                  className="h-[320px] rounded-full object-cover border-4 border-sky-500 dark:border-sky-700"
                  src="/images/me2.png" alt="me" />
              </div>
            </AnimationSide>
          </div>
        </div>
      </section>

      <section id="about">
        <AnimatedComponent>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center px-5 sm:px-52 min-h-screen py-5 sm:py-20'>
            <AnimatedSide from='left'>
              <div>
                <img src="/images/programmer.png" alt="programmer" className='w-[400px]' />
              </div>
            </AnimatedSide>
            <div className="w-96 sm:w-[500px] text-center sm:text-left mt-5">
              <h1 className="text-3xl font-bold font-mono mb-7 dark:text-slate-200">About me</h1>
              <p className="text-md font-serif dark:text-slate-200">
                I am Abdul Mufid, a graduate of the National Institute of Technology Malang in 2023.
                I am passionate and enthusiastic about developing web application. I can create a restful API backend
                with Nodejs Expressjs with a Postgresql or My Sql database and create a frontend with
                Nextjs or Reactjs. I have experience creating simple online shop websites, film searches and other websites.
              </p>
            </div>
          </div>
        </AnimatedComponent>
      </section>
      <hr />

      <section id="skill">
        <div className="min-h-screen flex flex-col items-center justify-center py-10">
          <h1 className="text-3xl font-bold font-mono mb-3 text-center pb-5 dark:text-slate-200">
            Skills
          </h1>
          <div className="flex flex-col px-10 sm:px-52 justify-center mx-auto">
            <AnimatedSide from='left'>
              <h2 className="font-bold text-center font-mono text-xl dark:text-slate-200">
                Backend
              </h2>
              <div className="flex flex-wrap sm:flex-row mx-auto justify-center my-3">
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/nodejs.png" alt="nodejs" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">NodeJS</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/express.png" alt="express" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">ExpressJS</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/postgresql.png" alt="postgresql" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">PostgreSQL</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/mysql.png" alt="mysql" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">My SQL</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105 justify-between">
                  <img src="https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp" alt="mongodb" className='rounded-md mb-3' />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">MongoDB</p>
                </div>
              </div>
            </AnimatedSide>
            <AnimatedSide from='right'>
              <h2 className="font-bold text-center font-mono text-xl dark:text-slate-200">
                Frontend
              </h2>
              <div className="flex flex-wrap sm:flex-row mx-auto justify-center my-3">
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/reactjs.png" alt="reactjs" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">ReactJS</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/nextjs.png" alt="nextjs" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">NextJS</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/tailwindcss.png" alt="tailwindcss" className='mb-2' />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">Tailwind CSS</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/bootstrap.png" alt="bootstrap" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">Bootstrap</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="cakra ui" className='rounded-md' />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">Cakra UI</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/html.png" alt="html" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">HTML</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 my-5 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/css.png" alt="css" />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">CSS</p>
                </div>
              </div>
            </AnimatedSide>
            <AnimatedSide from='left'>
              <h2 className="font-bold text-center font-mono text-xl dark:text-slate-200">
                Programming language
              </h2>
              <div className="flex flex-wrap sm:flex-row mx-auto justify-center my-3">
                <div className="mx-2 w-20 sm:w-24 mb-5 sm:mb-0 my-5 sm:my-0 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="/images/javascript.png" alt="javascript" className='rounded-md' />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">Javascript</p>
                </div>
                <div className="mx-2 w-20 sm:w-24 mb-5 sm:mb-0 my-5 sm:my-0 rounded-md p-2 shadow-md hover:shadow-2xl hover:scale-105">
                  <img src="https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png" alt="javascript" className='rounded-md' />
                  <p className="text-center font-serif dark:text-slate-200 text-sm">Typescript</p>
                </div>
              </div>
            </AnimatedSide>
          </div>
        </div>
      </section>
      <hr />

      <section id="project">
        <div className='min-h-screen flex flex-col items-center justify-center py-10'>
          <h1 className="text-3xl font-bold font-mono pb-7 text-center dark:text-slate-200">
            Projects
          </h1>
          <div className="flex flex-col sm:flex-row justify-center pb-10 items-center">
            <AnimatedSide from='left'>
              <div className="border rounded-md w-80 p-3 mx-2 my-2 shadow-lg">
                <div className="justify-center flex">
                  <img src="/images/online-shop.png" alt="contoh" className="h-48" />
                </div>
                <h2 className="text-md font-bold mt-2 dark:text-slate-200 mb-2">Online Shop</h2>
                <p className='dark:text-slate-200 text-sm mb-1'>With NodeJs, PostgreSQL and NextJs</p>
                <p className='dark:text-slate-200 text-sm'>This online shop website is intended to provide all baby needs.</p>
                <div className="flex justify-end mt-4">
                  <a href="https://github.com/groupfswd" target="_blank">
                    <button className="bg-purple-500 hover:bg-purple-400 text-white py-3 px-5 rounded mr-2">
                      <FaCode />
                    </button>
                  </a>
                  {/* <a href=""> */}
                  <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
                    Visit
                  </button>
                  {/* </a> */}
                </div>
              </div>
            </AnimatedSide>
            <AnimatedComponent>
              <div className="border rounded-md w-80 p-3 mx-2 my-2 shadow-lg">
                <div className="justify-center flex">
                  <img src="/images/web-note.png" alt="contoh" className="h-48" />
                </div>
                <h2 className="text-md font-bold mt-2 dark:text-slate-200 mb-2">My Note</h2>
                <p className='dark:text-slate-200 text-sm mb-1'>With NodeJs, PostgreSQL and ReactJs</p>
                <p className='dark:text-slate-200 text-sm'>This website makes it easy to record all important things easily.</p>
                <div className="flex justify-end mt-4">
                  <a href="https://github.com/amufid/server_mynote" target="_blank">
                    <button className="bg-purple-500 hover:bg-purple-400 text-white py-3 px-5 rounded mr-2">
                      <FaCode />
                    </button>
                  </a>
                  {/* <a href="#"> */}
                  <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
                    Visit
                  </button>
                  {/* </a> */}
                </div>
              </div>
            </AnimatedComponent>
            <AnimatedSide>
              <div className="border rounded-md w-80 p-3 mx-2 my-2 shadow-lg">
                <div className="justify-center flex">
                  <img src="/images/web-film.png" alt="contoh" className="h-48" />
                </div>
                <h2 className="text-md font-bold mt-2 dark:text-slate-200 mb-2">Search Film</h2>
                <p className='dark:text-slate-200 text-sm mb-1'>With Reactjs and Film API</p>
                <p className='dark:text-slate-200 text-sm'>This website displays popular films and can search for film titles.</p>
                <div className="flex justify-end mt-4">
                  <a href="https://github.com/amufid/movie_reactjs_api.git" target="_blank">
                    <button className="bg-purple-500 hover:bg-purple-400 text-white py-3 px-5 rounded mr-2">
                      <FaCode />
                    </button>
                  </a>
                  <a href="https://reactjs-movie-wine.vercel.app/" target='_blank'>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </AnimatedSide>
          </div>
        </div>
      </section>
      <hr />

      <section id="contact">
        <AnimatedComponent>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center border border-slate-300 rounded-md mx-auto w-[350px]">
              <h1 className="text-3xl font-bold font-mono text-center pt-7 dark:text-slate-200">
                Contact Me
              </h1>
              <div className="w-full px-5 mt-5">
                <label className="block text-md font-bold mb-2 font-mono dark:text-slate-200">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full mt-1 px-3 py-2 text-black dark:text-slate-200 bg-white dark:bg-slate-700 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                />
              </div>
              <div className="w-full px-5 mt-5">
                <label className="block text-md font-bold mb-2 font-mono dark:text-slate-200">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full mt-1 px-3 py-2 text-black dark:text-slate-200 bg-white dark:bg-slate-700 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                />
              </div>
              <div className="w-full px-5 mt-5">
                <label className="block text-md font-bold mb-2 font-mono dark:text-slate-200">
                  Message
                </label>
                <textarea
                  type="textarea"
                  placeholder="Message"
                  className="w-full mt-1 px-3 py-2 text-black dark:text-slate-200 bg-white dark:bg-slate-700 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md w-20 my-5 p-2 mr-5">
                  Send
                </button>
              </div>
            </div>
          </div>
        </AnimatedComponent>
      </section>

      <section>
        <footer>
          <div className="bg-sky-500 py-7 dark:bg-sky-900">
            <div>
              <p className="text-center text-xl mb-5 text-gray-700 font-mono dark:text-slate-200">Social Media</p>
              <div className="flex justify-center gap-3 my-5">
                <a target="_blank" href="https://www.linkedin.com/in/abdul-mufid-5608aa249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGHsMb4rxR7Ccskp0By5ufA%3D%3D">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" className='dark:text-slate-200' height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/abdmufidd/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" className='dark:text-slate-200' height="30" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                </a>
                <a target="_blank" href="https://github.com/amufid">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" className='dark:text-slate-200' height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-gray-700 font-mono dark:text-slate-200"> Made with ❤️ by Abdul Mufid</p>
            </div>
            <p className="text-center text-gray-700 font-mono dark:text-slate-200">Copyright © 2024</p>
          </div>
        </footer>
      </section>

      <ScrollTop />
    </div>
  );
}

export default App;
