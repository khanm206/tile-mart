import DetailsCard from "@/components/DetailsCard";
import Data from "@/lib/Data";
import React from "react";

const TileDetailsPage = async ({ params }) => {
  const param = await params;
  const tiles = Data();
  const tile = tiles.find((t) => t.id === param.id);

  return (
    <section className="w-11/12  mx-auto my-8  flex items-center justify-center">
      <div className="flex-1 ">
        <DetailsCard tile={tile} />
      </div>
    </section>
  );
};

export default TileDetailsPage;
