import { ACT_HANDLE_CLICK_MENU_ITEM, CLOSE_PROJECT_DETAIL, OPEN_PROJECT_DETAIL } from "../constants/ResumeConsts";

const initialState = {
    displayProjDetail: false,
    projItem: {},
    menuStatus: {
        home: 'active',
        about: '',
        resume: '',
        projects: '',
        contact: ''
    }
}

export const ResumeReducer = (state = initialState, action) => {
    switch (action.type) {

    case OPEN_PROJECT_DETAIL:
        return { ...state, displayProjDetail: true, projItem: action.projItem };
    
    case CLOSE_PROJECT_DETAIL:
        return {...state, displayProjDetail: false};

    case ACT_HANDLE_CLICK_MENU_ITEM:
        for (let key in state.menuStatus) {
            key === action.name ? state.menuStatus[key] = 'active' : state.menuStatus[key] = '';
        }
        return {...state, menuStatus: {...state.menuStatus}};

    default:
        return { ...state };
    }
}
