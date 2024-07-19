import React from 'react'

function AboutUs() {
    return (
        <>


            <div class="flex flex-col min-h-screen">

                <main class="flex-1 p-8">
                    <div class="max-w-4xl mx-auto space-y-8">
                        <div>
                            <h1 class="text-4xl font-bold">About Us</h1>
                            <p class="text-lg text-muted-foreground mt-4">
                                Rental App is a leading platform that connects renters with the perfect properties. Our mission is to
                                simplify the rental process and provide a seamless experience for both landlords and tenants.
                            </p>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold">Our Story</h2>
                            <p class="text-lg text-muted-foreground mt-4">
                                Rental App was founded in 2024 by a team of passionate Web Dev enthusiasts who saw the need for a more
                                efficient and user-friendly rental platform. We started with a simple goal: to make the rental process
                                easier and more accessible for everyone.
                            </p>
                            <p class="text-lg text-muted-foreground mt-4">
                                Over the years, we've grown to become one of the most trusted rental platforms in the industry. Our team
                                of experts works tirelessly to curate a diverse selection of properties and provide exceptional customer
                                service to our users.
                            </p>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold">Our Values</h2>
                            <ul class="text-lg text-muted-foreground mt-4 space-y-2">
                                <li>
                                    <span class="font-bold">Transparency:</span> We believe in being upfront and honest with our users,
                                    providing clear and accurate information about our properties and services.
                                </li>
                                <li>
                                    <span class="font-bold">Accessibility:</span> Our platform is designed to be user-friendly and
                                    accessible to everyone, regardless of their technical expertise or background.
                                </li>
                                <li>
                                    <span class="font-bold">Innovation:</span> We are constantly exploring new ways to improve the rental
                                    experience, leveraging the latest technologies and industry insights to stay ahead of the curve.
                                </li>
                                <li>
                                    <span class="font-bold">Community:</span> We are committed to building a strong and supportive community
                                    of renters and landlords, fostering connections and collaboration.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold">Our Team</h2>
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                                <div class="bg-muted rounded-lg p-4 shadow-lg">
                                    <img src={""} alt="John Doe" class="rounded-full w-24 h-24 mx-auto" />
                                    <h3 class="text-xl font-bold mt-4">John Doe</h3>
                                    <p class="text-muted-foreground">Co-Founder and CEO</p>
                                </div>
                                <div class="bg-muted rounded-lg p-4 shadow-lg">
                                    <img src={"" } alt="Jane Smith" class="rounded-full w-24 h-24 mx-auto" />
                                    <h3 class="text-xl font-bold mt-4">Jane Smith</h3>
                                    <p class="text-muted-foreground">Co-Founder and CTO</p>
                                </div>
                                <div class="bg-muted rounded-lg p-4 shadow-lg">
                                    <img src={ ""} alt="Michael Johnson" class="rounded-full w-24 h-24 mx-auto" />
                                    <h3 class="text-xl font-bold mt-4">Michael Johnson</h3>
                                    <p class="text-muted-foreground">Head of Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>

        </>
    )
}

export default AboutUs
