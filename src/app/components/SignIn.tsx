


"use client"

import React from "react"
import Link from "next/link"

import {signOut,signIn,useSession} from "next-auth/react"

const SignInButton = ()=>{
    const {data:session} = useSession(); 

    if(session && session.user){
        return(
            <div className="flex gap-4  ml-auto">
                <p className=" text-sky-600">
                {/* {session.user.email} */}
                    {/* {session.user.name} */}
                    {/* {session.user.image} */}
                    
                   
                </p>
               <Link target="blank" href="https://gmail.com">
                <img className=" h-10 w-10 rounded-full cursor-pointer" src={session.user.image} alt="Profile Photo" />
                </Link>
                <button className="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>signOut()}>
                    SignOut

                </button>


            </div>
        )
    }

    return(
        <div  className="text-green-600 ml-auto font-medium  ">

        <button className="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={()=>signIn()}>
            SignIn
        </button>

        </div>

      
    )
}

export default SignInButton; 
