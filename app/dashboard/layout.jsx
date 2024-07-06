import React from 'react'
import PageHeader from '@/components/PageHeader'

export default function Layout({ children }) {
    return (
        <>
            <PageHeader className="my-8" />
            <main>
                {children}
            </main>
            <footer className="mt-auto text-center py-8">Footer</footer>
        </>
    )
}
