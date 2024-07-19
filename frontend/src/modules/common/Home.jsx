import React from 'react'
import Header from '../../components/Header'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <>
      <div class="flex min-h-[100dvh] flex-col">
        <main class="flex-1">
          <section class="bg-primary text-primary-foreground py-12 md:py-20 lg:py-28">
            <div class="container mx-auto px-4 md:px-6 lg:px-8">
              <div class="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Find Your Perfect Rental</h1>
                  <p class="mb-8 text-lg md:text-xl">Our rental app makes it easy to discover and book the ideal property for your needs.</p>
                  <button onClick={()=>{navigate('/About')}}  class="bg-black text-white border border-gray-300 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-5 text-sm font-medium transition-transform  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50">About Us</button>
                </div>
                <div>
                  <img src='assets/Profile.jpg' alt="Hero Image" class="rounded-xl" />
                </div>
              </div>
            </div>
          </section>

        </main>
       
      </div>

    </>
  )
}
export default Home