import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNFTDetail } from "../features/nftDetails/nftdetails";

const NFTDetailPage = () => {
  const { chain, address, id } = useParams();
  const dispatch = useDispatch();
  const nftData = useSelector((state) => state.nftDetail.nft);
  const status = useSelector((state) => state.nftDetail.status);
  const error = useSelector((state) => state.nftDetail.error);

  useEffect(() => {
    if (chain && address && id) {
      dispatch(fetchNFTDetail({ chain, address, id }));
    }
  }, [dispatch, chain, address, id]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;
  if (!nftData) return <div>No data available</div>;

  return (
    <div>
      <h1>{nftData.name}</h1>
      <img className="w-40" src={nftData.image_url} alt={nftData.name} />
      <p>{nftData.description}</p>
    </div>
  );
};

export default NFTDetailPage;
