import React from 'react'
import { Button } from './ui/button'
import { signIn } from '@/lib/auth/auth-client'

const GoogleButton = () => {



    return (
        <div>
            <Button
                type="submit"
                className=" bg-primary w-full hover:bg-primary/90 "

                onClick={() => {
                    signIn.social({ provider: "google" })

                }}

            >
                countinue with google

            </Button>
        </div>
    )
}

export default GoogleButton