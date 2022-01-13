import Head from "next/head";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MLH Recipe Tracker</title>
        <meta name="description" content="An app for recipe tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen overflow-hidden flex flex-col max-w-8xl m-auto">
        <Header />
        <main className="flex flex-col xl:flex-row min-h-[85vh] m-auto max-w-8xl items-start w-full xl:justify-between justify-center pt-14 pb-4 px-4 md:px-12 space-x-8">
          <div className="flex flex-col flex-grow min-h-full">
            <h3 className="text-3xl mb-4">Items</h3>
            <RecipeCard
              recipeName="NP"
              desc="NP"
              status="Todo"
              when="NP"
            />
          </div>
          <div className="flex flex-col flex-grow min-h-full">
            <h3 className="text-3xl mb-4">In process</h3>
            <RecipeCard
              recipeName="NP"
              desc="NP"
              status="Making"
              when="NP"
            />
          </div>
          <div className="flex flex-col flex-grow min-h-full">
            <h3 className="text-3xl mb-4">Completed</h3>
            <RecipeCard
              recipeName="NP"
              desc="NP"
              status="Done"
              when="NP"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
