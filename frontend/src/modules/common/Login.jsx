import React, { useState } from 'react';
import Header from '../../components/Header'

function Login() {
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const [user_type, setUser_type]=useState();

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:3001/r', {email, password,user_type})
            .then(result => {console.log(result) 
            navigate('/prp')})
            .catch(err => console.log(err))

    }

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
                                    <form onSubmit={handleSubmit}>
                                        <div class="bg-card text-card-foreground w-full max-w-md rounded-lg border shadow-sm" data-v0-t="card">
                                            <div class="flex flex-col space-y-1 p-6">
                                                <h3 class="whitespace-nowrap text-2xl font-semibold tracking-tight">Login</h3>

                                            </div>
                                            <div class="relative h-10 w-72 min-w-[200px] ml-6">
                                                <select name='user-type' id='user-type' onChange={(e) => setUser_type(e.target.value)}
                                                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                                    <option value="Owner">Owner</option>
                                                    <option value="Renter">Renter</option>
                                                    
                                                </select>
                                                <label
                                                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                    Select a User Type
                                                </label>
                                            </div>
                                            <div class="grid gap-4 p-6">
                                                <div class="grid gap-2">
                                                    <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Email </label>
                                                    <input  name="email" id="email" placeholder="john@example.com" type="email" onChange={(e) => setEmail(e.target.value)} class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  required />
                                                </div>
                                                <div class="grid gap-2">
                                                    <label for="password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Password </label>
                                                    <input name="password"  id="password" type="password" onChange={(e) => setpassword(e.target.value)} class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  required />
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