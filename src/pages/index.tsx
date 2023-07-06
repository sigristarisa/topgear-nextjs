import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";
import CarList from "./components/CarList";
import Filter from "./components/Filter";
import Car from "../helpers/models/carlisting";
import Make from "../helpers/models/make";
import { Carlisting, MakeType } from "../helpers/types";
import { filterContext, carlistingContext } from "../helpers/createContext";

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
  const { filter, setFilter } = useContext(filterContext);
  const { filterCarlisting, setCarlisting } = useContext(carlistingContext);
  console.log("set", setCarlisting);

  useEffect(() => {
    console.log("useEffect");
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    };
    fetch("http://localhost:3000/api/car", context)
      .then((res) => res.json())
      .then((data) => {
        console.log("carlisting", data.data);
        setCarlisting(data.data);
      });
  }, [filter, setCarlisting]);

  console.log(filterCarlisting);

  return (
    <Layout>
      <main className="w-9/12 mx-auto flex justify-center border-2 border-red-500 border-solid">
        <aside className="w-3/12">
          <Filter makes={makes} filter={filter} setFilter={setFilter} />
        </aside>
        <aside className="w-9/12">
          <CarList carlisting={carlisting} />
        </aside>
      </main>
    </Layout>
  );
};

export default Home;
