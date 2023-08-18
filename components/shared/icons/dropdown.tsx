import React from 'react'

type Props = {
    isClicked: boolean
}

const Dropdown = ({ isClicked }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            className={`${
                !isClicked ? 'rotate-0' : 'rotate-180'
            } transition-transform duration-[0.5s]`}
        >
            <path d="M1 1L5 5L9 1" stroke="#635FC7" stroke-width="2" />
        </svg>
    )
}

export default Dropdown
