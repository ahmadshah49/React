import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const collection_slug = useParams();
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          `{https://api.opensea.io/api/v2/collection/${collection_slug}`,
          {
            headers: {
              "X-API-KEY": "8d2d0908f07a454aa9b331780d4bad05",
            },
          }
        );
        setCollections(response.data.collections);
      } catch (error) {
        console.error("Failed to fetch collections", error);
      }
    };

    fetchCollections();
  }, [collection_slug]);

  return (
    <div>
      <h1 className="text-4xl font-bold my-8">NFT Collections</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <li key={`collection_slug`} className="bg-white p-4 rounded shadow">
            <Link to={`/collection/${collection_slug}`}>
              <img
                src={collection.image_url}
                alt={collection.name}
                className="w-full h-64 object-cover rounded"
              />
              <h2 className="text-2xl mt-4">{collection.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
