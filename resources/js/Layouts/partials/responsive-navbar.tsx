import ApplicationLogo from '@/Components/ApplicationLogo';
import { Button } from '@/Components/shadcn/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/shadcn/ui/dropdown-menu';
import { getFirstWord, strLimit } from '@/lib/utils';
import { PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { ChevronDownCircleIcon, CircleUserRoundIcon, LogOutIcon, Settings2Icon } from 'lucide-react';
import React from 'react'

function ResponsiveNavbar() {
    const { auth } = usePage<PageProps>().props;
  return (
    <nav className='block border-b px-4 py-2 sm:hidden'>
            <div className='flex items-center justify-between py-1'>
                <Link href='/'>
                    <ApplicationLogo className='w-8 fill-red-600' />
                </Link>
                <div className='flex items-center gap-x-1'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='focus:outline-none'>
                            <Button variant='secondary' className='bg-secondary/50 hover:bg-secondary/60 border'>
                                {auth?.user ? getFirstWord(auth.user.name) : 'Menu'}
                                <ChevronDownCircleIcon className='ml-2 h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mr-8 w-72'>
                            {auth.user && (
                                <>
                                    <DropdownMenuLabel>
                                        <div className='flex items-center font-normal'>
                                            <div className='ml-3'>
                                                <strong className='font-semibold text-primary'>{auth.user.name}</strong>
                                                <div className='text-muted-foreground'>
                                                    {strLimit(auth.user.email, 28)}
                                                </div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                </>
                            )}
                            <DropdownMenuItem asChild>
                                <Link href={route('home')}>Home</Link>
                            </DropdownMenuItem>
                            {auth?.user ? (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href={route('dashboard')}>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='flex justify-between items-center' asChild>
                                        <Link href={route('profile.edit')}>Profile</Link>
                                        <Settings2Icon className='h-4 w-4' />
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link className='flex items-center' href={route('login')}>
                                            <LogOutIcon className='rotate-180 mr-2 h-4 w-4' />
                                            <span>Login</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link className='flex items-center' href={route('register')}>
                                            <CircleUserRoundIcon className='mr-2 h-4 w-4' />
                                            <span>Register</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
  )
}

export default ResponsiveNavbar
