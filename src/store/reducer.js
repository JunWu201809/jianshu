import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../home/store/reducer';
import loginReducer from '../login/store/reducer';

const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer,
    login:loginReducer
});

export default reducer;
