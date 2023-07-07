import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="shadow-lg flex justify-around items-center ">
      <div className="flex items-center px-5 h-14 lg:h-24">
        <Image
          src="/img/farie_logo.webp"
          height={48}
          width={108}
          alt="farie logo"
        />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
