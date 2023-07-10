import { MakeType, Carlistings } from "../../helpers/types";

// Filter component shows selected option based on makeFilter value
// and can update the makeFilter value on user input
const Filter = ({
  makes,
  makeFilter,
  setMakeFilter,
  filteredCarlistings,
}: {
  makes: MakeType[];
  makeFilter: MakeType["id"];
  setMakeFilter: (newMakeFilter: MakeType["id"]) => void;
  filteredCarlistings: Carlistings[];
}) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMakeFilter(Number(e.target.value));
  };

  console.log("makeFilter", makeFilter);

  return (
    <div>
      <div className="make-filter">
        <select name="make" onChange={handleFilter} value={makeFilter}>
          <option value={undefined}>select Make</option>
          {makes.map((make: MakeType) => (
            <option key={make.id} value={make.id}>
              {make.name}
            </option>
          ))}
        </select>
      </div>
      <div className="model-filter">
        <select
          name="model"
          onChange={handleFilter}
          disabled={!makeFilter ? true : false}>
          <option value={undefined}>select Model</option>
          {filteredCarlistings.map((cl: Carlistings) => (
            <option key={cl.model.id} value={cl.model.id}>
              {cl.model.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
