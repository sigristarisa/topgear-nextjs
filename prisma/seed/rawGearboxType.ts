import { GearboxTypeSeed } from "../../src/helpers/types";

const automatic: GearboxTypeSeed = {
  name: "automat",
};

const manual: GearboxTypeSeed = {
  name: "manuell",
};

export const gearbox = {
  automatic,
  manual,
};

export const gearboxList = [automatic, manual];
