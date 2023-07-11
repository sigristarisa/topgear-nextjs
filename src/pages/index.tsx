import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import Layout from "./components/Layout";
import CarList from "./components/CarList";
import Filter from "./components/Filter";
import Car from "../helpers/models/carlisting";
import Make from "../helpers/models/make";
import Gearbox from "../helpers/models/gearbox";
import {
  Carlisting,
  MakeType,
  ModelType,
  GearboxType,
  FilterType,
} from "../helpers/types";

export const getStaticProps: GetStaticProps = async () => {
  const carRes = await Car.findAll();
  const makeRes = await Make.findAll();
  const gearboxRes = await Gearbox.findAll();
  const carlisting: Carlisting[] = await JSON.parse(JSON.stringify(carRes));
  const makes: MakeType[] = await JSON.parse(JSON.stringify(makeRes));
  const gearboxes: GearboxType[] = await JSON.parse(JSON.stringify(gearboxRes));

  return {
    props: {
      carlisting,
      makes,
      gearboxes,
    },
  };
};

const Home = ({
  carlisting,
  makes,
  gearboxes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // All car listings and makes are provided by Next.js through the static props.
  // No data fetching is necessary.

  const defaultFilter = {
    makeId: undefined,
    modelId: undefined,
    // priceMin: undefined,
    // priceMax: undefined,
    // mileageMin: undefined,
    // mileageMax: undefined,
    gearboxId: undefined,
    // fuel: undefined,
    // drive: undefined,
  };

  // Only piece of state is which make id is selected in the make filter.
  // No selected filter value is represented by a falsey value (undefined or empty string).
  // Initial value is undefined. no option is selected in the select element.
  const [filter, setFilter] = useState<FilterType>(defaultFilter);
  // IMPORTANT TO UNDERSTAND: calling the setMakeFilter function provided by useState rerenders this component!

  // Filter all car listings to select the ones for the current makeFilter value.
  // If no makeFilter is set, all car listings are shown. ( x ? y : z notation is called "ternary operator")

  const filterWithValues = (): FilterType | {} => {
    let newFilter = {};
    for (const category in filter) {
      if (filter[category]) {
        newFilter = { ...newFilter, [category]: filter[category] };
      }
    }
    return newFilter;
  };

  const filterCarlisting = () => {
    const filterEntries = Object.entries(filterWithValues());
    if (!filterEntries.length) return carlisting;
    let filteredCarlisting: Carlisting[] | undefined;

    for (const category of filterEntries) {
      filteredCarlisting = carlisting.filter((cl: Carlisting) => {
        const i = filterEntries.indexOf(category);
        const key = filterEntries[i][0];
        const value = filterEntries[i][1];
        return cl[key] === value;
      });
    }
    return filteredCarlisting;
  };

  const filterModelByMake = (makeId: MakeType["id"]): ModelType[] => {
    const models = [];
    const filteredCarlisting = carlisting.filter(
      (cl: Carlisting) => cl.makeId === makeId
    );
    const filteredModel = filteredCarlisting.map((cl: Carlisting) => cl.model);

    return filteredModel;
  };

  return (
    <Layout>
      <main className="flex justify-center w-9/12 mx-auto border-2 border-red-500 border-solid">
        <aside className="w-3/12">
          <Filter
            makes={makes}
            models={filterModelByMake(filter.makeId)}
            gearboxes={gearboxes}
            filter={filter}
            setFilter={setFilter}
          />
        </aside>
        <aside className="w-9/12">
          <CarList carlisting={filterCarlisting()} />
        </aside>
      </main>
    </Layout>
  );
};

export default Home;
