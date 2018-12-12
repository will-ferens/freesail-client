import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/fetch_beers'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'
import BeerCard from './beer_card'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      isVote: false
    }
  }

  componentDidMount() {
    this.props.fetchBeers()
  }
  
  _onVoteClick (event) {
    event.preventDefault()
    this.setState({isVote: !this.state.isVote})

  }

  render() {
    

    return (
      <div className="App">
        <Link to="/add"><Button outline color="primary" style={{margin: '10px'}}>Add New Brew</Button></Link>
        <Button outline color="info" onClick={(event) => this._onVoteClick(event)}>Start Vote</Button>
        {this.props.vote.voteBeers.length !== 0 ? 
          <div>
            <h2>Current Vote:</h2>
            {this.props.vote.voteBeers.map(beer => {
              return (
                <div key={`voteId: ${beer._id}`}>
                  <ul>
                    <li>{beer.title}</li>
                  </ul>
                </div>
              )
            })}
            {this.props.vote.voteBeers.length >= 2 ? <Link to="/vote"><Button outline color="success"> Go to Vote</Button></Link> : <div></div>}
          </div>
          : <div></div>}
        <BeerCard isVote={this.state.isVote} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBeers}, dispatch)
}

function mapStateToProps(state) {
  return { beers: state.beers, vote: state.VoteReducer }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
