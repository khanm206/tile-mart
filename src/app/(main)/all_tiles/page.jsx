import Data from "@/lib/Data";
import TileSearch from "@/components/TileBar";
import TilesMarquee from "@/components/TilesMarquee";
export const metadata = {
  title: "All Tiles",
};

const AllTilesPage = () => {
  const tiles = Data();

  return (
    <section>
      <TilesMarquee />
      <div className="w-11/12 mx-auto mt-18">
        <h2 className="text-4xl font-bold text-center">All Products</h2>
        <br />
        <TileSearch tiles={tiles} />
      </div>
    </section>
  );
};

export default AllTilesPage;
