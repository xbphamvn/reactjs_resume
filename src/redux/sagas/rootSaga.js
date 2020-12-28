import {all} from 'redux-saga/effects';
import * as ResumeSaga from './ResumeSaga';

export function* rootSaga() {
    yield all([
        ResumeSaga.listenDisplayProjectDetail(),
        ResumeSaga.listenHideProjectDetail(),
    ])
}