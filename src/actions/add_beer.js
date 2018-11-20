import { addBeerActions } from '../constants/beer_constants'
import { history } from '../helpers/history'

const ADD_URL = 'http://localhost:3001/beer'

export const addBeerBegin = () => ({
    type: addBeerActions.POST_BEER
})

export const addBeerSuccess = beer => ({
    type: addBeerActions.POST_BEER_SUCCESS,
    payload: { beer }
})

export const addBeerFailure = error => ({
    type: addBeerActions.POST_BEER_FAILURE,
    payload: error
})

export function addBeer(beer) {
    const formData = new FormData()
    formData.append(beer)

    return dispatch => {
        dispatch(addBeerBegin())
        return fetch(ADD_URL, {
            method: 'POST',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            body: formData
        })
        .then(response => {
            return response.json()
        })
        .then(response => {
            history.push('/')
            dispatch(addBeerSuccess(response))
        })
        .catch(error => dispatch(addBeerFailure(error)))
    }
}