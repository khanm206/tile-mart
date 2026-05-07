import Data from "@/lib/Data";
import TileSearch from "@/components/TileBar";

const AllTilesPage = () => {
  const tiles = Data();

  return (
    <section className="w-11/12 mx-auto mt-18">
      <h2 className="text-4xl font-bold text-center">All Products</h2>
      <br />
      <TileSearch tiles={tiles} />
    </section>
  );
};

export default AllTilesPage;
