import { useState } from "react";
import Header from "./Header/Header";
import { Carlisting, FilterType } from "../../helpers/types";

interface Children {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Children) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center">
      <Header isClicked={isClicked} setIsClicked={setIsClicked} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
