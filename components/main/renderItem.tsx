import React from 'react'
import { Subtask, ToDo } from '../shared/types'

type Props = {
    item: ToDo
}

const RenderItem = ({ item }: Props) => {
    const numCompleted = item?.subtasks
        ?.map((item) => Number(item.completed))
        .reduce((finalSum: number, currNum: number) => finalSum + currNum)
    return (
        <div className="py-[10px] px-[24px] ">
            <div className="group w-full min-w-[280px] bg-white dark:bg-[#2B2C37] py-[23px] px-[16px] shadow-[0px_4px_6px_0px_rgba(54,78,126,0.10)] rounded-[8px] flex flex-col gap-[8px]">
                <p className="group-hover:text-[#635FC7] text-[15px] font-[700]">
                    {item?.title}
                </p>
                <span className="text-[12px] font-[700] text-[#828FA3]">{`${numCompleted} of ${item?.subtasks?.length} subtasks`}</span>
            </div>
        </div>
    )
}

export default RenderItem
