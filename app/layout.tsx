import '@/styles/global.css'
import '@/styles/fonts.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import ThemeProvider from './providers/themeProvider'
import EyeShow from '@/components/shared/icons/eyeShow'

export const metadata: Metadata = {
    title: 'Kanbanify',
    description: "Where all the ToDo's can be placed!",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-white dark:bg-[#20212C] text-[#000112] dark:text-white">
                <div className="h-screen w-full overflow-hidden">
                    <Navbar />
                    <div className="flex h-full w-full overflow-hidden">
                        <ThemeProvider>
                            <Sidebar />
                        </ThemeProvider>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
