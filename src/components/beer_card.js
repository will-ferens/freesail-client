import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'

const BeerCard = (props) => {
    console.log(props)
    const beerCards = props.beers.map(beer => {
        return (
            <Card>
            <CardImg src="https://beerpulse.com/wp-content/uploads/2013/05/Duff-Beer-body-label.png"/>
            <CardBody>
                <CardTitle>{beer.title}</CardTitle>
                <CardSubtitle>{beer.style}</CardSubtitle>
                <CardText>{beer.description}</CardText>
                <Button>View Detail</Button>
            </CardBody>
            </Card>
        )
    })
    if(!props) {
        return <div></div>
    }
    if(props.beers != null) {
        
        return <div></div>
    } 
    if(props) {
        return <div></div>
    }
    
    
}

export default BeerCard