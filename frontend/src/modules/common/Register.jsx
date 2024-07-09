import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const [user_type, setUser_type]=useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:3001/r', { name,user_type,phone, email, password })
            .then(result => {console.log(result) 
            navigate('/login')})
            .catch(err => console.log(err))

    }

    return (
        <>
            <div class="bg-card text-card-foreground mx-auto w-full  rounded-lg border shadow-sm max-w-screen-lg mt-16">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="whitespace-nowrap text-2xl font-semibold tracking-tight">Register for House Rental</h3>
                    <p class="text-muted-foreground text-sm">Sign up to start renting your dream home.</p>
                </div>
                <div class="p-6">
                    <form class="grid gap-4" onSubmit={handleSubmit}>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Full Name </label>
                                <input name='name' id="name" placeholder="John Doe"  type='text'    onChange={(e) => setName(e.target.value)} class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  required />
                            </div>
                            <div class="space-y-2">
                                <label for="phone" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Phone Number </label>
                                <input name='phone' id="phone" placeholder="+1 (555) 555-5555" type="tel" onChange={(e) => setPhone(e.target.value)} class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  required />
                            </div>
                        </div>
                        <div class="relative h-10 w-full ">
                            <select name='user-type' id='user-type' onChange={(e) => setUser_type(e.target.value)}
                                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                <option value="Owner">Owner</option>
                                <option value="Renter">Renter</option>

                            </select>
                            <label for="user-type"
                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Select a User Type
                            </label>
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Email Address </label>
                            <input name="email" id="email" placeholder="john@example.com" type="email" onChange={(e) => setEmail(e.target.value)} class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  required />
                        </div>
                        <div class="space-y-2">
                            <label  for="password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Password </label>
                            <input name="password"  id="password" type="password" onChange={(e) => setpassword(e.target.value)} class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  required />
                        </div>
                        <div class="flex items-center p-6">
                            <button  type="submit"  class="block w-full select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"  >Register</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register