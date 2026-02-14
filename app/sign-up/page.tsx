'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import assert from 'node:assert'
import React, { useState } from 'react'
import { signUp } from '@/lib/auth/auth-client'
import { useRouter } from 'next/navigation'
import GoogleButton from '@/components/GoogleButton'

const SignUp = () => {

  const [name  , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const [error , setError ] = useState("");
  const [loading , setLoading] = useState(false);
  const router = useRouter();


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);


    try {

     const result = await signUp.email({
        name ,
        email , 
        password,
      });

      if (result.error) {
        setError(result.error.message ?? "faild to sign up");
        
      }else{

        router.push("/dashboard");

      }
      
    } catch (error) {
      setError("An unexpected error ocurred")
      
    }finally{
      setLoading(false)
    }
    
  }


  return (
    <div className='flex min-h-[calc(100vh)] items-center justify-center p-4 '>
       <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
              <div className='rounded-md bg-destructive/15 p-3 text-sm text-destructive'>
                {error}
              </div>
            )}
           
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                 onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                 onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                minLength={8}
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Creating account...":"Sign Up"}

            </Button>

            <GoogleButton  />

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default SignUp