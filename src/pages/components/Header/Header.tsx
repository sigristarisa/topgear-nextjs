import Image from "next/image";
import NavBar from "./NavBar";
import WiesoFarie from "./WiesoFarie";

interface Props {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}

const Header = ({ isClicked, setIsClicked }: Props) => {
  return (
    <div className="w-full flex h-1/2 flex-col items-center">
      <header className="w-full shadow-lg flex justify-around items-center">
        <div className="flex items-center px-5 h-14 lg:h-24">
          <Image
            src="/img/farie_logo.webp"
            height={48}
            width={108}
            alt="farie logo"
          />
        </div>
        <NavBar isClicked={isClicked} setIsClicked={setIsClicked} />
      </header>
      {isClicked && <WiesoFarie isClicked={isClicked} />}
    </div>
  );
};

export default Header;
