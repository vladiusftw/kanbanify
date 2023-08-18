'use client'
import React from 'react'
import BoardItem from '../sidebar/boardItem'
import Toggle from '../shared/toggle'
import Sun from '../shared/icons/sun'
import Moon from '../shared/icons/moon'
import Eye from '../shared/icons/eye'
import { useTheme } from 'next-themes'
import { UseThemeProps } from 'next-themes/dist/types'

type Props = {
    isOpen: boolean
}

const Sidebar = ({ isOpen }: Props) => {
    const { theme, setTheme }: UseThemeProps = useTheme()
    return (
        <div
            className={`fixed left-0 md:static  md:max-w-[280px] h-full overflow-hidden lg:max-w-[300px] transition-[width] duration-[0.5s] ease-linear ${
                isOpen ? 'w-screen md:w-full' : 'w-0'
            } md:border-r-solid md:border-r-[1px] md:border-r-[#3E3F4E] py-[30px] lg:py-[40px] flex flex-col items-center bg-[#2B2C37] `}
        >
            <div className="flex flex-col gap-[20px] h-[80%] w-full pb-[24px]">
                <h2 className="uppercase text-[#828FA3] text-[12px] font-[700] ps-[34px] ">
                    {'all boards (8)'}
                </h2>

                <div className="w-full flex flex-col gap-[12px] overflow-auto pe-[24px] ">
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
            <div className="self-end flex flex-col w-full px-[24px]">
                <div className=" flex items-center justify-center bg-[#20212C]  gap-[24px] w-full py-[14px] rounded-[6px] ">
                    <Sun />
                    <Toggle
                        isDark={theme === 'dark'}
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                    />
                    <Moon />
                </div>
                <div className="flex gap-[15px] items-center py-[22px]">
                    <Eye />
                    <p className="text-[15px] font-[700] text-[#828FA3]">
                        Hide Sidebar
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
