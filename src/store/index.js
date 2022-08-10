import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotes-slice";

const store = configureStore({
  reducer: { quote: quotesSlice.reducer },
});
export default store;
