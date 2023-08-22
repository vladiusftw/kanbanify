import React, { useRef } from 'react'
import Modal from './modal'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { closeAddTask } from '@/store/slices/modalsReducer'
import LabelInput from './labelInput'

type Props = {}

const AddTaskModal = (props: Props) => {
    const { addTaskOpen } = useAppSelector((state) => state.modals)
    const dispatch = useAppDispatch()
    const titleRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLTextAreaElement>(null)
    return (
        <Modal
            isOpen={addTaskOpen}
            onBackDropPress={() => dispatch(closeAddTask())}
        >
            <div
                className="max-w-[480px] max-h-[675px] w-full h-full p-[32px] overflow-y-auto rounded-[6px] bg-[#2B2C37] flex flex-col items-start gap-[24px]"
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
            >
                <p className="text-[18px] font-bold">Add New Task</p>
                <LabelInput
                    inputRef={titleRef}
                    placeholder="e.g. Charge yourself"
                    label="Title"
                />
                <LabelInput
                    textAreaRef={descRef}
                    label="Description"
                    placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                    inputClassName=""
                    numRows={4}
                />
            </div>
        </Modal>
    )
}

export default AddTaskModal
