import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";
import ReactWOW from 'react-wow';

export class Team extends Component {
  render() {
    //Start Team Loop
    const teamdata = this.props.teamsData.map((team, index ) =>(
        <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
            <div className="single-team">
                <img src={team.img} alt="team-img" />
                <ReactWOW>
                    <ul className="member-social-links wow fadeInUp">
                        <li><a href={team.sociallink1} className={team.socialicon1}> </a></li>
                        <li><a href={team.sociallink2} className={team.socialicon2}> </a></li>
                        <li><a href={team.sociallink3} className={team.socialicon3}> </a></li>
                        <li><a href={team.sociallink4} className={team.socialicon4}> </a></li>
                    </ul>
                </ReactWOW>
                <h3>{team.name}</h3>
                <span>{team.profession}</span>
            </div>
        </div>
    ));
    //End Team Loop
    return (
        <React.Fragment>
            <section id="team" className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>
                    <div className="row">
                        <OwlCarousel 
                            className="team-slides owl-theme"
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
                                576:{
                                    items:2,
                                },
                                768:{
                                    items:3,
                                },
                                1200:{
                                    items:4,
                                }
                            }}
                        >
                            {teamdata}
                        </OwlCarousel>
                    </div>
                </div>
                <div className="animation-box1"><img src={this.props.animationimg1} alt="animateimage" /></div>
                <div className="animation-box2"><img src={this.props.animationimg2} alt="animateimage" /></div>
                <div className="animation-box3"><img src={this.props.animationimg3} alt="animateimage" /></div>
                <div className="animation-box4"><img src={this.props.animationimg4} alt="animateimage" /></div>
            </section>
        </React.Fragment>
    );
  }
}
Team.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    animationimg1: PropTypes.string,
    animationimg2: PropTypes.string,
    animationimg3: PropTypes.string,
    animationimg4: PropTypes.string,
    teamsData: PropTypes.array,
}
Team.defaultProps = {
    sectionTitle: "Expert",
    sectionTitleSpan: "Team",
    sectionContent: "We provide many professional teams and you can find the best choice for you.",
    animationimg1: require("../../src/assets/img/team1.jpeg"),
    animationimg2: require("../../src/assets/img/team2.jpeg"),
    animationimg3: require("../../src/assets/img/team3.jpeg"),
    animationimg4: require("../../src/assets/img/team4.jpeg"),
    teamsData: [
        {
            img: require("../../src/assets/img/team1.jpeg"),
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team2.jpeg"),
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team3.jpeg"),
            name: "Maxwel Smith",
            profession: "House Cleaning Team",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team4.jpeg"),
            name: "Lucy Doe",
            profession: "Apartment Cleaning Team",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team1.jpeg"),
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team2.jpeg"),
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team3.jpeg"),
            name: "Maxwel Smith",
            profession: "House Cleaning Team",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team4.jpeg"),
            name: "Lucy Doe",
            profession: "Apartment Cleaning Team",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team1.jpeg"),
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team2.jpeg"),
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team3.jpeg"),
            name: "Maxwel Smith",
            profession: "House Cleaning Team",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team4.jpeg"),
            name: "Lucy Doe",
            profession: "Apartment Cleaning Team",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        }
        
        
    ]

}
export default Team
