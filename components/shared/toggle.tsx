import React from 'react'

type Props = {
    isDark: boolean
    onClick: () => void
}

const Toggle = ({ isDark, onClick }: Props) => {
    return (
        <button
            className="w-[40px] h-[20px] bg-[#635FC7] rounded-[12px] py-[3px]"
            onClick={onClick}
        >
            <div
                className={`w-[14px] h-[14px] rounded-[14px] bg-white transition-transform duration-[0.5s] ${
                    isDark ? 'translate-x-[23px]' : 'translate-x-[3px]'
                }`}
            />
        </button>
    )
}

export default Toggle
