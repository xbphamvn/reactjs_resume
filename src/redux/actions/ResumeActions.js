import { CLOSE_PROJECT_DETAIL, OPEN_PROJECT_DETAIL, SGA_DISPLAY_PROJECT_DETAIL, SGA_HIDE_PROJECT_DETAIL } from "../constants/ResumeConsts";

export const actOpenProjectDetail = (projItem) => ({
    type: OPEN_PROJECT_DETAIL,
    projItem
})

export const actCloseProjectDetail = (projItem) => ({
    type: CLOSE_PROJECT_DETAIL,
    projItem
});

// export const actScrollToProjectsPage = (component) => ({
//     type: ACT_SCROLL_TO_PROJECT,
//     component
// })

//Saga action
export const sgaDisplayProjDetail = (projItem) => ({
    type: SGA_DISPLAY_PROJECT_DETAIL,
    projItem
})

export const sgaHideProjDetail = (projItem) => ({
    type: SGA_HIDE_PROJECT_DETAIL,
    projItem
})