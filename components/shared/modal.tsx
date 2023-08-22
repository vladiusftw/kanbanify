'use client'
import React from 'react'

type Props = {
    children: React.ReactNode
    onBackDropPress: () => void
    isOpen: boolean
}

const Modal = ({ children, onBackDropPress, isOpen }: Props) => {
    return (
        <div
            className={`${
                isOpen ? 'flex flex-col' : 'hidden'
            } top-0 left-0 fixed w-screen h-screen p-2 hover:cursor-pointer z-10 bg-[#00000080] items-center justify-center`}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onBackDropPress()
            }}
            onKeyUp={(e) => {
                e.preventDefault()
            }}
        >
            {children}
        </div>
    )
}

export default Modal
