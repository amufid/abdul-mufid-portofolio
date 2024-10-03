import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

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
    <div className="ml-3">
      <button onClick={() => darkModeHandler()}>
        {dark && <IoSunny className="h-6 w-6 text-yellow-100" />}
        {!dark && <IoMoon className="h-6 w-6 text-yellow-300" />}
      </button>
    </div>
  );
}

export default SwitchTheme;
