import '@/styles/global.css'
import '@/styles/fonts.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import Providers from './providers'

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
            <body className="bg-white dark:bg-[#20212C] text-[#000112] dark:text-white relative">
                <Providers>
                    <div className="h-screen flex flex-col w-full relative">
                        <Navbar />
                        <div className="flex h-full w-full overflow-hidden">
                            <Sidebar />
                            {children}
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
