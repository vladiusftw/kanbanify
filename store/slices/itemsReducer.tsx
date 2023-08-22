import { Board, ToDo } from '@/components/shared/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateType = {
    boards: Board[]
    items: ToDo[]
    currBoard: string
}

const initialState: StateType = {
    boards: [],
    items: [],
    currBoard: '',
}

const itemsReducer = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<string>) {
            state.boards = [
                ...state.boards,
                { title: action?.payload, items: [] },
            ]
        },
        addItem(
            state,
            action: PayloadAction<{ boardName: string; item: ToDo }>
        ) {
            const currBoardIndex = state.boards.findIndex(
                (board: Board) => board?.title === action?.payload?.boardName
            )
            if (currBoardIndex !== -1) {
                const currBoard = state.boards[currBoardIndex]
                currBoard?.items?.push(action?.payload?.item)
                const newBoards = [...state.boards]
                newBoards[currBoardIndex] = currBoard
                state.boards = [...newBoards]
            }
        },
        getItems(state, action: PayloadAction<string>) {
            const currBoard: Board = state?.boards?.find(
                (board: Board) => board?.title === action?.payload
            ) ?? { title: '', items: [] }
            state.currBoard = currBoard?.title
            state.items = [...currBoard?.items]
        },
    },
})

export const { addBoard, addItem, getItems } = itemsReducer.actions

export default itemsReducer.reducer
