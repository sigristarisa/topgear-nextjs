import { FuelTypeSeed } from "../../src/helpers/types";

const electric: FuelTypeSeed = {
  name: "elektro",
};

const gasoline: FuelTypeSeed = {
  name: "benzin",
};

const diesel: FuelTypeSeed = {
  name: "diesel",
};

const hybrid: FuelTypeSeed = {
  name: "hybrid",
};

const hydrogen: FuelTypeSeed = {
  name: "hydrogen",
};

export const fuel = {
  electric,
  gasoline,
  diesel,
  hybrid,
  hydrogen,
};

export const fuelList = [electric, gasoline, diesel, hybrid, hydrogen];
