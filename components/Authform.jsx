"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function AuthForm({ handleSubmit ,title }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (

    <div class="md:flex items-center justify-center ">
    <div class="w-full max-w-sm p-8">
        <h2 class="text-2xl font-bold text-center mb-6">{title}</h2>
        
        <form action="#" onSubmit={(e) => handleSubmit(e, email, password)} >
            <div class="mb-2">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input 
                      type="email" 
                       id="email" 
                       name="email" 
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       value={email}
                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                       />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" 
                       id="password" 
                       name="password" 
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                       required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </div>
            <div class="flex-col items-center justify-between mb-6">
                <div class="flex items-center">
                    <input type="checkbox" id="remember" name="remember"
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                    <label for="remember" class="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                {
                  title === "login" && (
                    <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Forgot your password?</a>

                  )
                }
            </div>
            <button type="submit"
                class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Sign In
            </button>
        </form>
    </div>
    <Image 
          src={require("@/components/descu.png")}
          width={280}
          height={300}
          objectFit='cover'
          className='rounded-xl hidden md:inline-block'
        />
    </div>
  )
}