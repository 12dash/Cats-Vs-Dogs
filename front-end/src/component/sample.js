import Axios from 'axios';
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import "../stylesheet/sample.css";

import Cat1 from "../sampleImages/Cat/0.jpg";
import Cat2 from "../sampleImages/Cat/1.jpg";
import Cat3 from "../sampleImages/Cat/2.jpg";

import Dog1 from "../sampleImages/Dog/0.jpg";
import Dog2 from "../sampleImages/Dog/1.jpg";
import Dog3 from "../sampleImages/Dog/2.jpg";

import Individual from "./individual";

class Sample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container sample_box">
                <FadeIn delay="100">
                    <div className="row mx-auto my-auto">
                        <Individual src={Cat1} />
                        <Individual src={Dog2} />
                        <Individual src={Cat3} />
                    </div>
                    <br />
                    <div className="row mx-auto my-auto">
                        <Individual src={Dog1} />
                        <Individual src={Cat2} />
                        <Individual src={Dog3} />
                    </div>
                </FadeIn>
            </div>
        );
    }
}
export default Sample;