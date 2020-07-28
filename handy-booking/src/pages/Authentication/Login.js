import React from 'react';
import { Button, Form, Header, Input, Message, Segment } from 'semantic-ui-react';

import FlexContainer from '../../UI/flexContainer/FlexContainer';
import { TRADIE_BASE_URL, CLIENT_BASE_URL, SIGNUP_URL} from '../../routes/URLMap';
import { loginUser as loginUserFn } from '../../api/auth';
import { setToken, 
         getTokenRole,
	     setClientId,
	     setTradieId,
	     removeClientId,
	     removeBusinessId
} from '../../utils/auth';
import { CLIENT_ROLE, TRADIE_ROLE, POST_ORDER_AT_HOMEPAGE } from "../../utils/variables";

import './styles/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            account: '',
            error: null,
            isLoading: false,
            password: '',
        };
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value } );
    }

    loginInitialSetup = data => {
		setToken(data.token);
		removeClientId();
		removeBusinessId();
    };

    clientLogin = data => {
        console.log(data);
		setClientId(data.clientId);
		const locationState = this.props.location.state;
		//const redirectTo =  `${CLIENT_BASE_URL}/${data.clientId}`;
		const redirectTo = "/clients/A134"	 
		this.props.history.replace(redirectTo);
    };
    
    TradieLogin = data => {
		setTradieId(data.tradieId);
		const locationState = this.props.location.state;
		const redirectTo =  `${TRADIE_BASE_URL}/${data.tradieId}`;
			 
		this.props.history.replace(redirectTo);
	};

    login1 = data => {
        this.setState({ error: null, isLoading: true }, () => {
            loginUserFn(this.state.account, this.state.password)
                .then(data => {
                    this.setState({ isLoading: false }, () => {

                        setToken(data.token);
                        setClientId(data.clientId);
                        const locationState = this.props.location.state;
                        const redirectTo =  `${CLIENT_BASE_URL}/${data.clientId}` || (locationState && locationState.from);
                        this.props.history.replace(redirectTo);
                    });
                })
                .catch(error => this.setState({ error, isLoading: false }));
        });
    }

    login2 = data => {
        this.setState({ error: null, isLoading: true }, () => {
            loginUserFn(this.state.account, this.state.password)
                .then(data => {
                    this.setState({ isLoading: false }, () => {
                        if (data.role === CLIENT_ROLE) {
							
                            setToken(data.token);
                            setClientId(data.clientId);
                            const locationState = this.props.location.state;
                            const redirectTo =  `${CLIENT_BASE_URL}/${data.clientId}` || (locationState && locationState.from);
                            this.props.history.replace(redirectTo);
						} else {
                            setToken(data.token);
                            setClientId(data.tradieId);
                            const locationState = this.props.location.state;
                            const redirectTo =  `${TRADIE_BASE_URL}/${data.tradieId}` || (locationState && locationState.from);
                            this.props.history.replace(redirectTo);
                        }
                       
                    });
                })
                .catch(error => this.setState({ error, isLoading: false }));
        });
    }
    login = () => {
		const loginInfo = {
			account: this.state.account,
			password: this.state.password
		};

		this.setState({ error: null, isLoading: true }, () => {
			loginUserFn(loginInfo)
				.then(data => {
					this.setState({ isLoading: false }, () => {
						this.loginInitialSetup(data);
						if (getTokenRole() === CLIENT_ROLE) {
							this.clientLogin(data);
						} else if (getTokenRole() === TRADIE_ROLE) {
							this.businessLogin(data);
						} else {
							this.props.history.replace(SIGNUP_URL);
						}
					});
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};



    render() {
        return (
            <FlexContainer justifyContentValue="center">
                <Form
                    className="login-form" size="large"
                    error={!!this.state.error}
                    loading={this.state.isLoading}
                >
                    <Header size="large" textAlign="center">
                        Handy Booking
                    </Header>
                    <Segment stacked>
                        <Form.Field>
                            <Input
                                icon='user'
                                iconPosition='left'
                                name="account"
                                onChange={this.handleChange}
                                placeholder='account'
                                value={this.state.account}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                icon='lock'
                                iconPosition='left'
                                name="password"
                                onChange={this.handleChange}
                                placeholder='Password'
                                type="password"
                                value={this.state.password}
                            />
                        </Form.Field>
                       {!!this.state.error && (
                            <Message
                                error
                                header="Login failed"
                                content="Please check your account and password"
                            />
                       )}
                        <Button
                            size="large"
                            fluid
                            primary
                            onClick={this.login2}
                        >
                            Login
                        </Button>
                    </Segment>
                </Form>
            </FlexContainer>
        );
    }
};

export default Login;



