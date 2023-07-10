import { MakeType, FilterType } from "../../helpers/types";

// Filter component shows selected option based on makeFilter value
// and can update the makeFilter value on user input
const Filter = ({
  makes,
  makeFilter,
  setMakeFilter,
}: {
  makes: MakeType[];
  makeFilter: MakeType['id'];
  setMakeFilter: (newMakeFilter: MakeType['id']) => void;
}) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('changed to ', e.target.value)
    setMakeFilter(Number(e.target.value));
  };

  return (
    <div>
      <select name="make" onChange={handleFilter} value={makeFilter}>
        <option value={undefined}></option>
        {makes.map((make: MakeType) => (
          <option key={make.id} value={make.id}>
            {make.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
