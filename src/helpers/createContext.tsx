import { createContext } from "react";
import { Carlisting, FilterType, MakeType } from "../helpers/types";

const testMake: MakeType = {
  id: 2,
  name: "skoda",
};

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

type FilterContextType = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

type CarlistingContextType = {
  filterCarlisting: Carlisting[] | [];
  setCarlisting: (carlisting: Carlisting[]) => void;
};

export const filterContext = createContext<FilterContextType>({
  filter: defaultFilter,
  setFilter: () => {},
});

export const carlistingContext = createContext<CarlistingContextType>({
  filterCarlisting: [],
  setCarlisting: () => {},
});
