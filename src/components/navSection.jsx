import { useEffect, useState } from "react";
import SwitchTheme from "../lib/SwitchTheme";
import { MdOutlineDensityMedium } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function NavSection(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    const offset = 50;

    window.addEventListener("scroll", () => {
      const currentScrollPosition = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          currentScrollPosition >= sectionTop - offset &&
          currentScrollPosition < sectionTop + sectionHeight + offset
        ) {
          setActiveSection(section.id);
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        } else {
          setActiveSection(null);
        }
      });
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const items = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav>
        <div className="flex grid-cols-4 backdrop-opacity-10 backdrop-invert bg-white/20 dark:bg-white/10 py-2 px-5 sm:px-20 justify-between shadow-md top-0 fixed w-full items-center z-20">
          <div>
            <h1 className="header-title text-stone-900 dark:text-slate-200">
              Abdul Mufid
            </h1>
          </div>
          <div className="hidden sm:flex items-center">
            <ul className="flex flex-row">
              {items.map((link, index) => (
                <li key={index} className="wobble">
                  <a
                    href={"#" + link}
                    className={
                      activeSection === link.replace("#", "")
                        ? "active"
                        : "w-20 h-10 text-slate-700 text-md font-medium dark:text-slate-200 hover:text-sky-500 rounded-sm"
                    }
                  >
                    {link.replace("#", "")}
                  </a>
                </li>
              ))}
              <li>
                <SwitchTheme />
              </li>
            </ul>
          </div>
          {/* mobile mode  */}
          <div className="flex sm:hidden ml-32 mr-5">
            <SwitchTheme />
          </div>
          <div className="flex sm:hidden dark:text-slate-200">
            <button>
              <a onClick={toggleMenu}>
                {menuOpen ? (
                  <IoMdClose className="w-7 h-7" />
                ) : (
                  <MdOutlineDensityMedium className="w-7 h-7" />
                )}
              </a>
            </button>
          </div>
        </div>
        <div className="flex sm:hidden text-sky-950 dark:text-slate-100">
          <div
            className={`block ${
              menuOpen ? "block delay-1000" : "hidden delay-1000"
            } fixed w-full mt-[53px] py-5 items-center z-50 bg-sky-100 dark:bg-sky-950`}
          >
            <div className="flex flex-col">
              {items.map((link, index) => (
                <a
                  href={`/#${link}`}
                  className="cursor-pointer hover:scale-110 py-4 px-5 text-xl font-semibold hover:text-blue-500"
                  onClick={toggleMenu}
                  key={index}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  );
}
