import { 
  SET_LOADING,
  SET_ERROR,
  SET_GENRES,
  SET_GENRE_MOVIES
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  genres: [],
  genreMovies: []
}

function  reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload }
    case SET_ERROR:
      return { ...state, isError: payload }
    case SET_GENRES:
      return { ...state, genres: payload }
    case SET_GENRE_MOVIES:
      return { ...state, genreMovies: payload }
    default:
      return state
  }
}

export default reducer