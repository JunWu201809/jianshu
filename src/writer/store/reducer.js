import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.merge({
                login: fromJS(action.value)
            })
            case constants.CHANGE_LOGOUT:
                return state.merge({
                    login: false
                })
        default:
            return state;
    }
};

export default reducer;