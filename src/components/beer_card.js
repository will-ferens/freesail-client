import React from 'react'
import { connect } from 'react-redux'
import { Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        Button, 
        Col, 
        Row } from 'reactstrap'
import { voteAddBeer } from '../actions/vote_add_beer'
import { bindActionCreators } from 'redux'

const BeerCard = (props) => {
    function voteAdd (beer) {
        console.log(beer)
    }

    if(props.loading) {
        return <div>Loading...</div>
    }

    if(props.error) {
        return <div>Whoops! There was an error.</div>
    }

    if(props.beers != null) {
        const isVote = props.isVote
        const beerCards = props.beers.beers.map(beer => {
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
                        {isVote ? <Button className="mt-auto" onClick={() => props.voteAddBeer(beer)}>Add to Vote</Button> : <div></div>}
                    </CardBody>
                    </Card>
                </Col>
            )
        })
        
        return <Row>{beerCards}</Row>
    } 
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ voteAddBeer }, dispatch)
}

function mapStateToProps(state) {
    return {
        beers: state.beers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard)