"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import AuthForm from "@/components/Authform"

const Login = function(){
    const router = useRouter()

    const [error, setError]= useState("")

    const handleSubmit = async (e, email , password)=>{
        e.preventDefault()
        setError("")

        const supabase = createClientComponentClient()

        const {error } = await supabase.auth.signInWithPassword(
            {
                email,
                password
            }
        )

        if(!error){
            router.push("/")
        }
    }

    return(
        <main>
            <AuthForm handleSubmit={handleSubmit} title={"login"}/>
            {
                error && (
                    <div className="border-2 border-red-500 bg-red-300 text-red-800 py-1 px-2 rounded-smblockmax-w-fitmy-4 mx-auto">{error}</div>
                )
            }
        </main>
    )
}

export default Login;