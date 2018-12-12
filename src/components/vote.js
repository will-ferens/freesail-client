import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { UP_ARROW }from '../constants/svg'
import { Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button, 
    Col, 
    Row } from 'reactstrap'

class Vote extends Component {

    render () {
        const vote = this.props.vote.voteBeers
        return (
            <Row>
                <h1>Vote for your favorite and add a comment below!</h1>
                {vote.map(beer => {
                    return (
                        <Col sm="3" className="d-flex align-items-stretch" key={beer._id} style={{padding: '10px'}} >
                            <Card >
                                <div className="text-center">
                                    <CardImg style={{maxWidth: '318px', height: 'auto'}}  src={beer.labelImage}/>
                                </div>
                                <CardBody className="d-flex flex-column">
                                    <CardTitle>{beer.title}</CardTitle>
                                    <CardSubtitle>{beer.style}</CardSubtitle>
                                    <CardText><small>{beer.abv}% ABV</small></CardText>
                                    <CardText>{beer.description}</CardText>
                                    <Button>Vote</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return { vote: state.VoteReducer}
}
export default connect(mapStateToProps, null)(Vote)