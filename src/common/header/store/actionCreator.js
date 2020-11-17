import * as constans from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocus = () => ({
    type: constans.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constans.SEARCH_BLUR
})

const changeList = (data) => ({
    type: constans.CHANGE_LIST,
    data: fromJS(data),
    totalPage : Math.ceil(data.length / 10)
})

export const getList = () => {
    return (dispatch) => {
       axios.get('/api/headerList.json').then((res) => {
           const data = res.data;
            dispatch(changeList(data.data));
       }).catch((err) => {
            console.log(err);
       });
    }
}

export const mouseEnter = () => ({
    type: constans.MOUSE_ENTER
})

export const mouseOut = () => ({
    type: constans.MOUSE_OUT
})

export const changePage = () => ({
    type: constans.CHANGE_PAGE
})