import { 
  SET_LOADING,
  SET_ERROR,
  SET_GENRES,
  SET_GENRE_MOVIES
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

export function setGenres(payload) {
  return {
    type: SET_GENRES,
    payload: payload 
  }
}

export function setGenreMovies(payload) {
  return {
    type: SET_GENRE_MOVIES,
    payload: payload 
  }
}

export function getGenres() {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${api}/genre/movie/list?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setGenres(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getGenreMovies(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${api}/movie/upcoming?api_key=${apiKey}&with_genres=${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setGenreMovies(data))
        console.log("hehe", data);
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}


