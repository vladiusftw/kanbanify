'use client'
import store from '@/store/store'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Provider } from 'react-redux'

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => {
    return (
        <Provider store={store}>
            <ThemeProvider themes={['dark', 'light']}>{children}</ThemeProvider>
        </Provider>
    )
}

export default Providers
