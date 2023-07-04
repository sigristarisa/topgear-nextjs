import { createContext } from "react";
import { FilterType } from "../helpers/types";

export const defaultFilter: FilterType = {
  make: null,
  model: null,
  priceMin: 0,
  priceMax: 0,
  gearbox: null,
  mileageMin: 0,
  mileageMax: 0,
  fuel: null,
  drive: null,
};

type GlobalContext = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

export const filterContext = createContext<GlobalContext>({
  filter: defaultFilter,
  setFilter: () => {},
});

// create filter type
// create an object that contains all the filter variables
// create context according the filter, and pass it down
