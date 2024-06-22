import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CollectionPage from "./pages/CollectionPage";
import NFTDetailPage from "./pages/NFTDetailPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection/:slug" element={<CollectionPage />} />
        <Route path="/nft/:chain/:address/:id" element={<NFTDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
