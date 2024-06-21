import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const OpenSeaNFT = () => {
  const { chain, address, identifier } = useParams();
  const [nft, setNft] = useState(null);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${identifier}`
        );
        setNft(response.data);
      } catch (error) {
        console.error("Error fetching NFT:", error);
      }
    };

    fetchNFT();
  }, [chain, address, identifier]);

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
      {nft.contract && (
        <div>
          <h2>Contract Details</h2>
          <p>Address: {nft.contract.address}</p>
          <p>Name: {nft.contract.name}</p>
        </div>
      )}
      {nft.external_link && (
        <a href={nft.external_link} target="_blank" rel="noreferrer">
          View on External Link
        </a>
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
