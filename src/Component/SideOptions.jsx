import React, { useState } from 'react';
import { SiGoogledocs } from "react-icons/si";
const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            "title": "Security Instrument",
            "value": "Crowd Convertible Promissory Note",
            "details": "Please see our FAQ for more details."
        },
        {
            "title": "Valuation cap",
            "value": "$120M",
            "details": "The maximum valuation at which your investment converts into equity shares or cash."
        },
        {
            "title": "Discount",
            "value": "20%",
            "details": "If a trigger event for Supersapiens occurs, the discount provision gives investors equity shares (or equal value in cash) at a reduced price."
        },
        {
            "title": "Interest Rate",
            "value": "6%",
            "details": "The interest rate is the percentage that the investor will earn on the note until it matures or is converted into equity."
        },
        {
            "title": "Maturity",
            "value": "18 Months",
            "details": "The maturity date is the date on which the note must be repaid, either with interest or converted into equity."
        },
        {
            "title": "Minimum investment",
            "value": "$250",
            "details": "The smallest investment amount that Supersapiens is accepting."
        },
        {
            "title": "Maximum investment",
            "value": "$124K",
            "details": "The largest investment amount that Supersapiens is accepting."
        },
        {
            "title": "Deadline",
            "value": "March 4, 2024",
            "details": "Supersapiens needs to reach their minimum funding goal before the deadline (March 4, 2024 at 1:29 PM IST). If they don’t, all investments will be refunded."
        }
    ]

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="">
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-500 mb-6">Deal Terms</h1>
                    <hr style={{ width: '56px' }} className="mb-6 text-gray-500" />
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center py-4 text-left text-gray-800 focus:outline-none"
                                onClick={() => handleToggle(index)}
                            >
                                <div className="w-full flex justify-between ">
                                    <h1 className="text-xl ">{faq.title}</h1>
                                    <p className="text-gray-600 font-bold">{faq.value}</p>
                                </div>
                                <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="py-2 text-gray-600">
                                    {faq.details}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button className="w-full flex justify-center items-center py-4 text-left text-gray-800 border-2 border-black">How it works</button>
            </div>


            <div className="w-full text-2xl text-gray-500 font-bold my-8">
                Documents
            </div>
            <div className="w-full my-4">
                <div className="border-2 p-2">
                    <div className="mb-4">
                        <div className="text-gray-600 text-sm">
                            Republic (OpenDeal Portal LLC, CRD #283874) is hosting this Reg CF securities offering by TT1 Products, Inc.. View the official SEC filing and all updates:
                        </div>
                        <a
                            target="_blank"
                            rel="noopener"
                            className="flex items-center mt-2"
                            href="https://www.sec.gov/edgar/browse/?CIK=0001970837"
                        >
                            <img  alt="Official SEC Logo" title="SEC Logo" src="https://assets.republic.com/assets/sec_logo-37a94865a2e116eb24c31d9a52bc810580faf9e42a281b167d385e1e61a64256.png" />
                            <span className="ml-2">
                                Form C
                            </span>
                            <span className="ml-2 border-l-2 pl-2 text-gray-500">
                                SEC.gov
                            </span>
                        </a>
                    </div>
                    <hr className='w-full'/>
                    <div className="mb-4">
                        <div className="text-gray-600 text-sm mb-2">
                            Company documents
                        </div>
                        <a
                            className="flex items-center mb-2"
                            target="_blank"
                            href="https://uploads.republic.com/p/offerings/security_attachments/original/000/003/828/3828-1701698075-b14886d1fedb6f98a97f26bed643c3594b5b3943.pdf"
                        >
                            <SiGoogledocs className='text-3xl mx-2 ' />
                            <span>
                                Crowd Convertible Promissory Note
                            </span>
                        </a>
                        <a
                            className="flex items-center"
                            target="_blank"
                            href="/documents/6377"
                        >
                            <SiGoogledocs className='text-3xl mx-2 ' />
                            <span>
                                TT1 Products (Supersapiens) Form C.pdf
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
};
export default FAQAccordion;