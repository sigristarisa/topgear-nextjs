import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import Layout from "./components/Layout";
import CarList from "./components/CarList";
import Filter from "./components/Filter";
import Car from "../helpers/models/carlisting";
import Make from "../helpers/models/make";
import { Carlisting, MakeType } from "../helpers/types";

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
  console.log("car listings from backend", carlisting);
  console.log("makes from backend", makes);

  // Only piece of state is which make id is selected in the make filter.
  // No selected filter value is represented by a falsey value (undefined or empty string).
  // Initial value is undefined. no option is selected in the select element.
  const [makeFilter, setMakeFilter] = useState<MakeType["id"] | undefined>(
    undefined
  );
  // IMPORTANT TO UNDERSTAND: calling the setMakeFilter function provided by useState rerenders this component!

  // Filter all car listings to select the ones for the current makeFilter value.
  // If no makeFilter is set, all car listings are shown. ( x ? y : z notation is called "ternary operator")
  const filteredCarlistings = carlisting.filter((cl: Carlisting) =>
    makeFilter ? cl.makeId === makeFilter : true
  );
  console.log("filtered car listings", filteredCarlistings);

  return (
    <Layout>
      <main className="flex justify-center w-9/12 mx-auto border-2 border-red-500 border-solid">
        <aside className="w-3/12">
          <Filter
            makes={makes}
            makeFilter={makeFilter}
            setMakeFilter={setMakeFilter}
          />
        </aside>
        <aside className="w-9/12">
          <CarList carlisting={filteredCarlistings} />
        </aside>
      </main>
    </Layout>
  );
};

export default Home;
