import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function AllProperties() {


    const [propertyDetails, setpropertyDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/propertyget/${id}`)
            .then((res) => { console.log(res.data), setpropertyDetails(res.data) })
            .catch(err => { console.log(err) })



    }, [])





    return (

        <>

            <div class="mx-auto max-w-6xl p-4 sm:p-6 md:p-8">
                <div class="grid gap-8 md:grid-cols-2">
                    <div class="grid gap-6">
                        <div>
                            <img src={propertyDetails.
                                propertyimage} class="w-full rounded-lg object-cover" />
                        </div>
                        <div class="grid gap-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="grid gap-1">
                                    <div class="text-muted-foreground text-sm font-medium">Address</div>
                                    <div><a href="https://maps.app.goo.gl/aUsG7Ffrps1AjsM46" >123 Main St, Anytown USA</a></div>
                                </div>
                                <div class="grid gap-1">
                                    <div class="text-muted-foreground text-sm font-medium">Rooms</div>
                                    <div>2 Bedrooms, 1 Bathroom, 1 Kitchen, 1 Living Room</div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="grid gap-1">
                                    <div class="text-muted-foreground text-sm font-medium">Owner</div>
                                    <div>
                                        <b> Madhavv Vishwanath </b>
                                    </div>
                                </div>
                                <div class="grid gap-1">
                                    <div class="text-muted-foreground text-sm font-medium">Availability</div>
                                    <div>Available now</div>
                                </div>
                            </div>
                            <div class="grid gap-1">
                                <div class="text-muted-foreground text-sm font-medium">Description</div>
                                <div>This cozy 2-bedroom, 1-bathroom apartment is located in the heart of the city. It features hardwood floors, a modern kitchen, and a spacious living room. The building has a shared laundry room and a small backyard. Perfect for a single person or a couple.oom apartment is located in the heart of the city. It features hardwood floors, a modern kitchen, and a spacious living room. The building has a</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-6">
                        <div class="bg-card text-card-foreground rounded-lg border shadow-sm" >
                            <div class="flex flex-col space-y-1.5 p-6">
                                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Booking Details</h3>
                            </div>
                            <div class="grid gap-4 p-6">
                                <div class="grid gap-1">
                                    <div class="text-muted-foreground text-sm font-medium">Monthly Rent</div>
                                    <div class="text-3xl font-bold">₹9,500</div>
                                </div>

                                <div class="flex items-center p-6">
                                    <button class="ring-offset-background focus-visible:ring-ring hover:bg-grey-900 inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-8 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Book Now</button>
                                </div>
                            </div>
                            <div class="bg-card text-card-foreground rounded-lg border shadow-sm" >
                                <div class="flex flex-col space-y-1.5 p-6">
                                    <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Owner Details</h3>
                                </div>
                                <div class="grid gap-4 p-6">
                                    <div class="flex items-center gap-4">
                                        <span class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border">
                                            <img class="aspect-square h-full w-full" alt="Owner" src="https://media.gettyimages.com/id/478558797/photo/the-winter-soldier-los-angeles-premiere.jpg?s=612x612&w=gi&k=20&c=9KAQ-61M5Fkl4hUkv5xJu1vLUiPrfJ0mwyrQvzGPOEI=" />
                                        </span>
                                        <div class="grid gap-1">
                                            <div class="font-medium">Madhavv Vishwanath</div>
                                            <div class="text-muted-foreground text-sm">Superhost</div>
                                        </div>
                                    </div>
                                    <div class="grid gap-1">
                                        <div class="text-muted-foreground text-sm font-medium">About the Owner</div>
                                        <div>Meet Madhavv Vishwanath, the proud and attentive owner of this delightful home. With a background in hospitality and over five years of hosting experience, Jane has transformed this residence into a cozy haven for her guests. His attention to detail and commitment to excellence are evident in every corner of the house. Madhavv is not only a superhost but also a passionate gardener and a culinary enthusiast, often sharing tips and local insights with her guests. He is known for his warm and friendly demeanor, always going the extra mile to ensure a comfortable and enjoyable stay. Whether it's a quick response to inquiries or personalized recommendations for exploring the area, Madhavv’s dedication to her guests makes every visit truly special</div>
                                    </div>
                                    <div class="grid gap-1">
                                        <div class="text-muted-foreground text-sm font-medium">Contact</div>
                                        <div class="grid gap-2">
                                            <div>
                                                <a class="text-blue-600 underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavv@gmail.com" target="_blank"> madhavv@gmail.com </a>
                                            </div>
                                            <div>
                                                <p>+91 8667233696</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProperties