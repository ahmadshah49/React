import { useState, useEffect } from "react";

import axiosInstance from "../axiosInstance"; 

const ContractsChain = () => {
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
      {collections.map((collection) => (
        <>
          {collection.contracts.map((contract) => (
            <h2 key={contract.address} className="font-bold">
              {contract.chain}
            </h2>
          ))}
        </>
      ))}
    </div>
  );
};

export default ContractsChain;
