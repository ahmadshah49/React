import { configureStore } from "@reduxjs/toolkit";
import collecitionReducer from "./features/collections/collectionsSlice";
import nftsReducer from "./features/nfts/nftsSlice";
import nftDetailsReducer from "./features/nftDetails/nftdetails";
export const store = configureStore({
  reducer: {
    collections:collecitionReducer,
    nfts:nftsReducer,
    nftDeatils:nftDetailsReducer
  },
});
