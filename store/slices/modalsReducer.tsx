import { createSlice } from '@reduxjs/toolkit'

type StateType = {
    createBoardOpen: boolean
    addTaskOpen: boolean
    showTaskOpen: boolean
    editTaskOpen: boolean
    editBoardOpen: boolean
}

const initialState: StateType = {
    createBoardOpen: false,
    addTaskOpen: false,
    showTaskOpen: false,
    editTaskOpen: false,
    editBoardOpen: false,
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
        openEditBoard(state) {
            state.editBoardOpen = true
        },
        closeEditBoard(state) {
            state.editBoardOpen = false
        },
        // openDeleteBoard(state) {
        //     state.createBoardOpen = false
        // },
        openAddTask(state) {
            state.addTaskOpen = true
        },
        closeAddTask(state) {
            state.addTaskOpen = false
        },
        openShowTask(state) {
            state.showTaskOpen = true
        },
        closeShowTask(state) {
            state.showTaskOpen = false
        },
        openEditTask(state) {
            state.editTaskOpen = true
        },
        closeEditTask(state) {
            state.editTaskOpen = false
        },
    },
})

export const {
    openCreateBoard,
    closeCreateBoard,
    openAddTask,
    closeAddTask,
    openShowTask,
    closeShowTask,
    openEditTask,
    closeEditTask,
    closeEditBoard,
    openEditBoard,
} = ModalsReducer.actions

export default ModalsReducer.reducer
