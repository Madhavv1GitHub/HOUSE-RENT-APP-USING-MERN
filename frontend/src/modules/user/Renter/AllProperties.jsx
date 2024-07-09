import React from 'react'
import Cards from '../../../components/Cards'

function AllProperties() {
    return (

        <>
            <div>
                <main class="py-8 px-4 md:px-6 mt-8">
                    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        


                    </div>
                </main>
            </div>
        </>
    )
}

export default AllProperties