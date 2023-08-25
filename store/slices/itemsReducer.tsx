import { Board, ToDo } from '@/components/shared/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateType = {
    boards: Board[]
    items: ToDo[]
    currBoard: string
    currItem: ToDo | null
    idCount: number
}

const initialState: StateType = {
    boards: [],
    items: [],
    currBoard: '',
    currItem: null,
    idCount: 0,
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
        addTask(state, action: PayloadAction<ToDo>) {
            const currBoardIndex = state.boards.findIndex(
                (board: Board) => board?.title === state.currBoard
            )
            if (currBoardIndex !== -1) {
                const currBoard = state.boards[currBoardIndex]
                action.payload.id = state.idCount++
                currBoard?.items?.push(action?.payload)
                const newBoards = [...state.boards]
                newBoards[currBoardIndex] = currBoard
                state.boards = [...newBoards]
                state.items = [...state.items, action?.payload]
            } else throw Error('No Board selected')
        },
        updateBoard(state, action: PayloadAction<string>) {
            const currBoardIndex = state.boards.findIndex(
                (board: Board) => board?.title === state.currBoard
            )
            if (currBoardIndex !== -1) {
                const currBoard = state.boards[currBoardIndex]
                currBoard.title = action.payload
                const newBoards = [...state.boards]
                newBoards[currBoardIndex] = currBoard
                state.boards = [...newBoards]
                state.currBoard = currBoard?.title
            } else throw Error('Board title already exists')
        },
        updateItem(state, action: PayloadAction<ToDo>) {
            const currBoardIndex = state.boards.findIndex(
                (board: Board) => board?.title === state.currBoard
            )
            if (currBoardIndex !== -1) {
                const currBoard = state.boards[currBoardIndex]
                const itemIndex = currBoard?.items?.findIndex(
                    (item: ToDo) => item?.id === state?.currItem?.id
                )
                if (itemIndex !== -1) {
                    currBoard.items[itemIndex] = action?.payload
                    const newBoards = [...state.boards]
                    newBoards[currBoardIndex] = currBoard
                    state.boards = [...newBoards]
                    state.items = [...currBoard.items]
                }
            }
        },
        getItems(state, action: PayloadAction<string>) {
            const currBoard: Board = state?.boards?.find(
                (board: Board) => board?.title === action?.payload
            ) ?? { title: '', items: [] }
            state.currBoard = currBoard?.title
            state.items = [...currBoard?.items]
        },
        setCurrItem(state, action: PayloadAction<ToDo>) {
            state.currItem = action.payload
        },
        setCompleteItem(state, action: PayloadAction<ToDo>) {
            const newItem: ToDo = action.payload
            itemsReducer.caseReducers.setCurrItem(state, {
                payload: newItem,
                type: 'setCompleteItem',
            })
            itemsReducer.caseReducers.updateItem(state, {
                payload: newItem,
                type: 'setCompleteItem',
            })
        },
        deleteBoard(state) {
            const newBoards = state.boards?.filter(
                (board: Board) => board?.title !== state.currBoard
            )
            state.boards = [...newBoards]
            state.currBoard = newBoards?.[0]?.title ?? ''
            state.items = newBoards?.[0]?.items ?? []
        },
        deleteItem(state) {
            const newItems = state.items?.filter(
                (item: ToDo) => item?.title !== state.currItem?.title
            )
            const currBoardIndex = state.boards?.findIndex(
                (board: Board) => board?.title === state.currBoard
            )
            if (currBoardIndex !== -1) {
                const newBoards = state.boards
                const newBoard = newBoards[currBoardIndex]
                newBoard.items = newItems
                newBoards[currBoardIndex] = newBoard
                state.boards = [...newBoards]
                state.items = newItems
            }
        },
    },
})

export const {
    addBoard,
    addTask,
    updateItem,
    getItems,
    setCurrItem,
    setCompleteItem,
    deleteItem,
    deleteBoard,
    updateBoard,
} = itemsReducer.actions

export default itemsReducer.reducer
