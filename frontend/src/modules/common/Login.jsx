import React, { useState } from 'react';
import Header from '../../components/Header'

function Login() {
     
    return (
        <>
            <div class="flex min-h-[100vh] flex-col">
            
                <main class="flex-1">
                    <section class="w-full py-12 ">
                        <div class="container px-6 md:px-24">
                            <div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                                <div class="flex flex-col justify-center space-y-3">
                                    <div class="space-y-2">
                                        <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Login to Your Account</h1>
                                        <p class="text-muted-foreground max-w-[600px] md:text-xl">Welcome</p>
                                    </div>
                                    <form action="/submitted"method=''>
                                    <div class="bg-card text-card-foreground w-full max-w-md rounded-lg border shadow-sm" data-v0-t="card">
                                        <div class="flex flex-col space-y-1 p-6">
                                            <h3 class="whitespace-nowrap text-2xl font-semibold tracking-tight">Login</h3>
                                            <p class="text-muted-foreground text-sm">Enter</p>
                                        </div>
                                        <div class="grid gap-4 p-6">
                                            <div class="grid gap-2">
                                                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email"> Email </label>
                                                <input class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" type="email" required/>
                                            </div>
                                            <div class="grid gap-2">
                                                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password"> Password </label>
                                                <input class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" type="password" required/>
                                            </div>
                                        </div>
                                        <div class="flex items-center p-6">
                                            <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
  type="submit">Sign In</button>
                                        </div>
                                        <div class="flex p-6 justify-items-center" >
                                            <p>Not Registered? 
<a href="/register" class="p-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Register</a>
 </p>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div class="flex flex-col justify-center space-y-4">
                                    <img src="assets/Profile.jpg" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last " />
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default Login