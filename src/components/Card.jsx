import Image from "next/image";
import Link from "next/link";

const Card = ({ tile }) => {
  const { image, title, price } = tile;
  return (
    <div className="card  w-fit shadow-sm hover:scale-105 transition bgMe">
      <figure>
        <Image
          src={image}
          alt="product"
          width={500}
          height={500}
          className="h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-xl">
          <span className="font-semibold">£{price}</span> per SQM
        </p>
        <div className="card-actions justify-end">
          <button className="btnMe">
            <Link href={"/all_tiles"}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
