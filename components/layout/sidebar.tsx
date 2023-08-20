'use client'
import React, { useEffect, useState } from 'react'
import BoardItem from '../sidebar/boardItem'
import Toggle from '../shared/toggle'
import Sun from '../shared/icons/sun'
import Moon from '../shared/icons/moon'
import Eye from '../shared/icons/eye'
import { useTheme } from 'next-themes'
import { UseThemeProps } from 'next-themes/dist/types'
import EyeShow from '../shared/icons/eyeShow'

const Sidebar = () => {
    const { theme, setTheme }: UseThemeProps = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            className={`relative h-full md:max-w-[280px] lg:max-w-[300px] ${
                isOpen ? 'w-full' : 'w-auto'
            } `}
        >
            <div
                className={`fixed left-0 md:static h-full overflow-hidden ${
                    isOpen ? 'w-screen md:w-full opacity-100' : 'w-0 opacity-0'
                } transition-[width,opacity] duration-[0.5s] ease-in-out   md:border-r-solid md:border-r-[1px] md:border-r-[#E4EBFA] dark:md:border-r-[#3E3F4E] py-[24px] flex flex-col items-center bg-white dark:bg-[#2B2C37] `}
            >
                <div className="flex flex-col gap-[20px] h-full w-full pb-[24px] overflow-hidden">
                    <h2 className="uppercase text-[#828FA3] text-[12px] font-[700] ps-[34px] ">
                        {'all boards (8)'}
                    </h2>

                    <div className="w-full flex flex-col h-full gap-[12px] overflow-auto pe-[24px] ">
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                        <BoardItem isActive={false} name={'Platform Launch'} />
                    </div>
                </div>
                <div className="flex flex-col w-full px-[24px]">
                    <div className=" flex items-center justify-center bg-[#F4F7FD] dark:bg-[#20212C]  gap-[24px] w-full py-[14px] rounded-[6px] ">
                        <Sun />
                        {theme && (
                            <Toggle
                                isDark={theme === 'dark'}
                                onClick={() =>
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark'
                                    )
                                }
                            />
                        )}

                        <Moon />
                    </div>
                    <button
                        className="flex gap-[15px] items-center py-[22px]"
                        onClick={(e) => {
                            e.preventDefault()
                            setIsOpen(false)
                        }}
                    >
                        <Eye />
                        <p className="text-[15px] font-[700] text-[#828FA3]">
                            Hide Sidebar
                        </p>
                    </button>
                </div>
            </div>
            <button
                className={`fixed left-0 bottom-[32px] bg-[#635FC7] rounded-e-[100px] p-[20px] ${
                    isOpen ? 'hidden' : 'flex'
                }`}
                onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(true)
                }}
            >
                <EyeShow />
            </button>
        </div>
    )
}

export default Sidebar
