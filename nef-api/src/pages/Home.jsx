import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "8d2d0908f07a454aa9b331780d4bad05";

const Home = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://api.opensea.io/api/v2/collections",
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setCollections(response.data.collections);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {collections.map((collection) => (
        <div key={collection.slug}>
          <h2>{collection.name}</h2>
          <img src={collection.image_url} alt={collection.name} />
          <Link to={`/${collection.slug}`}>View Collection</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
