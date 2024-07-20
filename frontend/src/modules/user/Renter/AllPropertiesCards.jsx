import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function AllPropertiesCards() {
    const [propertyCardsDetails, setpropertyCardsDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/propertyget')
            .then((res) => { console.log(res.data), setpropertyCardsDetails(res.data) })
            .catch(err => { console.log(err) })

    }, [])


    return (
        <>

            <div>

                <main class="px-4 pt-12 pb-32 md:px-6">
                    <div class="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {propertyCardsDetails.map((post) => {
                            return (
                                <>

                                    
                                    <div class="block" >
                                        <div class="bg-card text-card-foreground rounded-lg border shadow-sm">
                                            <img src={post.propertyimage} alt="Property Image" class="h-48 w-full rounded-t-lg object-cover" />
                                            <div class="p-6">
                                                <h3 class="text-lg font-semibold">{post.propertyname}</h3>
                                                <p class="text-muted-foreground">{post.bedrooms} Beds,{post.bathrooms} Bath</p>
                                                <p class="text-lg font-bold">${post.rent}/month</p>
                                            </div>

                                            <div class="flex items-center p-6">
                                                <Link to={`/prp/${post._id}`} key={post._id} >
                                                    <button type='button' class=" bg-black text-white border-gray-300ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">View Details</button>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>


                                </>
                            )

                        })}




                    </div>
                </main>

            </div>

        </>
    )
}

export default AllPropertiesCards
