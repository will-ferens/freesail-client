import { combineReducers } from 'redux'

import AddBeer from './add_beer'
import BeersReducer from './fetch_beers'
const rootReducer = combineReducers({
    beers: BeersReducer,
    AddBeer
})

export default rootReducer