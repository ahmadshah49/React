import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance"; // Assuming you have an axios instance configured

const HomePage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axiosInstance.get(
          "https://api.opensea.io/api/v2/collections?order_by=seven_day_volume&order_direction=desc"
        );
        console.log(
          response.data.collections.sort((a, b) => {
            return new Date(a.created_date) - new Date(b.created_date);
          })
        );
        setCollections(
          response.data.collections.sort((a, b) => {
            return new Date(a.created_date) - new Date(b.created_date);
          })
        );
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div>
      <h1>Collections</h1>
      <div className="flex flex-wrap justify-center">
        {collections.map((collection) => (
          <div
            key={collection.collection}
            className="bg-white rounded-lg shadow-lg m-4 p-4 w-[200px]"
          >
            {collection.contracts.map((contract) => (
              <h2 key={contract.address} className="font-bold">
                {contract.chain}
              </h2>
            ))}
            <h2 className=" font-bold">{collection.name}</h2>
            {/* <h2 className=" font-bold">{collection.contracts[0].chain}</h2> */}
            <img
              className="mt-2 w-full h-48 object-cover"
              src={collection.image_url}
              alt={collection.name}
            />
            <Link
              className="text-blue-500"
              to={`/collection/${collection.collection}`}
            >
              View Collection
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
