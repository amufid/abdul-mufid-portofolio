import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer>
      <div className="bg-sky-200 py-7 dark:bg-sky-950 dark:text-slate-200">
        <div>
          <p className="text-center text-xl mb-5">Find me</p>
          <div className="flex justify-center gap-3 my-5">
            <div className="tooltip">
              <a target="_blank" href="www.linkedin.com/in/abdul-mufid">
                <FaLinkedin className="text-4xl hover:text-blue-600" />
                <div className="tooltip-text">Linked In</div>
              </a>
            </div>
            <div className="tooltip">
              <a target="_blank" href="https://www.instagram.com/abdmufidd/">
                <FaInstagramSquare className="text-4xl hover:text-blue-600" />
                <div className="tooltip-text">Instagram</div>
              </a>
            </div>
            <div className="tooltip">
              <a target="_blank" href="https://github.com/amufid">
                <FaGithubSquare className="text-4xl hover:text-blue-600" />
                <div className="tooltip-text">Github</div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center"> Made with ❤️ by Abdul Mufid</p>
        </div>
        <p className="text-center">© 2024</p>
      </div>
    </footer>
  );
}
