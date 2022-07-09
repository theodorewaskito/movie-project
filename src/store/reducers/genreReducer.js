import { 
  SET_LOADING,
  SET_ERROR,
  SET_GENRES,
  SET_GENRE_NAME,
  SET_GENRE_MOVIES,
  SET_GENRE_MOVIES_PAGE
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  genres: [],
  genreMovies: [],
  page: 1,
  genreName: ''
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
    case SET_GENRE_NAME:
      return { ...state, genreName: payload }
    case SET_GENRE_MOVIES:
      return { ...state, genreMovies: payload }
    case SET_GENRE_MOVIES_PAGE:
      return { ...state, page: payload }
    default:
      return state
  }
}

export default reducer