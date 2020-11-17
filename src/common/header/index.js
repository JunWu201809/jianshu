import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap,
    SearchInfo, SearchInfoSwich, SearchInfoTitle, SearchInfoItem, SearchInfoList
} from './style.js';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreator';
import * as loginCreators from '../../login/store/actionCreator';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const { focused, list, handleInputFocus, handleInputBlur, loginStatus,logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Index</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe602;</i>
                    </NavItem>
                    {loginStatus ?
                        <NavItem className='right logout' onClick={logout}>Logout</NavItem>
                        : <Link to='/login'> <NavItem className='right'>Login</NavItem></Link>}
                    <SearchWrap>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch className={focused ? 'focused' : ' '}
                                onFocus={() => { handleInputFocus(list) }} onBlur={handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : ' iconfont zoom'}>&#xe66b;</i>
                        {this.getListArea(focused)}
                    </SearchWrap>
                </Nav>
                <Addition>
                    <Link to='/'>
                        <Button className='reg'>Reigster</Button>
                    </Link>
                    <Link to='/write'>
                        <Button className='write'>
                            <i className="iconfont">&#xe63d;</i>
                    Write
                </Button>
                    </Link>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea() {
        const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
        const jsList = list.toJS();
        let pageList = [];
        if (jsList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (jsList[i])
                    pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        Hot Search!
                    <SearchInfoSwich onClick={handleChangePage}>
                            <i className="iconfont spin">&#xe851;</i>Switch!
                    </SearchInfoSwich>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        loginStatus: state.get('login').get('login')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0)
                dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseOut());
        },
        handleChangePage() {
            dispatch(actionCreators.changePage());
        },
        logout(){
            dispatch(loginCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);