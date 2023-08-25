'use client'
import React, { useEffect, useState } from 'react'
import Modal from '../modal'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { closeShowTask, openEditTask } from '@/store/slices/modalsReducer'
import DotMenu from '../icons/dotMenu'
import { Subtask } from '../types'
import {
    deleteItem,
    setCompleteItem,
    updateItem,
} from '@/store/slices/itemsReducer'
import LabelInput, { SelectOption } from '../labelInput'
import { SelectOptions } from '../data/selectOptions'
import Popover from '../popover'

type Props = {}

const ShowTaskModal = (props: Props) => {
    const { showTaskOpen } = useAppSelector((state) => state.modals)
    const { currItem } = useAppSelector(
        (state) => state.persistedReducer.boards
    )
    const dispatch = useAppDispatch()
    const numCompleted =
        currItem?.subtasks?.length !== 0
            ? currItem?.subtasks
                  ?.map((item) => Number(item.completed))
                  .reduce(
                      (finalSum: number, currNum: number) => finalSum + currNum
                  )
            : 0
    const [status, setStatus] = useState<SelectOption>(
        SelectOptions?.find(
            (option: SelectOption) => option?.value === currItem?.status
        ) ?? SelectOptions[0]
    )

    const [isPopoverOpen, setPopoverOpen] = useState(false)

    useEffect(() => {
        setStatus(
            SelectOptions?.find(
                (option: SelectOption) => option?.value === currItem?.status
            )!
        )
    }, [currItem])

    return (
        <Modal
            isOpen={showTaskOpen}
            onBackDropPress={() => {
                dispatch(closeShowTask())
                setPopoverOpen(false)
            }}
        >
            <div
                className="bg-white dark:bg-[#2B2C37] p-[32px] hover:cursor-default flex flex-col gap-[24px] max-w-[480px] max-h-[520px] overflow-hidden w-full rounded-[6px] "
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex justify-between">
                    <p className="text-[18px] font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                        {currItem?.title}
                    </p>
                    <div className="relative flex flex-col gap-[0px] items-center">
                        <button
                            className="px-[8px]"
                            onClick={(e) => {
                                e.preventDefault()
                                setPopoverOpen((prev: boolean) => !prev)
                            }}
                        >
                            <DotMenu />
                        </button>

                        <Popover
                            isOpen={isPopoverOpen}
                            className="w-full top-10 min-w-fit drop-shadow-md"
                        >
                            <div className="bg-white dark:bg-[#20212C] dark:drop-shadow-none rounded-[8px] w-full">
                                <button
                                    className={`p-[16px] text-[13px] text-[#828FA3] font-medium hover:bg-[#635FC7] hover:text-inherit rounded-[8px]`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(closeShowTask())
                                        dispatch(openEditTask())
                                        setPopoverOpen(false)
                                    }}
                                >
                                    Edit Task
                                </button>
                                <button
                                    className="p-[16px] text-[13px] text-[#EA5555] font-medium hover:bg-[#EA5555] hover:text-inherit rounded-[8px]"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(deleteItem())
                                        dispatch(closeShowTask())
                                        setPopoverOpen(false)
                                    }}
                                >
                                    Delete Task
                                </button>
                            </div>
                        </Popover>
                    </div>
                </div>

                <p className="text-[13px] font-medium text-[#828FA3]">
                    {currItem?.desc}
                </p>

                {currItem?.subtasks?.length !== 0 ? (
                    <div className="w-full flex flex-col gap-[16px] overflow-auto">
                        <p className="text-[12px] font-bold">{`Subtasks (${numCompleted} of ${currItem?.subtasks?.length})`}</p>
                        <div className="flex flex-col gap-[8px]">
                            {currItem?.subtasks?.map((item: Subtask) => {
                                return (
                                    <div
                                        key={
                                            item?.title +
                                            item?.completed +
                                            currItem?.id
                                        }
                                        className={`w-full flex gap-[16px]  dark:bg-[#20212C] ${
                                            item?.completed
                                                ? 'bg-[#F4F7FD] dark:bg-[#20212C]'
                                                : 'bg-[#635fc740] dark:bg-[#635fc740]'
                                        } p-[12px] rounded-[4px]`}
                                    >
                                        <input
                                            type="checkbox"
                                            className=""
                                            checked={item?.completed}
                                            onChange={(e) => {
                                                e.preventDefault()
                                                dispatch(
                                                    setCompleteItem({
                                                        ...currItem,
                                                        subtasks:
                                                            currItem?.subtasks?.map(
                                                                (
                                                                    subtask: Subtask
                                                                ) =>
                                                                    item?.title ===
                                                                    subtask?.title
                                                                        ? {
                                                                              completed:
                                                                                  !subtask?.completed,
                                                                              title: subtask?.title,
                                                                          }
                                                                        : {
                                                                              completed:
                                                                                  subtask?.completed,
                                                                              title: subtask?.title,
                                                                          }
                                                            ),
                                                        status: status?.value,
                                                    })
                                                )
                                            }}
                                        />
                                        <p
                                            className={`text-[12px] font-bold ${
                                                item?.completed
                                                    ? 'line-through opacity-50 '
                                                    : ''
                                            } `}
                                        >
                                            {item?.title}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                    <p className="text-[12px] font-bold">{'No Subtasks'}</p>
                )}
                {currItem && (
                    <LabelInput
                        type="select"
                        label="Current Status"
                        selectedValue={status}
                        options={SelectOptions}
                        onSelect={(option: SelectOption) => {
                            setStatus(option)
                            dispatch(
                                updateItem({
                                    ...currItem!,
                                    status: option?.value,
                                })
                            )
                        }}
                        optionClassName="hover:bg-[#635FC7] w-full text-start px-[16px] py-[8px] text-[14px] hover:text-white"
                        optionsClassName=" gap-[8px] bg-white drop-shadow-md dark:drop-shadow-none dark:bg-[#20212C] rounded-[8px] mt-[8px]  "
                    />
                )}
            </div>
        </Modal>
    )
}

export default ShowTaskModal
