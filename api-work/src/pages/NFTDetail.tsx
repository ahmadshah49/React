import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface NFT {
  id: string;
  image_url: string;
  name: string;
  owner: {
    address: string;
  };
  traits: Array<{ trait_type: string; value: string }>;
}

const NFTDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [nft, setNft] = useState<NFT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNFTDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v1/asset/${id}`,
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_OPENSEA_API_KEY,
            },
          }
        );
        console.log("NFT Detail response:", response.data);
        setNft(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFT detail:", error);
        setLoading(false);
      }
    };

    fetchNFTDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!nft) return <div>NFT not found</div>;

  return (
    <div>
      <h1>{nft.name}</h1>
      <img src={nft.image_url} alt={nft.name} />
      <p>Owner: {nft.owner.address}</p>
      <ul>
        {nft.traits.map((trait, index) => (
          <li key={index}>
            {trait.trait_type}: {trait.value}
          </li>
        ))}
      </ul>
      <a
        href={`https://opensea.io/assets/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on OpenSea
      </a>
    </div>
  );
};

export default NFTDetail;
