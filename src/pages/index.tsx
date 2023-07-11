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

  const [filter, setFilter] = useState<FilterType>(defaultFilter);

  const filterWithValues = (): FilterType | {} => {
    let newFilter = {};
    for (const category in filter) {
      if (filter[category]) {
        newFilter = { ...newFilter, [category]: filter[category] };
      }
    }
    return newFilter;
  };

  const filterByCategory = (
    carlisting: Carlisting[],
    categoryName: string,
    ids: number | number[]
  ) => {
    const filteredCarlisting = carlisting.filter((cl: Carlisting) => {
      if (typeof ids === "number") return cl[`${categoryName}`] === ids;
      if (typeof ids === "object") {
        for (const id of ids) {
          return cl[`${categoryName}`] === id;
        }
      }
    });
    return filteredCarlisting;
  };

  const filterCarlisting = () => {
    const filterEntries = Object.entries(filterWithValues());
    console.log("filterEntries", filterEntries);
    if (!filterEntries.length) return carlisting;
    let filteredCarlisting: Carlisting[] = carlisting;

    for (const entry of filterEntries) {
      filteredCarlisting = filterByCategory(
        filteredCarlisting,
        entry[0],
        entry[1]
      );
    }
    return filteredCarlisting;
  };

  const extractModel = (filteredCarlisting: Carlisting[]): ModelType[] => {
    const models = [];
    filteredCarlisting.forEach((cl: Carlisting) => models.push(cl.model));
    return models;
  };

  return (
    <Layout>
      <main className="flex justify-center w-9/12 mx-auto border-2 border-red-500 border-solid">
        <aside className="w-3/12">
          <Filter
            makes={makes}
            models={extractModel(filterCarlisting())}
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
