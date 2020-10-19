import React, { Component } from 'react';
import TextTransition, { presets } from "react-text-transition";

import img1 from "../Images/Jumbotron.jpg"
import Cat from "../Images/Cat.png";
import Dog from "../Images/Dog.png";
import "../stylesheet/home.css";
import FadeIn from 'react-fade-in';

class Home extends Component {
    render() {
        return (
            <div className = "home">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-4 offset-1">
                            <img className='img1' src={img1} />
                        </div>
                        <div className="col-7">
                            <div className="row heading1">
                                <TextTransition
                                    text="Cats"
                                    springConfig={presets.wobbly}
                                />
                                &nbsp;
                                <TextTransition
                                    text="Vs"
                                    springConfig={presets.siff}
                                />
                                &nbsp;
                                <TextTransition
                                    text="Dogs"
                                    springConfig={presets.wobbly}
                                />
                            </div>
                            <hr />
                            <div className="text">
                                A machine learning approach to classify a web image as either a <b>CAT or DOG</b>.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <FadeIn delay = '200'>
                        <div className="row">
                            <div className="col-5 offset-1"><img src={Cat} className="images" alt="IMG" /></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-5 offset-1"><img src={Dog} className="images" alt="IMG" /></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        );
    }
}
export default Home;