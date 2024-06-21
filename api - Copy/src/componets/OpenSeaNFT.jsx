import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OpenSeaNFT = () => {
  const { nftId } = useParams();
  const [nft, setNft] = useState(null);
  const API_KEY = "8d2d0908f07a454aa9b331780d4bad05"; // Securely store your API key

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v1/asset/${nftId}`,
          { headers: { "X-API-KEY": API_KEY } }
        );
        setNft(response.data);
      } catch (error) {
        console.error("Error fetching NFT:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchNFT();
  }, [nftId, API_KEY]);

  if (!nft) {
    return <p>Loading NFT...</p>;
  }

  return (
    <div>
      <h1>{nft.name}</h1>
      <img src={nft.image_url} alt={nft.name} />
      <p>Description: {nft.description}</p>
      <p>Owner: {nft.owner.address}</p>
      {nft.attributes && (
        <div>
          <h2>Attributes</h2>
          <ul>
            {nft.attributes.map((attribute) => (
              <li key={attribute.trait_type}>
                {attribute.trait_type}: {attribute.value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <a
        href={`https://opensea.io/assets/${nft.asset_contract.address}/${nft.id}`}
      >
        View on OpenSea
      </a>
    </div>
  );
};

export default OpenSeaNFT;
