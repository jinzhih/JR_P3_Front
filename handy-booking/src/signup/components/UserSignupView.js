import React, { Component } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import { signup as signupFn } from "../../api/auth";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { CLIENT_ROLE } from "../../utils/variables";
import { setToken, 
    
    setClientId,
    setTradieId,
    
} from '../../utils/auth';
import { TRADIE_BASE_URL, CLIENT_BASE_URL} from '../../routes/URLMap';
// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { Link } from "react-router-dom";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        account: '',
        password: '',
        firstName: '',
        lastName: '',
        role:'client',
        error: null,
		isLoading: false,
    };

   
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value } );
}
handleChangeRole = event => {
    const name = "role";
    const value = event.target.value;
    this.setState({ [name]: value } );
}



  register = () => {
    const userInfo = {
        account: this.state.account,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role: this.state.role
    };

    this.setState({ isLoading: true }, () => {
        signupFn(userInfo)
        .then(data => {
            this.setState({ isLoading: false }, () => {
                if (data.role === CLIENT_ROLE) {
                    
                    setToken(data.token);
                    setClientId(data.clientId);
                    const locationState = this.props.location.state;
                    const redirectTo =  `client/signup` || (locationState && locationState.from);
                    this.props.history.replace(redirectTo);
                } else {
                    setToken(data.token);
                    setTradieId(data.tradieId);
                    const locationState = this.props.location.state;
                    const redirectTo =  `tradie/signup` || (locationState && locationState.from);
                    this.props.history.replace(redirectTo);
                }
               
            });
        })
        .catch(error => this.setState({ error, isLoading: false }));
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
                          <h5 className="text-primary">Free Register</h5>
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
                        {this.props.user && this.props.user ? (
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
                            name="account"
                            label="Account"
                            type="text"
                            required
                            placeholder="Enter account"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="firstName"
                            label="Firstname"
                            type="text"
                            required
                            placeholder="Enter First Name"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="lastName"
                            label="Lastname"
                            type="text"
                            required
                            placeholder="Enter Last Name"
                            onChange={this.handleChange}
                          />
                        </div>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Role</FormLabel>
                          <RadioGroup
                            row
                            aria-label="position"
                            name="position"
                            defaultValue="client"
                           
                          >
                            <FormControlLabel
                              name="client"
                              value="client"
                              control={<Radio color="primary" />}
                              label="Client"
                              labelPlacement="start"
                              onChange={this.handleChangeRole}
                            />

                            <FormControlLabel
                              name="tradie"
                              value="tradie"
                              control={<Radio color="primary" />}
                              label="Trader"
                              labelPlacement="start"
                              onChange={this.handleChangeRole}
                            />
                          </RadioGroup>
                        </FormControl>
                        
                        <div className="mt-4">
                          <button
                            onClick={this.register}
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Next
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            By registering you agree to the Skote{" "}
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
                  <p>
                    © {new Date().getFullYear()} Skote. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
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


export default Register;
