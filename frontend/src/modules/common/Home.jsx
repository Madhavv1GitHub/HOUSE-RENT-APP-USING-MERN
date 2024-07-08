import React from 'react'
function Home() {
  return (
    <>
      <div class="flex min-h-[100dvh] flex-col">
        <header class="bg-primary text-primary-foreground flex items-center justify-between px-6 py-4">
          <a class="flex items-center gap-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span class="text-xl font-bold">Rental App</span>
          </a>
         
          <div class="flex items-center gap-2">
            <button class="bg-black text-white border border-gray-300 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-gray-800 hover:underline hover:underline-offset-4 hover:decoration-white disabled:pointer-events-none disabled:opacity-50">Renter Login</button>
            <button class="bg-black text-white border border-gray-300 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-gray-800 hover:underline hover:underline-offset-4 hover:decoration-white disabled:pointer-events-none disabled:opacity-50">Owner Login</button>
          </div>
        </header>
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