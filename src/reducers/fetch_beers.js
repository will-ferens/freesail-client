import { FETCH_BEERS, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from '../actions/fetch_beers'
const initialState = {
    loading: false,
    error: null,
    beers: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_BEERS:
            return  {
                ...state,
                loading: true
            }
        case FETCH_BEERS_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: action.payload
            }
        case FETCH_BEERS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }
        default:
            return state
    }
    
}