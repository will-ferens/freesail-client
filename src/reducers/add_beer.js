import { addBeerActions } from '../constants/beer_constants'

const initialState = {
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case addBeerActions.POST_BEER:
            return {
                ...state,
                loading: true,
                error: null
            }
        case addBeerActions.POST_BEER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case addBeerActions.POST_BEER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default: 
            return state
    }
}