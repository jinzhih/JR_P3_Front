import React from 'react';
import { Button, Form, Header, Input, Message, Segment } from 'semantic-ui-react';

import FlexContainer from '../../UI/flexContainer/FlexContainer';
import { TRADIE_BASE_URL } from '../../routes/URLMap';
import { loginUser as loginUserFn } from '../../api/auth';
import { setToken } from '../../utils/auth';

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

    login = () => {
        this.setState({ error: null, isLoading: true }, () => {
            loginUserFn(this.state.account, this.state.password)
                .then(jwtToken => {
                    this.setState({ isLoading: false }, () => {
                        setToken(jwtToken);
                        const locationState = this.props.location.state;
                        const redirectTo = (locationState && locationState.from) || TRADIE_BASE_URL;
                        this.props.history.replace(redirectTo);
                    });
                })
                .catch(error => this.setState({ error, isLoading: false }));
        });
    }


    render() {
        return (
            <FlexContainer justifyContentValue="center">
                <Form
                    className="login-form" size="large"
                    error={!!this.state.error}
                    loading={this.state.isLoading}
                >
                    <Header size="large" textAlign="center">
                        Learning Management System
                    </Header>
                    <Segment stacked>
                        <Form.Field>
                            <Input
                                
                                name="account"
                                onChange={this.handleChange}
                                placeholder='account'
                                value={this.state.account}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                
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
                            onClick={this.login}
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



