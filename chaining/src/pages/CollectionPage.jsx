import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const CollectionPage = () => {
  const { slug } = useParams();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.opensea.io/api/v2/collection/${slug}/nfts`
        );
        setNfts(response.data.nfts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [slug]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axiosInstance.get(
          "https://api.opensea.io/api/v2/collections?order_by=seven_day_volume&order_direction=desc"
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

  const getContractChain = (contractAddress) => {
    for (const collection of collections) {
      for (const contract of collection.contracts) {
        if (contract.address === contractAddress) {
          return contract.chain;
        }
      }
    }
    return null;
  };

  return (
    <div>
      <h1 className="text-red-400 bg-black py-6 text-4xl font-bold">
        NFTs in Collection
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="nft-card bg-white rounded-lg shadow-lg m-4 p-4 w-[200px]"
            >
              <h2 className="text-xl font-bold">{nft.name}</h2>
              <img
                className="mt-2 w-full h-48 object-cover"
                src={nft.image_url}
                alt={nft.name}
              />
              <p className="mt-2 text-sm">{nft.description}</p>
              <p className="mt-2 text-sm">{nft.names}</p>
              <Link
                key={nft.id}
                to={`/nft/${getContractChain(nft.contract)}/${nft.contract}/${
                  nft.identifier
                }`}
                className="text-blue-500"
              >
                View NFT
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
