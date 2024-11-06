import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";

function SwitchTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "true") {
      setDark(true);
      document.body.classList.add("dark");
    } else {
      setDark(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const darkModeHandler = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  };

  return (
    <div className="flex items-center ml-3 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">
      <button onClick={() => darkModeHandler()}>
        {dark && <LuSunMedium className="h-6 w-6" />}
        {!dark && <IoMoonOutline className="h-6 w-6" />}
      </button>
    </div>
  );
}

export default SwitchTheme;
