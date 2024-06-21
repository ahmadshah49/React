import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const NFTDetailPage = () => {
  const { chain, address, id } = useParams();
  const [nftData, setNftData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chain || !address || !id) {
      setError(new Error("Invalid parameters"));
      setLoading(false);
      console.log(chain, address, id);
      return;
    }

    const fetchNFTData = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${id}`
        );
        console.log(response.data);
        setNftData(response.data.nft); // Access the 'nft' object from the response
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchNFTData();
  }, [chain, address, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!nftData) return <div>No data available</div>;

  return (
    <div>
      <h1>{nftData.name}</h1>

      <img className="w-40" src={nftData.image_url} alt={nftData.name} />
      <p>{nftData.description}</p>
      {/* Add more NFT details as needed */}
    </div>
  );
};

export default NFTDetailPage;
