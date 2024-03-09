import CardSectionTitle from '@/Components/CardSectionTitle';
import { Card, CardContent } from '@/Components/shadcn/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import React from 'react'

function Dashboard() {
    const { auth } = usePage<PageProps>().props;
  return (
    <>
            <Head title='Dashboard' />
            <>
                <Card>
                    <CardSectionTitle
                     title='Dashboard'
                     description={`Hi ${auth.user.name}, you are now logged in.`}
                    />
                    <CardContent>
                        Hi {auth.user.name}, you are now logged in.
                        <div className='mb-2 text-muted-foreground'>// The page you are currently visiting is</div>
                        <div className='text-lime-600 dark:text-lime-400'>"resources/js/Pages/Dashboard.tsx"</div>
                    </CardContent>
                </Card>
            </>
        </>
  )
}

Dashboard.layout = (page: any) => <AuthenticatedLayout title='Dashboard' children={page}/>

export default Dashboard
