import React, { Fragment } from "react";
import Bedrooms from "./components/Bedrooms";
import Bathrooms from "./components/Bathrooms";
import LeaseEnd from "./components/LeaseEnd";
import OtherClean from "./components/OtherClean";
import Location from "./components/Location";
import Date from "./components/Date";
import Time from "./components/Time";
import Price from "./components/Price";
import Description from "./components/Description";
import { createOrder } from "../../api/order";
import { CLIENT_BASE_URL } from "../../routes/URLMap";
import { POST_ORDER_AT_HOMEPAGE } from "../../utils/variables";
import ErrorMessage from "../../UI/ErrorMessage";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import { withRouter } from "react-router";
import { matchPath } from "react-router-dom";
import { convertValue } from "../../utils/helper";
import Geocode from "react-geocode";

class NewOrder extends React.Component {
  
    
    
        render() {
            return (
                <div className="client__take-order-page">
                    {
                        <Fragment>
                            <Grid
                                container
                                spacing={1}
                                className="client__take-order-container"
                            >
                                <p id="take-order">
                                    See how little it will cost...
                                </p>
                                <Grid item xs={12}>
                                    <Bedrooms
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                     <Bathrooms
                                       
                                    /> 
                                </Grid>
                                <Grid item xs={12}>
                                    <LeaseEnd
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <OtherClean
                                        
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Location
                                        
                                    /> */}
                                  
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Date
                                       
                                    /> */}
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Time
                                        
                                    /> */}
                                    
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Description
                                       
                                    /> */}
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Price
                                       
                                    /> */}
                                </Grid>
                            </Grid>
                        </Fragment>
                    }
                </div>
            );
        }
    }

    

export default withRouter(NewOrder);
