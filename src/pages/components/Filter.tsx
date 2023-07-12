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

interface Checkbox {
  gearboxId: {
    automat: boolean;
    manuell: boolean;
  };
}

const Filter = ({ makes, models, gearboxes, filter, setFilter }: Props) => {
  const initialCheckboxes = {
    gearboxId: {
      automat: false,
      manuell: false,
    },
  };

  const handleIds = (isClicked: boolean, category, id: number) => {
    if (isClicked) {
      category.push(id);
    }
    const newCategory = category.filter((cbId: number) => cbId !== id);
    return newCategory;
  };

  const [checkbox, setCheckbox] = useState<Checkbox>(initialCheckboxes);
  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: Number(value) });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id, value } = e.target;
    setCheckbox({ ...checkbox[name], [id]: !checkbox[name][id] });
    console.log("what is this", checkbox[name][id]);
    test(name, id, value);
  };

  const test = (name, id, value): void => {
    handleIds(!checkbox[name][id], filter[name], Number(value));
    setFilter({ ...filter, [name]: filter[name] });
  }; // name == gearboxId
  // id == automat, manuell

  console.log("checkbox", checkbox);
  console.log("filter", filter);

  return (
    <div>
      <div className="make-filter">
        <select name="makeId" onChange={handleDropdown} value={filter.makeId}>
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
          onChange={handleDropdown}
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
              name="gearboxId"
              id={gearbox.name}
              value={gearbox?.id}
              checked={checkbox[gearbox.name]}
              onChange={handleCheckbox}
            />
            <label htmlFor={gearbox.name}>{gearbox.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
