import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const NFTDetailPage = () => {
  const { collection_slug, nft_id } = useParams();
  const [nft, setNFT] = useState(null);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.opensea.io/api/v2/collection/${collection_slug}/nfts/${nft_id}`
        );
        setNFT(response.data.nfts[0]);
      } catch (error) {
        console.error("Error fetching NFT:", error);
      }
    };

    fetchNFT();
  }, [collection_slug, nft_id]);

  if (!nft) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{nft.name}</h1>
      <img src={nft.image_url} alt={nft.name} />
      <p>{nft.description}</p>
      <a href={nft.opensea_url} target="_blank" rel="noopener noreferrer">
        View on OpenSea
      </a>
    </div>
  );
};

export default NFTDetailPage;
