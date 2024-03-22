

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import GithubProvider from "next-auth/providers/github";
import User from "@/app/models/userModel";
import { connectToDB } from "@/app/utils/database";

 

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID ??"",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET ??"",
            // scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",

        })
    ],

    callbacks:{
        async session({ session }) {
            if (session.user) {
                const sessionUser = await User.findOne({
                    email: session.user.email,
                });
                if (sessionUser) {
                    session.user.id = sessionUser._id.toString();
                }
            }
            return session; 
            
        },
        
                
            
                async signIn({profile}){
            try{
            await connectToDB(); 
            
            
            // check if user exist: 
            const userExists = await User.findOne({
                email:profile.email
            
            }); 
            
            //if not , create a new user: 
            if(!userExists){
                await User.create({
                    email:profile.email,
                    username:profile.name.replace(" ","").toLowerCase(),
                    image:profile.picture
                })
            }
            
            
            
            return true; 
            }
            catch(error){
            console.log(error); 
            return false ; 
            
            }
                }
    }

})

export {handler as GET, handler as POST}; 

