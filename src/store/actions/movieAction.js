import { 
  SET_LOADING,
  SET_ERROR,
  SET_MOVIES,
  SET_MOVIE_DETAIL,
  SET_MOVIE_PAGE
} from "../actionType";
import api from '../api'
import apiKey from '../api/apiKey'

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload 
  }
}

export function setMovies(payload) {
  return {
    type: SET_MOVIES,
    payload: payload 
  }
}

export function setMovie(payload) {
  return {
    type: SET_MOVIE_DETAIL,
    payload: payload 
  }
}

export function setMoviePage(payload) {
  return {
    type: SET_MOVIE_PAGE,
    payload: payload 
  }
}


export function getPageMovies(id) {
  return function (dispatch, getState) {
    let page = getState().movieState.page
    page = id
    dispatch(setMoviePage(page))
  }
}

export function getMovies(page) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${api}/movie/upcoming?api_key=${apiKey}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setMovies(data))
        dispatch(setMoviePage(page))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getMovie(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${api}/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setMovie(data))
        console.log(data, 'search');
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}




