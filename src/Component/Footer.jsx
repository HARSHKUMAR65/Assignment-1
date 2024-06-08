import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div className="max-w-6xl mx-auto py-12">
                    <div className="grid gap-y-6 md:grid-cols-4 md:gap-x-10 md:gap-y-0 mb-6 text-gray-500">
                        <div className="">
                            <a href="/">
                                <img  className="w-24 h-auto mb-6" src="https://assets.republic.com/assets/logo/full/white/120x30/logo-54659cb6a37ad65e8e65799b0238c6ea0c0c4ed99ce66f7286fd1d175e718e73.svg" />
                            </a>
                            <p className="mb-6 text-lg font-medium">Giving everyone access to early-stage startup investing</p>
                            <div className="flex space-x-4 text-2xl">
                                <a>
                                    <FaFacebookSquare />
                                </a>
                                <a >
                                    <FaInstagramSquare />
                                </a>
                                <a >
                                    <FaSquareXTwitter />
                                </a>
                                <a >
                                    <FaLinkedin />
                                </a>
                                <a>
                                    <FaDiscord />
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-y-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">For investors</h2>
                                <ul className="text-lg font-semibold text-gray-300">
                                    <li><a href="/investors/why-invest">Why invest</a></li>
                                    <li><a href="/learn/investors/how-it-works">How it works</a></li>
                                    <li><a href="/help">FAQ</a></li>
                                    <li><a href="/risks">Risks</a></li>
                                    <li><a href="/privacy">Privacy policy</a></li>
                                    <li><a href="/accessibility">Accessibility</a></li>
                                    <li><a href="javascript:void(0)" className="js-footer_cookie-preferences">Cookie Preferences</a></li>
                                    <li><a href="https://files.brokercheck.finra.org/crs_291387.pdf">Form CRS</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">For startups</h2>
                                <ul className="text-lg font-semibold text-gray-300">
                                    <li><a href="/raise">Why raise</a></li>
                                    <li><a href="/learn/issuers">Learn</a></li>
                                    <li><a href="/help/category/fundraising">FAQ</a></li>
                                    <li><a href="/startups/fundraising-instruments">Instruments</a></li>
                                    <li><a href="/crowdsafe">Crowd SAFE</a></li>
                                    <li><a href="/tokenization">Tokenized assets</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Crypto</h2>
                                <ul className="text-lg font-semibold text-gray-300">
                                    <li><a href="/crypto">For investors</a></li>
                                    <li><a href="/crypto/services">For companies</a></li>
                                    <li><a href="/crypto/for-investors/how-it-works">How it works</a></li>
                                    <li><a href="/token-dpa">Token DPA</a></li>
                                    <li><a href="/tokenization">Tokenization</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Company</h2>
                                <ul className="text-lg font-semibold text-gray-300">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/blog">Journal</a></li>
                                    <li><a href="/events">Events</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/jobs">We're hiring!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <hr className="border-gray-700" />
                        <div className="flex items-center justify-between px-6 py-4">
                            <div className="hidden sm:flex sm:items-center">
                                <img
                                    src="https://assets.republic.com/assets/layouts/dollar-582d5a155e415013ca316098b15357e5557a7e43a142badb0eede421774a7684.svg"
                                    alt="Dollar"
                                    className="dollar-logo text-3xl mr-2"
                                />
                                <span className="text-xs font-semibold text-white ml-1">
                                    <a
                                        href="/"
                                        className="text-xl text-gray-300"
                                        rel="nofollow"
                                    >
                                        Refer a startup, get $2,500
                                    </a>
                                </span>
                            </div>
                            <div className="hidden sm:flex sm:items-center gap-2">
                                <p className="text-xl font-semibold text-gray-300">Invest in the app</p>
                                <a
                                    href="/"
                                >
                                    <img
                                        width={150}
                                        src="https://assets.republic.com/assets/layouts/play-store-0d44180dd0587978e08f2ac3eb53b810461ff33756799fef2981667aee24dd2a.png"
                                        className="store-logo mr-1"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/id1475230022"
                                >
                                    <img
                                        width={150}
                                        src="https://assets.republic.com/assets/layouts/app-store-9101bc9fe34a6cdc55e4436229c0ba5125905ec10aa243ce3346ab6e36e8d5c6.png"
                                        className="store-logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-700" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
