import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/add"><Button outline color="primary">Add New Brew</Button></Link>
      </div>
    )
  }
}

export default Home
