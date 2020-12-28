import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ResumeReducer } from './reducers/ResumeReducer';
import { rootSaga } from './sagas/rootSaga';

//setup saga
const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    ResumeReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;