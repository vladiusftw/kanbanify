import { createSlice } from '@reduxjs/toolkit'

type StateType = {
    createBoardOpen: boolean
    addTaskOpen: boolean
}

const initialState: StateType = {
    createBoardOpen: false,
    addTaskOpen: false,
}

const ModalsReducer = createSlice({
    name: 'Modals',
    initialState,
    reducers: {
        openCreateBoard(state) {
            state.createBoardOpen = true
        },
        closeCreateBoard(state) {
            state.createBoardOpen = false
        },
        openAddTask(state) {
            state.addTaskOpen = true
        },
        closeAddTask(state) {
            state.addTaskOpen = false
        },
    },
})

export const { openCreateBoard, closeCreateBoard, openAddTask, closeAddTask } =
    ModalsReducer.actions

export default ModalsReducer.reducer
