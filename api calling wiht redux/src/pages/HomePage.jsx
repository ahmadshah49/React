import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCollections } from "../features/collections/collectionsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections.collections);
  const collectionStatus = useSelector((state) => state.collections.status);
  const error = useSelector((state) => state.collections.error);

  useEffect(() => {
    if (collectionStatus === "idle") {
      dispatch(fetchCollections());
    }
  }, [collectionStatus, dispatch]);

  return (
    <div className="relative">
      {collectionStatus === "loading" ? (
        <div className="h-screen  inset-0 absolute bg-black/40">
          <h1 className="text-white text-8xl  flex items-center justify-center h-full">
            Loading...
          </h1>
        </div>
      ) : (
        <h1>Collections</h1>
      )}
      {collectionStatus === "failed" && <div>{error}</div>}
      <div className="flex flex-wrap justify-center">
        {collections.map((collection) => (
          <div
            key={collection.collection}
            className="bg-white rounded-lg shadow-lg m-4 p-4 w-[200px]"
          >
            {collection.contracts.map((contract) => (
              <h2 key={contract.address} className="font-bold">
                {contract.chain}
              </h2>
            ))}
            <h2 className="font-bold">{collection.name}</h2>
            <img
              className="mt-2 w-full h-48 object-cover"
              src={collection.image_url}
              alt={collection.name}
            />
            <Link
              className="text-blue-500"
              to={`/collection/${collection.collection}`}
            >
              View Collection
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
