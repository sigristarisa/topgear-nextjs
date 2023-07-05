import { useState } from "react";
import Header from "./Header";
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
          <main>{children}</main>
        </div>
      </carlistingContext.Provider>
    </filterContext.Provider>
  );
};

export default Layout;
