import React, { Component } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";


import { CLIENT_BASE_URL} from '../../routes/URLMap';
// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { Link } from "react-router-dom";
import { signupClient as signupFn } from "../../api/auth";
// import images signupClient
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";

class ClientSignupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clientName: '',
        clientDescription: '',
        clientEmail: '',
        clientPhone: '',
        isSuccess: false,
        error: null,
		isLoading: false,
    };

  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value } );
}


 

  register = () => {
    const userInfo = {
        clientName: this.state.clientName,
        clientDescription: this.state.clientDescription,
        clientEmail: this.state.clientEmail,
        clientPhone: this.state.clientPhone,
      
    };

    this.setState({ isLoading: true }, () => {
        signupFn(userInfo)
        .then(data => {
            this.setState({ isLoading: false, isSuccess: true }, () => {
                
                    
                 //   setToken(data.token);
                 //   setClientId(data.clientId);
                    const locationState = this.props.location.state;
                    const redirectTo =  `${CLIENT_BASE_URL}/${data._id}` || (locationState && locationState.from);
                    this.props.history.replace(redirectTo);
                
               
            });
        })
        .catch(error => this.setState({ error, isLoading: false, isSuccess: false }));
});
}

  componentDidMount() {
  
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2"></i>
          </Link>
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-soft-primary">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Register as a client</h5>
                          <p>Get your Handy Booking account now.</p>
                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profileImg} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>
                      <Link to="/">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img
                              src={logoImg}
                              alt=""
                              className="rounded-circle"
                              height="34"
                            />
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2">
                      <AvForm
                        className="form-horizontal"
                      
                      >
                        {this.state.isSuccess && this.state.isSuccess ? (
                          <Alert color="success">
                            Register User Successfully
                          </Alert>
                        ) : null}
                        {this.state.error &&
                        this.state.error ? (
                          <Alert color="danger">
                            {this.state.error}
                          </Alert>
                        ) : null}

                        {/* <div className="form-group">
                          <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div> */}

                        <div className="form-group">
                          <AvField
                            name="clientName"
                            label="Client Name"
                            type="text"
                            required
                            placeholder="Enter client name"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="clientDescription"
                            label="Client Description"
                            type="text"
                            required
                            placeholder="Enter Description"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="clientEmail"
                            label="clientEmail"
                            type="email"
                            required
                            placeholder="Enter email"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="clientPhone"
                            label="clientPhone"
                            type="text"
                            required
                            placeholder="Enter phone number"
                            onChange={this.handleChange}
                          />
                        </div>
                        
                        
                        <div className="mt-4">
                          <button
                            onClick={this.register}
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            By registering you agree to the Handy Booking{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Already have an account ?{" "}
                    <Link
                      to="/login"
                      className="font-weight-medium text-primary"
                    >
                      {" "}
                      Login
                    </Link>{" "}
                  </p>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}


export default ClientSignupView;
