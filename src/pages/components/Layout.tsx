import { useState } from "react";
import Header from "./Header/Header";
import { Carlisting, FilterType } from "../../helpers/types";
import {
  filterContext,
  defaultFilter,
  carlistingContext,
} from "../../helpers/createContext";

interface Children {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Children) => {
  const [filter, setFilter] = useState<FilterType>(defaultFilter);
  const [filterCarlisting, setCarlisting] = useState<Carlisting[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      <carlistingContext.Provider value={{ filterCarlisting, setCarlisting }}>
        <div className="flex flex-col items-center">
          <Header isClicked={isClicked} setIsClicked={setIsClicked} />
          <main>{children}</main>
        </div>
      </carlistingContext.Provider>
    </filterContext.Provider>
  );
};

export default Layout;
