import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function SwitchTheme() {

   const [dark, setDark] = React.useState(false);

   const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
   }

   return (
      <div className="ml-2">
         <button onClick={() => darkModeHandler()}>
            {

               dark && <IoSunny className="h-6 w-6 text-yellow-100" />
            }
            {
               !dark && <IoMoon className="h-6 w-6 text-white" />
            }
         </button>
      </div>
   );
}

export default SwitchTheme;