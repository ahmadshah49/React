import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNFTs } from "../features/nfts/nftsSlice";
import { fetchCollections } from "../features/collections/collectionsSlice";

const CollectionPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nfts.nfts);
  const nftsStatus = useSelector((state) => state.nfts.status);
  const collections = useSelector((state) => state.collections.collections);
  const collectionsStatus = useSelector((state) => state.collections.status);
  const error = useSelector((state) => state.nfts.error);

  useEffect(() => {
    if (nftsStatus === "idle") {
      dispatch(fetchNFTs(slug));
    }
  }, [nftsStatus, dispatch, slug]);

  useEffect(() => {
    if (collectionsStatus === "idle") {
      dispatch(fetchCollections());
    }
  }, [collectionsStatus, dispatch]);

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
      {nftsStatus === "loading" || collectionsStatus === "loading" ? (
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
      {nftsStatus === "failed" && <p>{error}</p>}
    </div>
  );
};

export default CollectionPage;
