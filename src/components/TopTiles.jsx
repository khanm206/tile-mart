import Data from "@/lib/Data";
import Card from "./Card";

const TopTiles = async () => {
  const tiles = await Data();
  const topTiles = tiles.slice(0, 4);
  return (
    <section className="my-18">
      <h2 className="textMe text-4xl font-bold text-center">
        Popular Products
      </h2>
      <br />
      <div className="grid grid-cols-4 gap-6">
        {topTiles.map((tile) => (
          <Card key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
};

export default TopTiles;
