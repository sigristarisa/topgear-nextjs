import { useState } from "react";
import {
  MakeType,
  ModelType,
  GearboxType,
  FilterType,
} from "../../helpers/types";

interface Props {
  makes: MakeType[];
  models: ModelType[];
  gearboxes: GearboxType[];
  filter: FilterType;
  setFilter: (newFilter: FilterType) => void;
}

const Filter = ({ makes, models, gearboxes, filter, setFilter }: Props) => {
  const handleFilter = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (typeof value === "boolean") {
      filter[name] = [];
      console.log("hi");
      setFilter({ ...filter, [name]: filter[name].push(value) });
      console.log("filter", filter);
    } else {
      setFilter({ ...filter, [name]: Number(value) });
    }
  };

  console.log("filter", filter);

  return (
    <div>
      <div className="make-filter">
        <select name="makeId" onChange={handleFilter} value={filter.makeId}>
          <option value={undefined}>select Make</option>
          {makes.map((make: MakeType, index) => (
            <option key={index} value={make.id}>
              {make.name}
            </option>
          ))}
        </select>
      </div>
      <div className="model-filter">
        <select
          name="modelId"
          onChange={handleFilter}
          disabled={filter.makeId ? false : true}>
          <option value={undefined}>select Model</option>
          {models.map((model: ModelType, index) => (
            <option key={index} value={model?.id}>
              {model?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="gearbox-filter">
        {gearboxes.map((gearbox: GearboxType, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`${gearbox.name}-${gearbox.id}`}
              checked={gearbox?.id ? true : false}
              value={gearbox?.id}
              onChange={handleFilter}
            />
            <label htmlFor={`${gearbox.name}-${gearbox.id}`}>
              {gearbox.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
