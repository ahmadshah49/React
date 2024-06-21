import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "8d2d0908f07a454aa9b331780d4bad05";

const Collection = () => {
  const { collectionSlug } = useParams();
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v2/collection/${collectionSlug}/nfts`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setNFTs(response.data.nfts);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNFTs();
  }, [collectionSlug]);

  return (
    <div>
      <h1>Collection Page - {collectionSlug}</h1>
      {nfts.map((nft) => (
        <div key={nft.identifier}>
          <h2>{nft.name}</h2>
          <img src={nft.image_url} alt={nft.name} />
          <p>Artist: {nft.creator}</p>
          <Link to={`/nft/${nft.identifier}`}>View NFT</Link>
        </div>
      ))}
    </div>
  );
};

export default Collection;
