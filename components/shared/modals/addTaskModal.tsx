'use client'
import React, { useEffect, useRef, useState } from 'react'
import Modal from '../modal'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { closeAddTask, closeEditTask } from '@/store/slices/modalsReducer'
import LabelInput, { SelectOption } from '../labelInput'
import Cancel from '../icons/cancel'
import { addTask, setCurrItem, updateItem } from '@/store/slices/itemsReducer'
import { Subtask } from '../types'
import { SelectOptions } from '../data/selectOptions'

type Props = {}

const AddTaskModal = (props: Props) => {
    const { addTaskOpen, editTaskOpen } = useAppSelector(
        (state) => state.modals
    )
    const { currItem } = useAppSelector(
        (state) => state.persistedReducer.boards
    )
    const dispatch = useAppDispatch()
    const titleRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLTextAreaElement>(null)
    const subTasksParentRef = useRef<HTMLDivElement>(null)
    const [tempId, setTempId] = useState(0)
    const [inputs, setInputs] = useState<{ id: number }[]>([{ id: tempId }])
    const [status, setStatus] = useState<SelectOption>(SelectOptions[0])

    const createTask = () => {
        const inputs: HTMLInputElement[] = [].slice
            .call(document.getElementsByName('addTaskInput'))
            ?.filter((input: any) => {
                if (input instanceof HTMLInputElement && input?.value !== '')
                    return true
                return false
            })

        const subtasks: Subtask[] = inputs?.map((input: HTMLInputElement) => ({
            title: input?.value,
            completed: false,
        }))
        const tempSet = Array.from(
            new Set(subtasks?.map((item: Subtask) => item?.title))
        )

        if (tempSet?.length !== subtasks?.length) {
            alert('Subtasks must be unique')
            return
        }

        const title = titleRef?.current?.value ?? ''
        const desc = descRef?.current?.value ?? ''
        if (title === '' || desc === '') {
            alert("Title/Description can't be empty")
            return
        }
        try {
            if (editTaskOpen)
                dispatch(
                    updateItem({
                        title,
                        desc,
                        subtasks,
                        status: status?.value,
                        id: currItem!.id,
                    })
                )
            else
                dispatch(
                    addTask({
                        title,
                        desc,
                        subtasks,
                        status: status?.value,
                        id: -1,
                    })
                )
            dispatch(closeAddTask())
            dispatch(closeEditTask())
            dispatch(setCurrItem(null!))
        } catch (e: unknown) {
            if (e instanceof Error) alert(e?.message)
        }
    }

    const populateInputs = () => {
        if (editTaskOpen && !addTaskOpen) {
            let temp = 0
            setInputs([
                ...Array.from({ length: currItem?.subtasks?.length! }).map(
                    () => ({ id: temp++ })
                ),
            ])
            setTempId(temp)
        }
    }

    useEffect(() => {
        if (!addTaskOpen) populateInputs()
        const option = SelectOptions?.find(
            (option: SelectOption) => option?.value === currItem?.status
        )
        if (option) setStatus(option)
    }, [editTaskOpen])

    useEffect(() => {
        if (!editTaskOpen) {
            setInputs([{ id: tempId }])
        }
    }, [addTaskOpen])

    useEffect(() => {}, [currItem])

    return (
        <Modal
            isOpen={addTaskOpen || editTaskOpen}
            onBackDropPress={() => {
                dispatch(closeAddTask())
                dispatch(closeEditTask())
                dispatch(setCurrItem(null!))
            }}
        >
            <div
                className="max-w-[480px] max-h-[675px] w-full h-full p-[32px] hover:cursor-default overflow-y-auto rounded-[6px] bg-[#2B2C37] flex flex-col items-start gap-[24px]"
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
            >
                <p className="text-[18px] font-bold">{`${
                    editTaskOpen ? 'Edit Task' : 'Add New Task'
                }`}</p>
                <LabelInput
                    inputRef={titleRef}
                    placeholder="e.g. Charge yourself"
                    label="Title"
                    type="input"
                    defaultInput={currItem?.title}
                />
                <LabelInput
                    textAreaRef={descRef}
                    type="textarea"
                    label="Description"
                    placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                    inputClassName=""
                    numRows={4}
                    defaultTextArea={currItem?.desc}
                />
                <div className="w-full flex flex-col gap-[8px]">
                    <span className="text-[12px] font-bold">Subtasks</span>
                    <div
                        ref={subTasksParentRef}
                        className="flex flex-col w-full gap-[12px]"
                    >
                        {inputs?.map((item: { id: number }, index: number) => {
                            return (
                                <div className="w-full flex" key={item?.id}>
                                    <LabelInput
                                        placeholder="e.g. Make Coffee"
                                        type="input"
                                        tagName="addTaskInput"
                                        defaultInput={
                                            currItem?.subtasks?.[index]?.title
                                        }
                                    />
                                    <button
                                        className="group pl-[16px]"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setInputs(
                                                (prev: { id: number }[]) => [
                                                    ...prev?.filter(
                                                        (item2: {
                                                            id: number
                                                        }) =>
                                                            item?.id !==
                                                            item2?.id
                                                    ),
                                                ]
                                            )
                                        }}
                                    >
                                        <Cancel className="fill-[#828FA3] group-hover:fill-[#EA5555]" />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setInputs((prev: { id: number }[]) => [
                                ...prev,
                                { id: tempId + 1 },
                            ])
                            setTempId((prev: number) => prev + 1)
                        }}
                        className="w-full mt-[12px] bg-[#635fc740] py-[9px] text-[13px] font-bold rounded-[20px] dark:bg-white text-[#635FC7]"
                    >
                        {'+ Add New Subtask'}
                    </button>
                </div>

                <LabelInput
                    type="select"
                    label="Status"
                    onSelect={setStatus}
                    selectedValue={status}
                    options={SelectOptions}
                    optionClassName="hover:bg-[#635FC7] w-full text-start px-[16px] py-[8px]"
                    optionsClassName=" gap-[8px] bg-[#20212C]"
                />

                <button
                    className="w-full text-[13px] font-bold bg-[#635FC7] py-[8px] rounded-[20px] hover:bg-[#A8A4FF]"
                    onClick={(e) => {
                        e.preventDefault()
                        createTask()
                    }}
                >
                    {`${editTaskOpen ? 'Save Changes' : 'Create Task'}`}
                </button>
            </div>
        </Modal>
    )
}

export default AddTaskModal
