import Card from "@/components/Card";
import Category from "@/lib/Category";
import Data from "@/lib/Data";

const AllTilesPage = () => {
  const tiles = Data();
  return (
    <section className="w-11/12 mx-auto grid grid-cols-7">
      <Category />
      <div className="col-span-6">
        <h2 className="textMe text-4xl font-bold text-center">
          Popular Products
        </h2>
        <br />
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <Card key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTilesPage;
