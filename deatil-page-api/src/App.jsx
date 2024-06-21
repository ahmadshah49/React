import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import NftDetailPage from "./pages/NftDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection/:slug" element={<CollectionPage />} />
        <Route path="/nft/:id" component={<NftDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
