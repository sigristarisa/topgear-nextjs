import { MakeType, ModelType, Carlisting } from "../../helpers/types";

// Filter component shows selected option based on makeFilter value
// and can update the makeFilter value on user input

interface FilterType {
  makeId: MakeType["id"] | undefined;
  modelId: ModelType["id"] | undefined;
}
const Filter = ({
  makes,
  filter,
  setFilter,
  filteredCarlistings,
}: {
  makes: MakeType[];
  filter: FilterType;
  setFilter: (newFilter: FilterType) => void;
  filteredCarlistings: Carlisting[];
}) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: Number(value) });
  };

  return (
    <div>
      <div className="make-filter">
        <select name="make" onChange={handleFilter} value={filter.makeId}>
          <option value={undefined}>select Make</option>
          {makes.map((make: MakeType) => (
            <option key={make.id} value={make.id}>
              {make.name}
            </option>
          ))}
        </select>
      </div>
      <div className="model-filter">
        <select name="model" onChange={handleFilter}>
          <option value={undefined}>select Model</option>
          {filteredCarlistings.map((cl: Carlisting) => (
            <option key={cl.model?.id} value={cl.model?.id}>
              {cl.model?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
