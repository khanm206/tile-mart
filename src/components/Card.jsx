import Image from "next/image";
import Link from "next/link";

const Card = ({ tile }) => {
  const { id, image, title, price, inStock } = tile;

  return (
    <div className="card w-full bgMe shadow-sm hover:scale-105 transition overflow-hidden">
      <figure className="relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          priority
          className="w-full h-48 object-cover"
        />

        {!inStock && (
          <span className="absolute bg-black/70 text-red-600 py-1 px-4 -rotate-45 bottom-8 right-0">
            Sold Out
          </span>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>

        <p className="text-xl">
          Price: <span className="font-semibold">£{price}</span> per SQM
        </p>

        <div className="card-actions justify-end mt-4">
          <Link href={`tile/${id}`} className="btnMe">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
