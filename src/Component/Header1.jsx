const Header1 = () => {
    return (
        <>
            <div>
                <div className="text-white relative bg-black text-center">
                    <a
                        className="block no-underline text-inherit"
                        data-segment-analytics='{"event_name":"promo_flash_banner_clicked)","label":"watford_banner"}'
                        href="/watford"
                    >
                        <img
                            alt="Stripe left"
                            className="absolute hidden md:block top-0 left-0 h-full"
                            src="https://assets.republic.com/assets/layouts/flashes/watford/stripes_left_mobile-c05b69d5909181a28cec809afd02e0b8c3288971bdba412c1b5415fbab20701a.png"
                        />
                        <img
                            alt="Stripe right"
                            className="absolute hidden md:block top-0 right-0 h-full"
                            src="https://assets.republic.com/assets/layouts/flashes/watford/stripes_right_mobile-5e8454e87ff716c62d3ee560b486c4aca7333668403aa58c64f1b5fd86b928be.png"
                        />
                        <img
                            alt="Stripe left"
                            className="absolute hidden md:block top-0 left-0 h-full"
                            src="https://assets.republic.com/assets/layouts/flashes/watford/stripes_left-f1645d940efb941931e07aa0c4877527f980a44bae10b4491e5263a043962371.png"
                        />
                        <img
                            alt="Stripe right"
                            className="absolute hidden md:block top-0 right-0 h-full"
                            src="https://assets.republic.com/assets/layouts/flashes/watford/stripes_right-71400149c281535427be8fba38d743ae0823c05cb1b3e54c6fa2a805edff68f9.png"
                        />
                        <div className="flex flex-wrap justify-center items-center px-4 py-8">
                            <div className="flex items-center flex-wrap text-center sm:text-left accent-inherit-500" id='promo'>
                                <p className="text-lg font-bold mr-2 mb-2 sm:mb-0">
                                    Own a team one step from the Premier League
                                </p>
                                <img
                                    className="inline-block mr-2 mb-2 sm:mb-0"
                                    alt="Watford logo"
                                    src="https://assets.republic.com/assets/layouts/flashes/watford/watford_logo-44f004ca5c732f1db1f26fb06a2677f91259b04bf731b320ba0e827d0cda0bf3.png"
                                />
                                <div className="hidden sm:inline">
                                    Watford FC
                                </div>
                                <div className="inline-block sm:hidden">
                                    with
                                </div>
                                <span className="block sm:hidden">
                                    Watford Football Club
                                </span>
                            </div>
                            <div className="flex-grow"></div>
                            <div className="relative">
                                <div className="inline-block px-4 py-2 border border-white bg-black text-white border-rounded cursor-pointer whitespace-nowrap">
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>



// =============================================================================================

            <div className="container mx-auto">
                <nav className="border-gray-200 px-2 mb-10">
                    <div className="container mx-auto flex flex-wrap items-center justify-between">
                        <a href="/" className="flex">
                            <img src="https://assets.republic.com/assets/logo/icon/brand/36x40/logo-584528d3c0290325573833b80233780cd36a20e325d5b0d173bcf210463b0a3a.svg" alt="" />
                            <span className="self-center text-lg font-semibold whitespace-nowrap">Republic</span>
                        </a>
                        <div className="flex items-center">
                            <div className="relative mr-3 md:hidden">
                                <button data-collapse-toggle="mobile-menu" type="button" className="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden md:flex md:items-center md:ml-6" id="mobile-menu">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..." />
                                </div>
                                <div className="md:ml-4">
                                    <ul className="flex space-x-8">
                                        <li>
                                            <a href="/" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Investor</a>
                                        </li>
                                        <li>
                                            <a href="/" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Businesses</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header1