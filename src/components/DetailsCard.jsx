"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DetailsCard = ({ tile }) => {
  const router = useRouter();
  const {
    id,
    title,
    description,
    image,
    price,
    dimensions,
    material,
    inStock,
    tile_type,
    size,
    use_type,
  } = tile;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="">
        <Image
          src={image}
          alt="product"
          width={500}
          height={200}
          className="h-fit w-full"
        />
      </div>
      <div className="">
        <Tabs>
          <TabList className="text-2xl md:text-3xl font-semibold mb-4">
            <Tab>Description</Tab>
            <Tab>Specification</Tab>
          </TabList>
          <TabPanel>
            <div>
              <p className="text-xl md:text-2xl">{description}</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overflow-x-auto rounded-box border border-base-content/5">
              <table className="table md:text-2xl">
                <tbody>
                  <tr>
                    <td className="font-semibold">Product Id</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Product Name</td>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Price</td>
                    <td>£{price} per SQM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Dimensions</td>
                    <td>{dimensions}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Material</td>
                    <td>{material}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Type</td>
                    <td>{tile_type}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Wall\Floor</td>
                    <td>{use_type}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Size</td>
                    <td>{size}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Availability</td>
                    <td>{inStock ? "Available" : "Sold Out"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
        <br />
        <div className="flex gap-4 justify-end">
          <button onClick={() => router.back()} className="btnMe">
            Go Back
          </button>

          <button onClick={() => router.push("/")} className="btnMe">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
