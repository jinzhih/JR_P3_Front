import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";

class Welcome extends Component {
    render() {
        //Welcome loop start
        const welcomedata = this.props.welcomesData.map((welcome, index) =>( 
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-box">
                    <Icofont icon={welcome.icon} />
                    <h3>{welcome.title}</h3>
                    <p>{welcome.content}</p>
                </div>
            </div>
            ));
        //Welcome loop END

        return (
            <React.Fragment>
                <section className="welcome-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectiontopTitle}</span>
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row">
                            {welcomedata}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

Welcome.propTypes = {
    sectiontopTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    welcomesData: PropTypes.array
};

Welcome.defaultProps = {
    sectiontopTitle: "WE ARE A PROFESSIONAL CLEANER",
    sectionTitle: "Welcome to",
    sectionTitleSpan: "Cleaning Expert",
    sectionContent:
        "We are located in Brisbane, working for professional cleaning for 5 years. We could offer you a best service.",

        welcomesData: [
        {
            icon: "icofont-magnet",
            title: "About Us",
            content:
                "We are one of Brisbane's top five cleaning companies. We have 5 years of experience and 100 employees. We can provide excellent service."
        },
        {
            icon: "icofont-laptop-alt",
            title: "What We Do",
            content:
                "We offer 4 main types cleaning services which are Daily house cleaning, Office cleaning, Moving out cleaning and Bathroom and kitchen cleaning."
        },
        {
            icon: "icofont-headphone-alt-2",
            title: "Fast Support",
            content:
                "You can also contact us by following way:Online.By phone, mail, SMS and relay services.By visiting one of our Regional Business Centres."
        }
    ]
};
export default Welcome;
