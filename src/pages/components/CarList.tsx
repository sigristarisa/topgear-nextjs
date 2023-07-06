import { Carlisting } from "../../helpers/types";

const CarList = ({ carlisting }: { carlisting: Carlisting[] }) => {
  console.log("in car list", carlisting);
  return (
    <ul className="flex flex-wrap border-2 border-solid border-lime-600">
      {carlisting.map((car: Carlisting) => (
        <li
          key={car.id}
          className="w-[320px] h-[480px] border-2 border-solid border-cyan-600">
          <div>{car.mileage}</div>
          <div>
            {car.make?.name} {car.model?.name}
            {car.description}
          </div>
          <div>{`${car.gearboxType?.name} - ${car.driveType?.name} - ${car.fuelType?.name}`}</div>
          <div>{car.price}</div>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
