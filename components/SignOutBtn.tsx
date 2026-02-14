"use client"


import React from 'react'
import { DropdownMenuItem } from './ui/dropdown-menu'
import { signOut } from '@/lib/auth/auth-client'
import { useRouter } from 'next/navigation'

const SignOutBtn = () => {

    const router = useRouter();

    return (
        <div>
            <DropdownMenuItem onClick={async () => {
                const result =await signOut();

                if (result.data) {

                    router.push('sign-in');

                    
                }else{
                    alert("Error Signing out")
                }
                
            }}>
                Log out
            </DropdownMenuItem>
        </div>
    )
}

export default SignOutBtn