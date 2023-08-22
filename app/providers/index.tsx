'use client'
import store, { persistor } from '@/store/store'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider
                    themes={['dark', 'light']}
                    defaultTheme="dark"
                    attribute="class"
                >
                    {children}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default Providers
