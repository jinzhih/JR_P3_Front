import React, { Component } from "react";
import { Nav, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import Icofont from "react-icofont";
import UserProfileCard from "../user/components/UserProfileCard";
import UserManageBar from "../user/components/UserManageBar";

export class SideNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

    render() {
        return (
            <React.Fragment>
                <Nav.Link onClick={this.handleShow}><span></span></Nav.Link>

                  <Modal show={this.state.show} onHide={this.handleClose} className="right">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                   
                       < UserManageBar/>
                    </Modal.Body>
                  </Modal>
            </React.Fragment>
            
    );
  }
}
    SideNav.PropsTypes = {
        logotext: PropTypes.string,
        logotextspan: PropTypes.string,
        content: PropTypes.string,
        locationbolt: PropTypes.string,
        locationnormal: PropTypes.string,
        phonebolt: PropTypes.string,
        phonenormal: PropTypes.string,
        mailbolot: PropTypes.string,
        mailnormal: PropTypes.string,
        facebooklink: PropTypes.string,
        twitterlink: PropTypes.string,
        instagramlink: PropTypes.string,
        linkedinlink: PropTypes.string,
        pinterestlink: PropTypes.string,

}
SideNav.defaultProps = {
    logotext: ".Exo",
    logotextspan: "LOT.",
    content: "Exolot have much planned for the future, working with great clients and continued software development. If you'd like to join our team, then we'd also love to hear from you.",
    locationbolt: "27 Division St",
    locationnormal: "New York, NY 10002, USA",
    phonebolt: "+0 (321) 984 754",
    phonenormal: "Give us a call",
    mailbolot: "exolot@gmail.com",
    mailnormal: "24/7 online support",
    facebooklink: "#",
    twitterlink: "#",
    instagramlink: "#",
    linkedinlink: "#",
    pinterestlink: "#",
}
export default SideNav;
