import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";

export class Feadback extends Component {
  render() {
    //Start Feadback Loop
        const feadbackdata = this.props.feadbacksData.map((feadback, index ) =>(
            <div className="col-lg-20 col-md-20 col-sm-20" key={index}>
                <div className="single-feedback">
                    <div className="client-info">
                        <div className="img">
                            <img src={feadback.image} alt="client" />
                        </div>
                        <h4>{feadback.name}</h4>
                        <span>{feadback.profession}</span>
                    </div>

                    <p>{feadback.content}</p>
                    <p>{feadback.content}</p>
                    <p>{feadback.content}</p>

                    <i className="icofont-quote-right" />
                </div>
            </div>
        ));
    //End Feadback Loop
    return (
        <React.Fragment>
            <section className="feedback-area">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                        
                    </div>

                    <div className="row">
                        <OwlCarousel 
                            className="feedback-slides owl-theme"
                            
                            autoplay={true}
                            nav={false}
                            mouseDrag={true}
                            autoplayHoverPause={true}
                            responsiveClass={true}
                            
                         
                            responsive={{
                                0:{
                                    items:1,
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
    
    feadbacksData:[
        {
            image: require("../../../src/assets/img/client-avatar1.jpg"),
            name: "Josh Buttler",
            profession: "From China",
            content: "Lorem ipiqua. Risus lisis.",
            
        }
    ]

}
export default Feadback