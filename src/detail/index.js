import React, {Component} from 'react';
import {DetailWrap, Header,Content} from './style';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class Detail extends Component {
    render(){
        console.log(this.props.match.params.id);
        return (
            <DetailWrap>
                <Header>Content title, id:{this.props.match.params.id}</Header>
                <Content>Content page is in developing...</Content>
            </DetailWrap>
        )
    }
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(withRouter(Detail));
