import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex font-semibold text-blue-950">
      <ul className="flex justify-between items-center">
        <Link href="/index">Auto kaufen</Link>
        <li className="px-[20px] p-[8px] hover:text-blue-500">
          <a href="https://www.farie.ch/auto-ankauf">Auto verkaufen</a>
        </li>
        <li className="px-[20px] p-[8px] hover:text-blue-500">
          <a href="">Wieso Farie</a>
        </li>
        <li className="px-[20px] p-[8px] hover:text-blue-500">
          <a href="https://www.farie.ch/faq">FAQ</a>
        </li>
        <li className="px-[20px] p-[8px] hover:text-blue-500">
          <a href="https://www.farie.ch/kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
