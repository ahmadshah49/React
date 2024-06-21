import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance"; // Assuming you have an axios instance configured

const HomePage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axiosInstance.get(
          "https://api.opensea.io/api/v2/collections?order_by=seven_day_volume&order_direction=desc"
        );

        setCollections(
          response.data.collections.sort((a, b) => {
            // Sort by creation date in descending order (oldest first)
            return new Date(a.created_date) - new Date(b.created_date);
          })
        );
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []); // Empty dependency array to fetch on component mount

  return (
    <div>
      <h1>Collections</h1>
      <div className="collections-grid">
        {collections.map((collection) => (
          <div key={collection.collection} className="collection-card">
            <h2>{collection.name}</h2>
            <img src={collection.image_url} alt={collection.name} />
            <Link to={`/collection/${collection.collection}`}>
              View Collection
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
