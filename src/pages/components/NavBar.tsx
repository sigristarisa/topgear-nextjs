import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <nav className="flex font-semibold text-blue-950">
      <ul className="flex justify-between items-center">
        <Link
          href="/"
          className="px-[20px] p-[8px] hover:text-blue-500 transition-colors duration-300 ease-in-out">
          Auto kaufen
        </Link>
        <li className="px-[20px] p-[8px] hover:text-blue-500 transition-colors duration-300 ease-in-out">
          <a href="https://www.farie.ch/auto-ankauf">Auto verkaufen</a>
        </li>
        <li
          className="px-[20px] p-[8px] hover:text-blue-500 transition-colors duration-300 ease-in-out"
          onClick={() => setIsClicked(!isClicked)}>
          <div className="flex items-center gap-2">
            <a> Wieso Farie</a>
            <svg
              className={`w-4 h-4 fill-current text-blue-500 ${
                isClicked
                  ? "transition duration-300 rotate-180"
                  : "transition duration-300 rotate-270"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z" />
            </svg>
          </div>
        </li>
        <li className="px-[20px] p-[8px] hover:text-blue-500 transition-colors duration-300 ease-in-out">
          <a href="https://www.farie.ch/faq">FAQ</a>
        </li>
        <li className="px-[20px] p-[8px] hover:text-blue-500 transition-colors duration-300 ease-in-out">
          <a href="https://www.farie.ch/kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
