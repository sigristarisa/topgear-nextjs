const obj = {
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

const filterHasValues = (filter) => {
  const filterValues = Object.values(filter);
  return filterValues.find((category) => category) ? true : false;
};

const filterByGearbox = (carlistings, gearboxes) => {
  const filteredCarlisting = carlistings.filter((cl) => {
    for (const gearbox of gearboxes) {
      cl.gearboxId === gearbox.id;
    }
  });
  return filteredCarlisting;
};
