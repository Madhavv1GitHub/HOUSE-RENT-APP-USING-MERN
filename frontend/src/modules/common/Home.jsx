import React from 'react'
import Header from '../../components/Header'

function Home() {
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
                </div>
                <div>
                  <img src='assets/Profile.jpg'  alt="Hero Image" class="rounded-xl" /> 
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