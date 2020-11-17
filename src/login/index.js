import React, { Component } from 'react';
import { LoginWrap, LoginBox, Input, Button } from './style';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    render() {
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrap>
                    <LoginBox>
                        <Input placeholder="User Name" ref={(input) => { this.account = input }}></Input>
                        <Input placeholder="Password" type='password' ref={(input) => { this.password = input }}></Input>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
                    </LoginBox>
                </LoginWrap>
            )
        } else {
            return <Redirect to='/'></Redirect>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        const action = actionCreator.login(accountElem.value, passwordElem.value);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Login);