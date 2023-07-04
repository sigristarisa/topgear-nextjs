import { useState } from "react";
import Header from "./Header";
import { FilterType } from "../../helpers/types";
import { filterContext, defaultFilter } from "../../helpers/createContext";

interface Children {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Children) => {
  const [filter, setFilter] = useState<FilterType>(defaultFilter);
  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </filterContext.Provider>
  );
};

export default Layout;
