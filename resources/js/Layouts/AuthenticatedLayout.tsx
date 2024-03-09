import React, { PropsWithChildren } from 'react'
import ResponsiveNavbar from './partials/responsive-navbar';
import { Head } from '@inertiajs/react';
import { Aside } from './partials/aside/aside';
import { Toaster } from '@/Components/shadcn/ui/toaster';
import Navbar from './partials/navbar';


interface Props {
    title?: string;
}

function AuthenticatedLayout({ title, children }: PropsWithChildren<Props>) {
  return (
    <div>
            <Toaster />
            <Navbar />
            <Head title={title} />
            <div className='flex max-w-screen-2x mx-auto'>
                <Aside />
                <main className='w-full'>
                    <div className='sm:p-8 p-6'>{children}</div>
                </main>
            </div>
        </div>
  )
}

export default AuthenticatedLayout
