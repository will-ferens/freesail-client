import { addBeerActions } from '../constants/beer_constants'

import axios from 'axios'

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
    console.log(beer.labelImage)
    const formData = new FormData()
    formData.append('title', beer.title)
    formData.append('style', beer.style)
    formData.append('description', beer.description)
    formData.append('abv', beer.abv)
    formData.append('birthday', beer.birthday)
    formData.append('labelImage', beer.labelImage)
    const config = {
        'content-type': 'multipart/form-data'
    }
    const post = axios.post(ADD_URL, formData, config)

    return {
        type: addBeerActions.POST_BEER_SUCCESS,
        payload: post
    }
}