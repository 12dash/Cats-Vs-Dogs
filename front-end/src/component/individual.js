import React, { Component } from "react";
import { Spinner, Card } from "react-bootstrap";

const imageToBlob = require('image-to-blob');
const axios = require('axios');

class Individual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            fetched: false,
            pred: ""
        }
        this.make_prediction = this.make_prediction.bind(this);
    }

    make_prediction(err, blob) {
        console.log("Sent")
        this.setState({
            fetching: true
        })
        var current = this
        axios.post("http://localhost:5000/sample_images", blob)
            .then((res) => {
                console.log(res)
                current.setState({
                    fetched: true,
                    pred: res['data']
                })
            })
    }

    render() {
        if (this.state.fetching === false) {
            imageToBlob(this.props.src, this.make_prediction);
        }
        return (
            <div className="col sample mx-auto my-auto">
                <Card>
                    <Card.Img className="cardImage" variant="top" src={this.props.src} />
                    <Card.Body>
                        {this.state.fetched ? <Card.Text><hr/>{this.state.pred}</Card.Text> : <Card.Text><hr/><Spinner animation="grow" /><br />Loading</Card.Text>}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Individual;