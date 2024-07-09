import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Header() {
    const [role, setRole] = useState(null);
    const user=role;
    const navigate=useNavigate();
    return (
        <>
           
            <header class="bg-primary text-primary-foreground flex items-center justify-between px-6 py-4">
                <a class="flex items-center gap-2" onClick={()=>navigate("/home")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xl font-bold">Rental App{user && <span class="pl-8">{user}</span>}</span>
                </a>

                <div class="flex items-center gap-2">
                    
                    <button onClick={()=>{navigate("/Register")}} class="bg-black text-white border border-gray-300 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-gray-800 hover:underline hover:underline-offset-4 hover:decoration-white disabled:pointer-events-none disabled:opacity-50"  >Register</button>
                    <button onClick={()=>{navigate("/login")}}    class="bg-black text-white border border-gray-300 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-gray-800 hover:underline hover:underline-offset-4 hover:decoration-white disabled:pointer-events-none disabled:opacity-50"  >Login</button>
                </div>
                
            </header>
            
        </>
    )
}

export default Header
