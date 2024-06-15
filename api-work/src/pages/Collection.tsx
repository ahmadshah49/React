import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface CollectionDetails {
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  safelist_status: any;
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: { address: string }[];
  editors: string[];
  fees: { fee: number; recipient: string; required: boolean }[];
  required_zone: string;
  rarity: {
    strategy_version: string;
    calculated_at: string;
    max_rank: number;
    total_supply: number;
  };
  payment_tokens: {
    symbol: string;
    address: string;
    chain: string;
    image: string;
    name: string;
    decimals: number;
    eth_price: string;
    usd_price: string;
  }[];
  total_supply: number;
  created_date: string;
}

const Collection: React.FC = () => {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();
  const [collection, setCollection] = useState<CollectionDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v2/collections/${collectionSlug}`,
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_OPENSEA_API_KEY,
            },
          }
        );

        setCollection(response.data.collection);
        setLoading(false);
      } catch (error) {
        setError("Failed to load collection. Please try again later.");
        setLoading(false);
      }
    };

    fetchCollection();
  }, [collectionSlug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!collection) return <div>No collection found.</div>;

  return (
    <div>
      <h1>{collection.name}</h1>
      <img src={collection.image_url} alt={collection.name} />
      <p>{collection.description}</p>
      {/* Display additional collection details */}
    </div>
  );
};

export default Collection;
