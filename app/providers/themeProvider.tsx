'use client'
import { ThemeProvider as Provider } from 'next-themes'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
    return (
        <Provider themes={['dark', 'light']} defaultTheme="light">
            {children}
        </Provider>
    )
}

export default ThemeProvider
