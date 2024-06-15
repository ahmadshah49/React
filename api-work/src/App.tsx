import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import NFTDetail from "./pages/NFTDetail";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:slug" element={<Collection />} />
        <Route path="/nft/:id" element={<NFTDetail />} />
      </Routes>
    </>
  );
};

export default App;
