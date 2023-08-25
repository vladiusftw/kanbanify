import React from 'react'
import { ToDo } from '../shared/types'
import { useAppDispatch } from '@/store/store'
import { setCurrItem } from '@/store/slices/itemsReducer'
import { openShowTask } from '@/store/slices/modalsReducer'

type Props = {
    item: ToDo
}

const RenderItem = ({ item }: Props) => {
    const numCompleted =
        item?.subtasks?.length !== 0
            ? item?.subtasks
                  ?.map((item) => Number(item.completed))
                  .reduce(
                      (finalSum: number, currNum: number) => finalSum + currNum
                  )
            : 0
    const dispatch = useAppDispatch()
    return (
        <button
            className=" text-start p-[8px] min-w-[280px] max-w-[280px] md:max-w-[320px]"
            onClick={(e) => {
                e.preventDefault()
                dispatch(setCurrItem(item))
                dispatch(openShowTask())
            }}
        >
            <div className="group w-full  bg-white dark:bg-[#2B2C37] py-[23px] px-[16px] shadow-[0px_4px_6px_0px_rgba(54,78,126,0.10)] rounded-[8px] flex flex-col gap-[8px]">
                <p className="group-hover:text-[#635FC7] text-[15px] font-[700] overflow-hidden whitespace-nowrap text-ellipsis">
                    {item?.title}
                </p>
                <span className="text-[12px] font-[700] text-[#828FA3]">
                    {item?.subtasks.length !== 0
                        ? `${numCompleted} of ${item?.subtasks?.length} subtasks`
                        : '0 subtasks'}
                </span>
            </div>
        </button>
    )
}

export default RenderItem
