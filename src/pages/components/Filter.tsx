import { MakeType, FilterType } from "../../helpers/types";

const Filter = ({
  makes,
  setFilter,
  filter,
}: {
  makes: MakeType[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLSelectElement;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div>
      <select name="make" onChange={handleFilter}>
        <option value={undefined}></option>
        {makes.map((make: MakeType) => (
          <option key={make.id} value={make.name}>
            {make.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
