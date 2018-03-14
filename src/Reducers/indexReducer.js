import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as reduxFormReducer } from 'redux-form';
// import { combineForms } from 'react-redux-form';

import { posts } from './postsReducer';
import { maps } from './gMapsReducer';
// import { user } from './userReducer';
import { user } from './usersReducer';


const allReducers = {
    posts,
    maps,
    // user,
    user,
    form:reduxFormReducer,
    router: routerReducer
}

// const rootReducer = combineForms(allReducers);
const rootReducer = combineReducers(allReducers);

export default rootReducer;
