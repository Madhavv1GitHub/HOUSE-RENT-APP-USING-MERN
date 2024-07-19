import React from 'react'

function Footer() {
    return (
        <>

            <footer class="p-4 bg-black text-white">
                <div class="container mx-auto text-center">
                    <p>© 2023 Rental App. All rights reserved.</p>
                    <div class="flex justify-center space-x-4 mt-2">
                        <a class="hover:underline" href="#">
                            Privacy Policy
                        </a>
                        <a class="hover:underline" href="#">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
