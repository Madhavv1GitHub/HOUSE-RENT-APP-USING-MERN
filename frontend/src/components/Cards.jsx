import React from 'react'

function Cards() {
    return (
        <>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <img
                    src='assets/Profile.jpg'
                    
                    class="w-full h-48 object-cover rounded-t-lg"
                />
                <div class="p-6">
                    <h3 class="text-lg font-semibold">Cozy Apartment</h3>
                    <p class="text-muted-foreground">2 Beds, 1 Bath</p>
                    <p class="text-lg font-bold">$1,500/month</p>
                </div>
                <div class="flex items-center p-6">
                    <button class=" bg-gray-900 text-white shadow-md shadow-gray-900/10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                        View Details
                    </button>
                </div>
            </div>

        </>
    )
}

export default Cards