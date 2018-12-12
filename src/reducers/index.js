import { combineReducers } from 'redux'

import AddBeer from './add_beer'
import BeersReducer from './fetch_beers'
import VoteReducer from './vote_add_beer'

const rootReducer = combineReducers({
    beers: BeersReducer,
    AddBeer,
    VoteReducer
})

export default rootReducer