import React, { Component } from 'react';
import { LoginWrap, LoginBox, Input, Button } from './style';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Writer extends Component {
    render() {
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                <div>Write an new article</div>
            )
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Writer);