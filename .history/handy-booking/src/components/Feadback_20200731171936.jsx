import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";

export class Feadback extends Component {
  render() {
    //Start Feadback Loop
        const feadbackdata = this.props.feadbacksData.map((feadback, index ) =>(
            <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                <div className="single-feedback">
                    <div className="client-info">
                        <div className="img">
                            <img src={feadback.image} alt="client" />
                        </div>
                        <h4>{feadback.name}</h4>
                        <span>{feadback.profession}</span>
                    </div>

                    <p>{feadback.content}</p>

                    <i className="icofont-quote-right" />
                </div>
            </div>
        ));
    //End Feadback Loop
    return (
        <React.Fragment>
            <section className="feedback-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>

                    <div className="row">
                        <OwlCarousel 
                            className="feedback-slides owl-theme"
                            loop={true}
                            autoplay={true}
                            nav={false}
                            mouseDrag={true}
                            autoplayHoverPause={true}
                            responsiveClass={true}
                            dots={true}
                            navText={[
                                "<i class='icon icon-Arrow'></i>",
                                "<i class='icon icon-Arrow'></i>"
                            ]}
                            responsive={{
                                0:{
                                    items:1,
                                },
                                768:{
                                    items:2,
                                },
                                1200:{
                                    items:3,
                                }
                            }}
                        >
                            {feadbackdata}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
Feadback.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    feadbacksData: PropTypes.array,

}
Feadback.defaultProps = {
    sectionTitle: "Client",
    sectionTitleSpan: "Feedback",
    sectionContent: "Customers always give us a high evaluation of our service.",
    feadbacksData:[
        {
            image: require("../../src/assets/img/client1.jpg"),
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "I am very satisfied with the service, the room looks neat and tidy. Although the price is not very cheap, but the cleaning is great, it is worth the price.",
        },
        {
            image: require("../../src/assets/img/client2.jpg"),
            name: "Annie Liu",
            profession: "Bank staff",
            content: "I am very satisfied with the service, the room looks neat and tidy. Although the price is not very cheap, but the cleaning is great, it is worth the price.",
        },
        {
            image: require("../../src/assets/img/client3.jpg"),
            name: "Si Zhao",
            profession: "Engineer",
            content: "I am very satisfied with the service, the room looks neat and tidy. Although the price is not very cheap, but the cleaning is great, it is worth the price.",
        },
        {
            image: require("../../src/assets/img/client1.jpg"),
            name: "Josh Buttler",
            profession: "Teacher",
            content: "I am very satisfied with the service, the room looks neat and tidy. Although the price is not very cheap, but the cleaning is great, it is worth the price.",
        }
    ]

}
export default Feadback
