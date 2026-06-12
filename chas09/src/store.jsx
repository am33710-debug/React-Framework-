import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import AskQuestionReducer from './reducers/AskQuestionReducer';

const reducer = {
    AskQuestionReducer: AskQuestionReducer
}

const logger = createLogger();

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});