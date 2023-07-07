import { useState } from "react";
import Header from "./Header/Header";
import WiesoFarie from "./Header/WiesoFarie";
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

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      <carlistingContext.Provider value={{ filterCarlisting, setCarlisting }}>
        <div>
          <Header />
          <WiesoFarie />
          <main>{children}</main>
        </div>
      </carlistingContext.Provider>
    </filterContext.Provider>
  );
};

export default Layout;
