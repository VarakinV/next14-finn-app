import React, { Suspense } from 'react'
import TransactionList from './components/TransactionList'
import TransactionListFallback from './components/TransactionListFallback'

export default function Page() {
    return (
        <>
            <Suspense fallback={<TransactionListFallback />}>
                <TransactionList />
            </Suspense>
        </>
    )
}
