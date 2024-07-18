import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProperty() {
    const [propertyname, setPropertyName] = useState();
    const [propertytype, setPropertytype] = useState();
    const [bathrooms, setBathroom] = useState();
    const [bedrooms, setBedroom] = useState();
    const [livingrooms, setLivingroom] = useState();
    const [kithcen, setKitchen] = useState();
    const [sqft, setSqft] = useState();
    const [address, setAddress] = useState();
    const [propertyimage, setPropertyimage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:3001/addproperty', { propertyname, propertytype, bathrooms, bedrooms, livingrooms, kithcen, sqft, address, propertyimage })
            .then(result => {
                console.log(result)
                navigate('/details')
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            <div class="bg-card text-card-foreground mx-auto w-full  rounded-lg border shadow-sm max-w-screen-lg mt-11">
                <div class="space-y-6 p-4">
                    <div class="space-y-2 text-center">
                        <h1 class="text-3xl font-bold">Add Your Property</h1>
                        <p class="text-muted-foreground">Fill out the form below to list your property.</p>
                    </div>
                    <form class="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
                        <div class="space-y-4">
                            <div class="grid gap-2">
                                <label for="propertyname" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Property Name </label>
                                <input onChange={(e) => setPropertyName(e.target.value)} type='text' id="propertyname" name="propertyname" placeholder="Enter property name" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                            <div class="relative h-10 w-full ">
                                <select name='propertytype' id='property-type'
                                    onChange={(e) => setPropertytype(e.target.value)} class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    <option value="PentHouse">PentHouse</option>
                                    <option value="Apartment">Apartment</option>

                                </select>
                                <label for="propertytype"
                                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Select a Property Type
                                </label>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="grid gap-2">
                                    <label for="bathrooms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Bathrooms </label>
                                    <input onChange={(e) => setBathroom(e.target.value)} type="number" id="bathrooms" name="bathrooms" placeholder="Enter number of bathrooms" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                </div>
                                <div class="grid gap-2">
                                    <label for="bedrooms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Bedrooms</label>
                                    <input onChange={(e) => setBedroom(e.target.value)} type="number" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                </div>
                                <div class="grid gap-2">
                                    <label for="Livingrooms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Livingrooms </label>
                                    <input onChange={(e) => setLivingroom(e.target.value)} type="number" id="Livingrooms" name="Livingrooms" placeholder="Enter number of Livingrooms" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                </div>
                                <div class="grid gap-2">
                                    <label for="kitchen" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Kitchen</label>
                                    <input onChange={(e) => setKitchen(e.target.value)} type="number" id="kitchen" name="kitchen" placeholder="Enter number of kitchen" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                </div>

                            </div>
                            <div class="grid gap-2">
                                <label for="sqft" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Square Footage </label>
                                <input onChange={(e) => setSqft(e.target.value)} type="number" id="sqft" name="sqft" placeholder="Enter square footage" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                            <div class="grid gap-2">
                                <label for="address" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Address </label>
                                <input onChange={(e) => setAddress(e.target.value)} type='text' id="address" name='address' placeholder="Enter property address" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="grid gap-2">
                                <label for="image" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Upload Image </label>
                                <input onChange={(e) => setPropertyimage(e.target.value)} type='text' id="image" name='image' class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                        </div>

                        <div class="flex justify-end pl-11">
                            <button  class="ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-md shadow-gray-900/10 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Add Property</button>
                        </div>


                    </form>

                </div>
            </div>

        </>
    )
}

export default AddProperty
