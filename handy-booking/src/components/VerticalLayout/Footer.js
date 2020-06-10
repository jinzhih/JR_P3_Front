import React, { Component } from "react";
import PropTypes from "prop-types";

export class Footer extends Component {
  render() {
    return (
        <React.Fragment>
           
        </React.Fragment>
    );
  }
}
Footer.PropsTypes = {
  copyrightText: PropTypes.string,
  footercopyrightLink1: PropTypes.string,
  footercopyrightText1: PropTypes.string,
  footercopyrightLink2: PropTypes.string,
  footercopyrightText2: PropTypes.string
};
Footer.defaultProps = {
  copyrightText: "Copyright @ 2019 Exolot. All rights reserved",
  footercopyrightLink1: "#",
  footercopyrightText1: "Terms & Conditions ",
  footercopyrightLink2: "#",
  footercopyrightText2: "Privacy Policy"
};
export default Footer;
