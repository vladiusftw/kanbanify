'use client'
import React from 'react'

type Props = {
    isOpen: boolean
    className?: string
    children: React.ReactNode
}

const Popover = ({ className, isOpen, children }: Props) => {
    return (
        <div
            className={`transition-opacity absolute overflow-hidden duration-300 z-50 ${
                isOpen ? 'opacity-100' : ' opacity-0'
            } ${className}`}
        >
            {children}
        </div>
    )
}

export default Popover
