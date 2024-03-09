import React from 'react'
import { PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Button } from '@/Components/shadcn/ui/button';
import { ChevronDownCircleIcon, LayoutDashboardIcon, LogOutIcon, Settings2Icon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/shadcn/ui/dropdown-menu';
import ResponsiveNavbar from './responsive-navbar';

function Navbar() {
    const { auth } = usePage<PageProps>().props;
  return (
    <>
        <ResponsiveNavbar />
            <nav className='relative z-10 hidden border-b py-3 sm:block'>
                <div className='mx-auto max-w-screen-2xl items-center sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <Link href='/' className='mr-3'>
                                <ApplicationLogo className='w-9 fill-foreground' />
                            </Link>
                            <NavLink active={route().current('home')} href='/'>
                                Home
                            </NavLink>
                        </div>
                        {auth.user ? (
                            <div className='flex items-center gap-x-1'>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant='secondary'
                                            className='bg-secondary/50 hover:bg-secondary/60 border'>
                                            {auth.user.name}
                                            <ChevronDownCircleIcon className='ml-2 h-4 w-4' />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className='mr-8 w-60'>
                                        <DropdownMenuItem onClick={() => router.get(route('dashboard'))}
                                        className='justify-between'
                                        >
                                            <span>Dashboard</span>
                                            <LayoutDashboardIcon className='mr-2 h-4 w-4' />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className='justify-between'
                                            onClick={() => router.get(route('profile.edit'))}>
                                            <span>Settings</span>
                                            <Settings2Icon className='mr-2 h-4 w-4' />
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => router.post(route('logout'))}
                                        className='justify-between'
                                        >
                                            <span>Logout</span>
                                            <LogOutIcon className='mr-2 h-4 w-4'/>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant='secondary'
                                        className='bg-secondary/50 hover:bg-secondary/60 border'>
                                        Login
                                        <ChevronDownCircleIcon className='ml-2 h-4 w-4' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='mr-8 w-40'>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('login')}>Login</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('register')}>Register</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar
