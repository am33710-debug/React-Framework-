import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';

import CakeReducer from './reducers/CakeReducer';
import CommentsReducer from './reducers/CommentsReducer';

const reducer = {
    CakeReducer: CakeReducer,
    CommentsReducer: CommentsReducer
}

const logger = createLogger();

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})