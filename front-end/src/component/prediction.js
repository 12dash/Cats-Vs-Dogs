import Axios from 'axios';
import React, { Component } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import AnimatedNumber from "animated-number-react";
import "../stylesheet/prediction.css";

const axios = require("axios");

class Predict extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            fetched: false,
            fetching: false,
            result: "",
            cat: "",
            dog: ""
        }
        this.formatValue = this.formatValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.display = this.display.bind(this);
    }
    formatValue = (value) => value.toFixed(2);

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            fetching: true,
            fetched: false
        })
        console.log('Predicting');
        console.log(this.state);
        var current = this
        axios.post("http://localhost:5000/predict", { "url": this.state.url })
            .then(res => {
                console.log(res)
                current.setState({
                    result: res.data['out'],
                    cat: parseFloat(res.data["Cat"]),
                    dog: (res.data["Dog"]),
                    fetched: true
                })
            })

    }
    onChange(event) {
        this.setState({ url: event.target.value, fetching: false });

        event.preventDefault()
    }

    display() {
        if (this.state.fetching === true) {
            if (this.state.fetched === true) {
                return (
                    <div className="row mx-auto my-auto">
                        <div className="col mx-auto my-auto">
                            <img src={this.state.url} />
                        </div>
                        <div className="col mx-auto my-auto">
                            It's a 
                            <div className="heading">
                                {this.state.result}
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    Cat
                                    <br />
                                    <AnimatedNumber className = "nums"
                                        value={this.state.cat}
                                        formatValue={this.formatValue}
                                    />%
                                </div>
                                <div className="col-6">
                                    Dog
                                    <br />
                                    <AnimatedNumber className = "nums"
                                        value={this.state.dog}
                                        formatValue={this.formatValue}
                                    />%
                                </div>
                            </div>
                        </div>
                    </div>);
            }
            else {
                return (
                    <div className="row mx-auto my-auto">
                        <div className="col-6 mx-auto my-auto">
                            <img src={this.state.url} />
                        </div>
                        <div className="col-6 mx-auto my-auto">
                            Loading
                            <br />
                            <Spinner animation="grow" />
                        </div>
                    </div>
                )
            }
        }
    }
    render() {
        return (
            <div className="container">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Url</Form.Label>
                        <Form.Control type="url" name="url" onChange={this.onChange} value={this.state.url} placeholder="Enter the url for the image" />
                        <Form.Text className="text-muted">
                            We will fetch it for you from the internet
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Predict
                     </Button>
                </Form>
                <br/>
                <br/>
                {this.display()}
            </div>

        );
    }
}
export default Predict;