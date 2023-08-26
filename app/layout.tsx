import '@/styles/global.css'
import '@/styles/fonts.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import Providers from './providers'

export const metadata: Metadata = {
    title: 'Kanbanify - Todo List and Kanban Board Website',
    description:
        'Kanbanify is a powerful online platform designed to streamline task management, boost productivity, and enhance collaboration through its intuitive todo list and Kanban board features. Stay organized, prioritize tasks, and achieve your goals seamlessly with Kanbanify.',
    keywords: [
        'Kanbanify',
        'Todo list',
        'Kanban board',
        'Task management',
        'Productivity',
        'Collaboration',
        'Project management',
        'Task prioritization',
        'Workflow optimization',
        'Project planning',
        'Online task manager',
        'Team collaboration',
        'Task tracking',
    ],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    openGraph: {
        type: 'website',
        url: process.env.VERCEL_URL ?? '',
        title: 'Kanbanify - Todo List and Kanban Board Website',
        description:
            'Kanbanify is a powerful online platform designed to streamline task management, boost productivity, and enhance collaboration through its intuitive todo list and Kanban board features. Stay organized, prioritize tasks, and achieve your goals seamlessly with Kanbanify.',
        images: [
            {
                url: '/logo.png',
                alt: 'Kanbanify Logo',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-white dark:bg-[#20212C] text-[#000112] dark:text-white fixed w-full h-full overflow-hidden">
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
