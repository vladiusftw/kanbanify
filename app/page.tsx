'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Column, ToDo } from '@/components/shared/types'
import RenderItem from '@/components/main/renderItem'
import { useSelector } from 'react-redux'
import { useAppSelector } from '@/store/store'
import CreateBoardModal from '@/components/shared/createBoardModal'
import AddTaskModal from '@/components/shared/addTaskModal'

export default function Home() {
    const { items } = useAppSelector((state) => state?.persistedReducer.boards)
    const colors: { [key: string]: string } = {
        todo: 'bg-[#49C4E5]',
        doing: 'bg-[#8471F2]',
        done: 'bg-[#67E2AE]',
    }

    const groupedItems: Column = items.reduce((group: Column, item: ToDo) => {
        if (!group[item?.status]) group[item?.status] = []
        group[item?.status]?.push(item)
        return group
    }, {})

    return (
        <>
            <AddTaskModal />
            <CreateBoardModal />
            <div className=" pb-[84px] pt-[24px] w-full h-full overflow-hidden">
                <div className="flex overflow-auto h-full">
                    {Object.entries(groupedItems)?.map(
                        (group: [string, ToDo[]], index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-[24px]"
                                >
                                    <div className="flex items-center gap-[12px] pl-[24px]">
                                        <div
                                            className={`w-[15px] h-[15px] ${
                                                colors[group?.[0]]
                                            } rounded-[100px]`}
                                        />
                                        <p className="uppercase text-[12px] font-[700] text-[#828FA3]">
                                            {`${group?.[0]} (${group?.[1]?.length})`}
                                        </p>
                                    </div>
                                    <div className="flex flex-col overflow-auto">
                                        {group?.[1]?.map(
                                            (item: ToDo, index2: number) => {
                                                return (
                                                    <RenderItem
                                                        item={item}
                                                        key={index2}
                                                    />
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
