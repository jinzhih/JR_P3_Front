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
            username: '',
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

    login = () =>{
        const username = this.state.username;
        const password = this.state.password;
        console.log(username);
        loginUserFn(username, password);
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
                                
                                name="username"
                                onChange={this.handleChange}
                                placeholder='username'
                                value={this.state.username}
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
                                content="Please check your username and password"
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



