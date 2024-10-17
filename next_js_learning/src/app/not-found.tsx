import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                <h1 className='mb-4'>page is not found go to home page</h1>
                <Link href='/' className='p-3 rounded-lg bg-green-600 mt-6'>home</Link>

            </div>
        </div>
    )
}
