import React from 'react'
import Board from '../shared/icons/board'

type Props = {
    isActive: boolean
    name: string
    isMain?: boolean
    onClick: () => void
}

const BoardItem = ({ isActive, name, isMain, onClick }: Props) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
            className={`group flex items-center gap-[16px] ps-[32px] py-[14px] w-full rounded-e-[100px] ${
                isActive
                    ? 'bg-[#635FC7]'
                    : 'hover:bg-[#EFEFF9] hover:dark:bg-white hover:!text-[#635FC7]'
            } `}
        >
            <Board
                color={isMain ? '#635FC7 ' : isActive ? 'white' : '#828FA3'}
            />
            <p
                className={` text-[15px] font-[700] overflow-hidden whitespace-nowrap text-ellipsis ${
                    isActive ? 'text-white' : 'text-[#828FA3] '
                } ${isMain ? 'text-[#635FC7]' : ''}`}
            >
                {name}
            </p>
        </button>
    )
}

export default BoardItem
