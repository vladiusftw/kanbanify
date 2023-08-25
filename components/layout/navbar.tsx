'use client'
import React, { useState } from 'react'
import DarkLogo from '../shared/icons/darkLogo'
import DarkLogoMobile from '../shared/icons/darkLogoMobile'
import Dropdown from '../shared/icons/dropdown'
import Add from '../shared/icons/add'
import DotMenu from '../shared/icons/dotMenu'
import LightLogo from '../shared/icons/lightLogo'
import LightLogoMobile from '../shared/icons/lightLogoMobile'
import { useAppDispatch, useAppSelector } from '@/store/store'
import {
    closeShowTask,
    openAddTask,
    openCreateBoard,
    openEditBoard,
    openEditTask,
} from '@/store/slices/modalsReducer'
import { deleteBoard, setCurrItem } from '@/store/slices/itemsReducer'
import Popover from '../shared/popover'

type Props = {}

const Navbar = (props: Props) => {
    const dispatch = useAppDispatch()
    const { currBoard } = useAppSelector(
        (state) => state.persistedReducer.boards
    )
    const [isPopoverOpen, setPopoverOpen] = useState(false)
    return (
        <div className="flex w-full border-b-solid border-b-[1px] border-b-[#E4EBFA] dark:border-b-[#3E3F4E] bg-white dark:bg-[#2B2C37] overflow-hidden">
            <div className="max-w-min md:min-w-[280px] lg:min-w-[300px] md:border-r-solid md:border-r-[1px] md:border-r-[#E4EBFA] dark:md:border-r-[#3E3F4E] py-[30px] lg:py-[40px] ps-[34px] flex items-center">
                <div className="hidden dark:flex">
                    <DarkLogo className="hidden md:flex" />
                    <DarkLogoMobile className="flex md:hidden" />
                </div>

                <div className="flex dark:hidden">
                    <LightLogo className="hidden md:flex" />
                    <LightLogoMobile className="flex md:hidden" />
                </div>
            </div>

            <div className="flex justify-between items-center ps-[24px] w-full overflow-hidden  ">
                <div className="flex items-center gap-[8px] overflow-hidden ">
                    <h1 className="font-[700] text-[18px] md:text-[24px] whitespace-nowrap overflow-hidden text-ellipsis ">
                        {currBoard}
                    </h1>
                </div>

                <div className="flex items-center whitespace-nowrap">
                    <button
                        className="hidden md:flex rounded-[24px] bg-[#635FC7] py-[15px] px-[24px] text-[15px] font-[700] text-white"
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(setCurrItem(null!))
                            dispatch(openAddTask())
                        }}
                    >
                        {'+ Add New Task'}
                    </button>
                    <button
                        className="flex md:hidden rounded-[24px] bg-[#635FC7] py-[10px] px-[18px]"
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(setCurrItem(null!))
                            dispatch(openAddTask())
                        }}
                    >
                        <Add />
                    </button>
                    <div className="relative flex flex-col">
                        <button
                            className="px-[24px]"
                            onClick={(e) => {
                                e.preventDefault()
                                setPopoverOpen((prev: boolean) => !prev)
                            }}
                        >
                            <DotMenu />
                        </button>
                        <Popover
                            isOpen={isPopoverOpen}
                            className=" !fixed top-[80px] right-2 max-w-[72px] drop-shadow-md"
                        >
                            <div className="bg-white dark:bg-[#20212C] dark:drop-shadow-none rounded-[8px] w-full flex flex-col">
                                <button
                                    className={`p-[16px] whitespace-normal text-[13px] text-[#828FA3] font-medium hover:bg-[#635FC7] hover:text-inherit rounded-[8px]`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(openEditBoard())
                                        setPopoverOpen(false)
                                    }}
                                >
                                    Edit Board
                                </button>
                                <button
                                    className="p-[16px] whitespace-normal text-[13px] text-[#EA5555] font-medium hover:bg-[#EA5555] hover:text-inherit rounded-[8px]"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(deleteBoard())
                                        setPopoverOpen(false)
                                    }}
                                >
                                    Delete Board
                                </button>
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
