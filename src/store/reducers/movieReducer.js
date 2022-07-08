import { 
  SET_LOADING,
  SET_ERROR,
  SET_MOVIES,
  SET_MOVIE_DETAIL,
  SET_MOVIE_PAGE,
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
  movie: {},
  moviePage: 1
}

function  reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload }
    case SET_ERROR:
      return { ...state, isError: payload }
    case SET_MOVIES:
      return { ...state, movies: payload }
    case SET_MOVIE_DETAIL:
      return { ...state, movie: payload }
    case SET_MOVIE_PAGE:
      return { ...state, moviePage: payload }
    default:
      return state
  }
}

export default reducer