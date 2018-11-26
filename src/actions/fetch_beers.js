import axios from 'axios'

const GET_URL = 'http://localhost:3001/beer'

export const FETCH_BEERS = 'FETCH_BEERS'
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS'
export const FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE'

export const fetchBeersBegin = () => ({
    type: FETCH_BEERS
}) 

export const fetchBeersSuccess = beers => ({
    type: FETCH_BEERS_SUCCESS,
    payload: beers 
}) 

export const fetchBeersFailure = error => ({
    type: FETCH_BEERS_FAILURE,
    payload: { error }
}) 

export function fetchBeers() {
    return dispatch => {
        dispatch(fetchBeersBegin())
        axios.get(GET_URL)
        .then(response => {
            dispatch(fetchBeersSuccess(response.data))
        })
        .catch(error => dispatch(fetchBeersFailure(error)))
    }

}