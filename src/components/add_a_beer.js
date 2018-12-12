import React, { Component } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap'
import DatePicker from 'react-date-picker'
import { history } from '../helpers/history'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addBeer } from '../actions/add_beer'

class AddBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            beerStyle: '',
            description: '',
            abv: '',
            date: new Date(),
            labelImage: '',
            success: false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }


    onTitleChange = title => this.setState({ title })
    
    onStyleChange = beerStyle => this.setState({ beerStyle: beerStyle })
    
    onDescriptionChange = description => this.setState({ description: description })
    
    onAbvChange(abv) {
        const abvFloat = parseFloat(abv)
        this.setState({ abv: abvFloat })
    } 
    onDateChange = date => this.setState({ date: date })
    
    onLabelImageChange = (event) => {
        const file = event.target.files[0]
        console.log(file)
        this.setState({labelImage: file})
    }
    onFormSubmit = event => {
        event.preventDefault()
        console.log(this.props)
        const beer = {
            title: this.state.title, 
            style: this.state.beerStyle, 
            description: this.state.description, 
            abv: this.state.abv, 
            birthday: this.state.date, 
            labelImage: this.state.labelImage
        }
        this.props.addBeer(beer)

    }
    
    render() {
        

        return (
            <div id="add-form" className="container">
                <h1>Add a New Beer</h1>
                <form onSubmit={this.onFormSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input 
                            type="title" 
                            name="title"
                            value={this.state.title}
                            onChange={event => this.onTitleChange(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Style</Label>
                        <Input 
                            type="beerStyle" 
                            name="style"
                            value={this.state.beerStyle}
                            onChange={event => this.onStyleChange(event.target.value)}
                        
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input 
                            type="textarea" 
                            name="description"
                            value={this.state.description}
                            onChange={event => this.onDescriptionChange(event.target.value)}                            
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>ABV</Label>
                        <Input 
                            type="number" 
                            step="any"
                            name="abv"
                            value={this.state.abv}
                            onChange={event => this.onAbvChange(event.target.value)}
                        />
                    </FormGroup>
                    <div className="row">
                        <div className="col-sm">
                            <Label>Birthday</Label>
                            <div>
                                <DatePicker
                                    onChange={this.onDateChange}
                                    value={this.state.date}
                                />
                            </div>
                            </div>
                        <div className="col-sm">
                            <Label for="exampleFile">Label Image</Label>
                            <Input 
                                type="file" 
                                name="file" 
                                onChange={this.onLabelImageChange}
                            />
                        </div>
                    </div>
                    <Button type="submit" style={{marginTop: '10px'}} outline color="success">Submit</Button>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addBeer }, dispatch)
}

function mapStateToProps(state) {
    return {
        AddBeer: state.AddBeer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBeer)