import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import Layout from "./components/Layout";
import CarList from "./components/CarList";
import Filter from "./components/Filter";
import Car from "../helpers/models/carlisting";
import Make from "../helpers/models/make";
import { Carlisting, MakeType, ModelType } from "../helpers/types";

export const getStaticProps: GetStaticProps = async () => {
  const carRes = await Car.findAll();
  const makeRes = await Make.findAll();
  const carlisting: Carlisting[] = await JSON.parse(JSON.stringify(carRes));
  const makes: MakeType[] = await JSON.parse(JSON.stringify(makeRes));

  return {
    props: {
      carlisting,
      makes,
    },
  };
};

const Home = ({
  carlisting,
  makes,
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
    // gearbox: undefined,
    // fuel: undefined,
    // drive: undefined,
  };

  interface FilterType {
    makeId: MakeType["id"] | undefined;
    modelId: ModelType["id"] | undefined;
  }

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
    let filteredCarlisting;
    console.log("filtered", filteredCarlisting);
    for (let i = 0; i < filterEntries.length; i++) {
      filteredCarlisting = carlisting.filter((cl: Carlisting) => {
        const key = filterEntries[i][0];
        const value = filterEntries[i][1];
        return cl[key].id === value;
      });
    }
    return filteredCarlisting;
  };

  console.log("filterCarlisting", filterCarlisting());

  // const filteredCarlistings = carlisting.filter((cl: Carlisting) => {
  //   const filterEntries = Object.entries(filterWithValues());
  //   let filteredArr;
  //   for (const filterEntry of filterEntries) {
  //     const key = filterEntry[0];
  //     const value = filterEntry[1];
  //     console.log("cl[key]", cl[key], "value", value);
  //     return (filteredArr = cl[key].id === value);
  //   }
  //   return true;
  // });

  return (
    <Layout>
      <main className="flex justify-center w-9/12 mx-auto border-2 border-red-500 border-solid">
        <aside className="w-3/12">
          <Filter
            makes={makes}
            filter={filter}
            setFilter={setFilter}
            filteredCarlistings={filterCarlisting()}
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
