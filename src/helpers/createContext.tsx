import { createContext } from "react";
import { Carlisting, FilterType, MakeType, ModelType } from "../helpers/types";

// const testMake: MakeType = {
//   id: 2,
//   name: "skoda",
// };

// const testModel: ModelType = {
//   id: 4,
//   name: "oktavia",
// };

export const defaultFilter: FilterType = {
  make: null,
  model: null,
  priceMin: undefined,
  priceMax: undefined,
  mileageMin: undefined,
  mileageMax: undefined,
  gearbox: null,
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
