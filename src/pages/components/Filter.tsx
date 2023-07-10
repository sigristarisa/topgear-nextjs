import {
  MakeType,
  ModelType,
  GearboxType,
  Carlisting,
} from "../../helpers/types";

// Filter component shows selected option based on makeFilter value
// and can update the makeFilter value on user input

interface FilterType {
  makeId: MakeType["id"] | undefined;
  modelId: ModelType["id"] | undefined;
  gearboxId: GearboxType["id"] | undefined;
}
const Filter = ({
  makes,
  filter,
  setFilter,
  models,
  filteredCarlistings,
}: {
  makes: MakeType[];
  models: ModelType[];
  filter: FilterType;
  setFilter: (newFilter: FilterType) => void;
  filteredCarlistings: Carlisting[];
}) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: Number(value) });
  };

  console.log("models", models);

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
    </div>
  );
};

export default Filter;
