import React from 'react'
import DarkLogo from '../shared/icons/darkLogo'
import DarkLogoMobile from '../shared/icons/darkLogoMobile'
import Dropdown from '../shared/icons/dropdown'
import Add from '../shared/icons/add'
import DotMenu from '../shared/icons/dotMenu'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="flex w-full border-b-solid border-b-[1px] border-b-[#3E3F4E] bg-[#2B2C37]">
            <div className="max-w-min md:max-w-[280px] lg:max-w-[300px] w-full md:border-r-solid md:border-r-[1px] md:border-r-[#3E3F4E] py-[30px] lg:py-[40px] ps-[34px] flex items-center">
                <DarkLogo className="hidden md:flex" />
                <DarkLogoMobile className="flex md:hidden" />
            </div>

            <div className="flex justify-between items-center px-[24px] w-full">
                <div className="flex items-center gap-[8px]">
                    <h1 className="font-[700] text-[18px] md:text-[24px]">
                        Platform Launch
                    </h1>
                    <div className="flex md:hidden">
                        <Dropdown isClicked={false} />
                    </div>
                </div>

                <div className="flex items-center gap-[24px]">
                    <button className="hidden md:flex rounded-[24px] bg-[#635FC7] py-[15px] px-[24px] text-[15px] font-[700]">
                        {'+ Add New Task'}
                    </button>
                    <button className="flex md:hidden rounded-[24px] bg-[#635FC7] py-[10px] px-[18px]">
                        <Add />
                    </button>
                    <button>
                        <DotMenu />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
