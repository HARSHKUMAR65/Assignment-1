import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="w-full my-10">
                <hr className='w-full border-gray-300' />
            </div>
            <div className="flex items-center gap-2 justify-center my-10">
                <img className='mt-4' src="https://uploads.republic.com/p/offerings/logos/medium/000/003/828/3828-1699371072-854dc2611599c8528c0c1635b67908127ceb6222.png" alt="" />
                <h1 className='text-8xl font-bold text-gray-900'>Supersapiens</h1>
            </div>
            <div className="flex justify-center gap-2 my-10">
                <div className="flex items-center gap-2">
                    <button className='flex justify-center bg-blue-600 text-white p-5 rounded-lg'>
                        <div className='flex items-center'>
                            <span className='mt-1'>
                                <FaLock className='text-2xl' />
                            </span >
                            <p className='ml-2 text-2xl font-bold'>Invest in Supersapiens</p>
                        </div>
                    </button>
                    <div className="flex items-center gap-2 border border-black px-4 py-2 rounded">
                        Follow
                    </div>
                    <span className="ml-1 text-gray-400">224</span>
                </div>

            </div>
            <div className="bg-gray-900">
                <div className="max-w-6xl mx-auto py-12">
                    <div className="grid gap-y-6 md:grid-cols-4 md:gap-x-10 md:gap-y-0 mb-6 text-gray-500">
                        <div className="">
                            <a href="/">
                                <img className="w-24 h-auto mb-6" src="https://assets.republic.com/assets/logo/full/white/120x30/logo-54659cb6a37ad65e8e65799b0238c6ea0c0c4ed99ce66f7286fd1d175e718e73.svg" />
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
                                <ul className="text-lg font-semibold text-gray-100">
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
                        <hr className="border-gray-500" />
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
                        <hr className="border-gray-500" />
                    </div>
                    <div className="text-gray-500 mx-auto px-4 py-8 border-t border-gray-300">
                        <div className="mb-4 font-semibold">
                            <p className="mb-2 text-sm">
                                This site (the "Site") is owned and maintained by OpenDeal Inc., which is not a registered
                                broker-dealer. OpenDeal Inc. does not give investment advice, endorsement, analysis, or
                                recommendations with respect to any securities. All securities listed here are being offered
                                by, and all information included on this Site is the responsibility of, the applicable issuer
                                of such securities. The intermediary facilitating the offering will be identified in such
                                offering’s documentation.
                            </p>
                            <p className="mb-2 text-sm">
                                All funding-portal activities are conducted by OpenDeal Portal LLC doing business as Republic,
                                a funding portal which is registered with the US Securities and Exchange Commission (SEC) as a
                                funding portal (Portal) and is a member of the Financial Industry Regulatory Authority (FINRA).
                                OpenDeal Portal LLC is located at 149 E 23rd St #1314, New York, NY 10010, please
                                check out background on FINRA’s
                                <span className="underline "> Funding Portal page</span>
                            </p>
                            <p className="mb-2 text-sm">
                                All broker-dealer related securities activity is conducted by OpenDeal Broker LLC, an
                                affiliate of OpenDeal Inc. and OpenDeal Portal LLC, and a registered broker-dealer, and member
                                of
                                <span className="underline"> FINRA|SiPC,</span>
                                located at 1345 Avenue of the Americas, 15th Floor, New York, NY 10105, please check our
                                background on FINRA’s
                                <span className="underline">BrokerCheck</span>
                            </p>
                            <p className="mb-2 text-sm">
                                Certain pages discussing the mechanics and providing educational materials regarding
                                regulation crowdfunding offerings may refer to OpenDeal Broker LLC and OpenDeal Portal LLC
                                collectively as “Republic”, solely for explanatory purposes.
                            </p>
                            <p className="mb-2 text-sm">
                                Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC make investment
                                recommendations and no communication, through this Site or in any other medium should be
                                construed as a recommendation for any security offered on or off this investment platform.
                                Investment opportunities posted on this Site are private placements of securities that are
                                not publicly traded, involve a high degree of risk, may lose value, are subject to holding
                                period requirements and are intended for investors who do not need a liquid investment. Past
                                performance is not indicative of future results. Investors must be able to afford the loss
                                of their entire investment. Only qualified investors, which may be restricted to only
                                Accredited Investors or non-U.S. persons, may invest in offerings hosted by OpenDeal Broker.
                            </p>
                            <p className="mb-2 text-sm">
                                Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC, nor any of their
                                officers, directors, agents and employees makes any warranty, express or implied, of any
                                kind whatsoever related to the adequacy, accuracy or completeness of any information on this
                                Site or the use of information on this site. Offers to sell securities can only be made
                                through official offering documents that contain important information about the investment
                                and the issuers, including risks. Investors should carefully read the offering documents.
                                Investors should conduct their own due diligence and are encouraged to consult with their
                                tax, legal and financial advisors.
                            </p>
                            <p className="mb-2 text-sm">
                                By accessing the Site and any pages thereof, you agree to be bound by the
                                <span className="underline">Terms of Use</span>
                                and
                                <span className="underline">Privacy Policy</span>
                                Please also see OpenDeal Broker’s
                                <span className="underline">Business Continuity Plan</span>
                                and
                                <span className="underline">Additional Risk Disclosures</span>
                                All issuers offering securities under regulation crowdfunding as hosted by
                                OpenDeal Portal LLC are listed on the
                                <span className="underline">All Companies Page</span>
                                The inclusion or exclusion of an issuer on the
                                <span className="underline">Platform Page</span>
                                and/or Republic’s
                                <span className="underline">Homepage</span>
                                which includes offerings conducted under regulation crowdfunding as well as
                                other exemptions from registration, is not based upon any endorsement or recommendation
                                by OpenDeal Inc, OpenDeal Portal LLC, or OpenDeal Broker LLC, nor any of their affiliates,
                                officers, directors, agents, and employees. Rather, issuers of securities may,
                                in their sole discretion, opt-out of being listed on the
                                <span className="underline">Platform Page</span>
                                and
                                <span className="underline">Homepage</span>
                            </p>
                            <p className="mb-2 text-sm px-1.5 py-1 text-center font-semibold">
                                Investors should verify any issuer information they consider important before making
                                an investment.
                            </p>
                            <p className="mb-2 text-sm">
                                Investments in private companies are particularly risky and may result in total loss of invested capital. Past performance of a security or a company does not guarantee future results or returns. Only investors who understand the risks of early stage investment and who meet the Republic's investment criteria may invest.
                            </p>
                            <p className="mb-2 text-sm">
                                Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC verify information provided by companies on this Site and makes no assurance as to the completeness or accuracy of any such information. Additional information about companies fundraising on the Site can be found by searching the EDGAR database, or the offering documentation located on the Site when the offering does not require an EDGAR filing.
                            </p>
                            <p className="mb-2 text-sm">
                                Republic and its affiliates are not and do not operate or act as a bank. Certain banking services are provided by BankProv, member FDIC / member DIF. Digital (crypto) assets and investment products are not insured by the FDIC, may lose value, and are not deposits or other obligations of BankProv and are not guaranteed by BankProv. Terms and conditions apply.
                            </p>
                        </div>
                    </div>
                    <hr className=" my-5 border-gray-500" />
                    <div className="flex justify-between">
                        <p className="mb-2 text-sm text-gray-500">Made in SF/NYC</p>
                        <img src="https://assets.republic.com/assets/layouts/credit_cards-fb323581910488f0885fc63613e42a2d07ebc908e0af4df4ed139ed8cb3254fc.svg" alt="" />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
