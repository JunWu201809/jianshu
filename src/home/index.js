import { fromJS } from 'immutable';
import React, {PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {connect} from 'react-redux';
import * as actionCreator from './store/actionCreator';

class Home extends PureComponent {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
       const action =  actionCreator.getHomeInfo();
       dispatch(action);
    }
})

export default connect(null,mapDispatch) (Home);