import { MakeType } from "../../helpers/types";

const Filter = ({ makes }: { makes: MakeType[] }) => {
  return (
    <ul>
      {makes.map((make: MakeType) => (
        <li key={make.id}>{make.name}</li>
      ))}
    </ul>
  );
};

export default Filter;
