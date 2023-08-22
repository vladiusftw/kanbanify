'use client'
import React, { useRef } from 'react'
import Modal from './modal'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { closeCreateBoard } from '@/store/slices/modalsReducer'
import { addBoard, getItems } from '@/store/slices/itemsReducer'
import LabelInput from './labelInput'

type Props = {}

const CreateBoardModal = (props: Props) => {
    const { createBoardOpen } = useAppSelector((state) => state.modals)
    const { currBoard, boards } = useAppSelector(
        (state) => state.persistedReducer.boards
    )
    const dispatch = useAppDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <Modal
            isOpen={createBoardOpen}
            onBackDropPress={() => dispatch(closeCreateBoard())}
        >
            <div
                className="bg-white dark:bg-[#2B2C37] max-w-[480px] w-full flex flex-col items-start gap-[24px] rounded-[6px] p-[32px] hover:cursor-default"
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
            >
                <p className="text-[18px] font-bold">Add New Board</p>
                <LabelInput
                    inputRef={inputRef}
                    label="Board Name"
                    placeholder="e.g. Web Design"
                />
                <button
                    className="bg-[#635FC7] w-full py-[8px] text-[13px] font-bold rounded-[20px]"
                    onClick={(e) => {
                        e.preventDefault()

                        if (inputRef?.current?.value === '') {
                            alert("Board Name can't be empty!")
                        } else if (
                            boards?.find(
                                (board) =>
                                    board?.title === inputRef?.current?.value
                            )
                        ) {
                            alert('Board Name already exists!')
                        } else if (inputRef?.current) {
                            dispatch(addBoard(inputRef.current.value))
                            if (currBoard === '')
                                dispatch(getItems(inputRef?.current?.value))
                            dispatch(closeCreateBoard())
                        }
                    }}
                >
                    Create New Board
                </button>
            </div>
        </Modal>
    )
}

export default CreateBoardModal
