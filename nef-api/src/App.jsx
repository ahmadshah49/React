import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/CollectionPage";
import NFTDetail from "./pages/NFTDetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:collectionSlug" element={<Collection />} />
          <Route path="/nft/:nftId" element={<NFTDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
