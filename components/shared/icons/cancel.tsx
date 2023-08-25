import React from 'react'

type Props = {
    className: string
}

const Cancel = ({ className }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            className={className}
        >
            <rect
                x="12.728"
                width="3"
                height="18"
                transform="rotate(45 12.728 0)"
                className="fill-inherit transition-colors duration-200"
            />
            <rect
                y="2.12109"
                width="3"
                height="18"
                transform="rotate(-45 0 2.12109)"
                className="fill-inherit transition-colors duration-200"
            />
        </svg>
    )
}

export default Cancel
