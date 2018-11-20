import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import DatePicker from 'react-date-picker'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addBeer } from '../actions/add_beer'

class AddBeer extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            date: new Date(),
        }

    }

    onChange = date => this.setState({ date })

    render() {
        
        return (
            <div id="add-form" className="container">
                <h1>Add a New Beer</h1>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="title" name="title"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Style</Label>
                        <Input type="style" name="style"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="title"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>ABV</Label>
                        <Input type="title" name="title"/>
                    </FormGroup>
                    <div className="row">
                        <div className="col-sm">
                            <Label>Birthday</Label>
                            <div>
                                <DatePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>
                            </div>
                        <div className="col-sm">
                            <Label for="exampleFile">Label Image</Label>
                            <Input type="file" name="file" />
                        </div>
                    </div>

                    <Button style={{marginTop: '10px'}} outline color="success">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddBeer