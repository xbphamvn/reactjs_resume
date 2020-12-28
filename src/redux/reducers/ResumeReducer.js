import { CLOSE_PROJECT_DETAIL, OPEN_PROJECT_DETAIL } from "../constants/ResumeConsts";

const initialState = {
    displayProjDetail: false,
    projItem: {}
}

export const ResumeReducer = (state = initialState, action) => {
    switch (action.type) {

    case OPEN_PROJECT_DETAIL:
        return { ...state, displayProjDetail: true, projItem: action.projItem };
    
    case CLOSE_PROJECT_DETAIL:
        return {...state, displayProjDetail: false};

    default:
        return { ...state };
    }
}
