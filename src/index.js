import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './components/home'
import AddBeer from './components/add_a_beer'
import Vote from './components/vote'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={AddBeer} />
                <Route path="/vote" component={Vote} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
