import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    articleList: [],
    recommendList: []
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        default:
            return state;
    }
};

export default reducer;