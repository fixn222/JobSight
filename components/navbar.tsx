"use client"
import { Briefcase, Ghost } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from '@/lib/auth/auth-client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import SignOutBtn from './SignOutBtn'
import { useSession } from '@/lib/auth/auth-client'

const Navbar = () => {

    // const session = await getSession();

    const { data: session } = useSession();

    // console.log(session);

    return (
        <nav className='border-b border-gray-200 bg-white '>
            <div className='container mx-auto flex h-16 items-center px-4 justify-between'>
                <Link href={"/"} className="flex items-center gap-2 text-xl font-semibold text-primary">
                    <Briefcase />
                    Job Sight
                </Link>

                <div className="flex items-center gap-4">
                    {session?.user ? (<>

                        <Link href={"/dashboard"}>
                            <Button
                                variant={"ghost"}
                                className='text-gray-700 hover:text-black'
                            >
                                Dashboard
                            </Button>

                        </Link>

                        <DropdownMenu >
                            <DropdownMenuTrigger>
                                <Button variant={"ghost"}
                                    className='relative h-8 w-8 rounded-full'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarFallback className='bg-primary text-white'>
                                            {session.user.name[0].toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56' align='end'>
                                <DropdownMenuLabel className='font-normal'>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-sm font-medium leading-none'>{session.user.name}</p>
                                        <p className='text-xs leading-none text-muted-foreground'>{session.user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <SignOutBtn />
                            </DropdownMenuContent>
                        </DropdownMenu>




                    </>) : (<>

                        <Link href={"/sign-in"}>
                            <Button variant={"ghost"} className='text-gray-600 hover:text-black'>
                                Log In
                            </Button>
                        </Link>
                        <Link href={"/sign-up"}>
                            <Button variant={"default"} className='bg-primary hover:bg-primary/90'>
                                Start for free
                            </Button>
                        </Link>
                    </>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
