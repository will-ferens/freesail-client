import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/fetch_beers'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'
import BeerCard from './beer_card'
class Home extends Component {
  constructor(props) {
    super(props)
    this.props.fetchBeers()
  }
  
  

  render() {
    const beers = this.props.beers
    console.log(beers)
    return (
      <div className="App">
        <Link to="/add"><Button outline color="primary">Add New Brew</Button></Link>
       
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBeers}, dispatch)
}

function mapStateToProps(state) {
  return { beers: state.beers }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
