import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { } from "../../store/actions";

//Simple bar
import SimpleBar from "simplebar-react";

//i18n
import { withNamespaces } from 'react-i18next';
import SidebarContent from "./SidebarContent";


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {
        layout: state.Layout
    };
};
export default connect(mapStatetoProps, {})(withRouter(withNamespaces()(Sidebar)));
