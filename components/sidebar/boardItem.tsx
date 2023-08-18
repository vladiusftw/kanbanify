import React from 'react'
import Board from '../shared/icons/board'

type Props = {
    isActive: boolean
    name: string
}

const BoardItem = ({ isActive, name }: Props) => {
    return (
        <div
            className={` flex items-center gap-[16px] ps-[32px] py-[14px] w-full rounded-e-[100px] ${
                isActive ? 'bg-[#635FC7]' : 'hover:bg-[#635fc733]'
            } `}
        >
            <Board isActive={isActive} />
            <p
                className={`text-[15px] font-[700] whitespace-nowrap ${
                    isActive ? '' : 'text-[#828FA3]'
                }`}
            >
                {name}
            </p>
        </div>
    )
}

export default BoardItem
