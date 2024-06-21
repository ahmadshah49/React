import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "8d2d0908f07a454aa9b331780d4bad05";

const NFTDetail = () => {
  const { nftId } = useParams();
  const [nft, setNFT] = useState(null);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v2/nft/${nftId}`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setNFT(response.data.nft);
      } catch (error) {
        console.error("Error fetching NFT:", error);
      }
    };

    fetchNFT();
  }, [nftId]);

  if (!nft) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>NFT Detail Page - {nftId}</h1>
      <h2>{nft.name}</h2>
      <img src={nft.image_url} alt={nft.name} />
      <p>Owner: {nft.owners[0].address}</p>
      <p>Description: {nft.description}</p>
      <a href={nft.opensea_url} target="_blank" rel="noreferrer">
        View on OpenSea
      </a>
    </div>
  );
};

export default NFTDetail;
