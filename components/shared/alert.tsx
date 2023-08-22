'use client'
import React, { useEffect, useState } from 'react'

type Props = {
    title: string
    className: string
    time: number
}

const Alert = ({ title, className }: Props) => {
    return (
        <div className="fixed bottom-0">
            <p className="text-[14px] font-bold">{title}</p>
        </div>
    )
}

export default Alert
