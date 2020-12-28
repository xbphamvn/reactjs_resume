import { put, takeLatest } from "redux-saga/effects";
import { actCloseProjectDetail, actOpenProjectDetail } from "../actions/ResumeActions";
import { SGA_DISPLAY_PROJECT_DETAIL, SGA_HIDE_PROJECT_DETAIL } from "../constants/ResumeConsts";


function* displayProjectDetail(action) {
    yield put(actOpenProjectDetail(action.projItem));
}

export function* listenDisplayProjectDetail() {
    yield takeLatest(SGA_DISPLAY_PROJECT_DETAIL, displayProjectDetail);
}

function* hideProjectDetail(action) {
    yield put(actCloseProjectDetail());
}

export function* listenHideProjectDetail() {
    yield takeLatest(SGA_HIDE_PROJECT_DETAIL, hideProjectDetail);
}