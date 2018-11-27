import React from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap'

const BeerCard = (props) => {

    if(props.loading) {
        return <div>Loading...</div>
    }

    if(props.error) {
        return <div>Whoops! There was an error.</div>
    }

    if(props.beers != null) {
        const beerCards = props.beers.beers.map(beer => {
            return (
                <Col sm="2.8">
                    <Card key={beer._id}>
                    <CardImg style={{width: '318px', height: '180px'}} src={beer.labelImage}/>
                    <CardBody>
                        <CardTitle>{beer.title}</CardTitle>
                        <CardSubtitle>{beer.style}</CardSubtitle>
                        <CardText><small>{beer.abv}% ABV</small></CardText>
                        <CardText>{beer.description}</CardText>
                        <Button>View Detail</Button>
                    </CardBody>
                    </Card>
                </Col>
            )
        })
        
        return <Row>{beerCards}</Row>
    } 
    
}

function mapStateToProps(state) {
    return {
        beers: state.beers
    }
}

export default connect(mapStateToProps, null)(BeerCard)