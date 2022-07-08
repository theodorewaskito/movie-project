import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";

const reducer = combineReducers({
  genreState: genreReducer,
  movieState: movieReducer
});

export default reducer;
