import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Collection {
  slug: string;
  image_url: string;
  name: string;
}

const Home: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://api.opensea.io/api/v1/collections",
          {
            params: {
              offset: 0,
              limit: 10,
              asset_owner: "0x1234567890abcdef1234567890abcdef12345678", // Replace with a valid wallet address
            },
            headers: {
              "X-API-KEY": import.meta.env.VITE_OPENSEA_API_KEY,
            },
          }
        );

        setCollections(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load collections. Please try again later.");
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>NFT Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.slug}>
            <Link to={`/collection/${collection.slug}`}>
              <img src={collection.image_url} alt={collection.name} />
              <p>{collection.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
