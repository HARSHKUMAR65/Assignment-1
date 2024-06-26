import React, { useState } from 'react';
import { SiGoogledocs } from "react-icons/si";
import { faqs } from '../Utils/constant';
const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col gap-2 w-full'>
            <div className="">
                <div className="">
                    <h1 className="text-3xl font-bold text-primary-500 mb-6">Deal Terms</h1>
                    <hr style={{ width: '56px' }} className="mb-6 text-primary-500" />
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-primary-200">
                            <button
                                className="w-full flex justify-between items-center py-4 text-left text-primary-800 focus:outline-none"
                                 onMouseEnter={() => handleToggle(index)} onMouseLeave={() => handleToggle(index)}
                            >
                                <div className="w-full flex justify-between ">
                                    <h1 className="text-xl text-primary-900">{faq.title}</h1>
                                    <p className="text-primary-900 font-bold">{faq.value}</p>
                                </div>
                                <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="py-2 text-primary-600">
                                    {faq.details}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button className="w-full flex justify-center items-center py-4 text-left text-primary-800 border border-black hover:border-secondary-600 hover:text-secondary-600">How it works</button>
            </div>



            <div className="w-full my-4">
                <div className="w-full text-2xl text-primary-500 font-bold my-8">
                    Documents
                </div>
                <div className="flex flex-col gap-4 p-3 border border-primary-300">
                    <div className="mb-4">
                        <div className="text-primary-600 text-sm ">
                            Republic (OpenDeal Portal LLC, CRD #283874) is hosting this Reg CF securities offering by TT1 Products, Inc.. View the official SEC filing and all updates:
                        </div>
                        <a
                            target="_blank"
                            rel="noopener"
                            className="flex items-center mt-2"
                            href="https://www.sec.gov/edgar/browse/?CIK=0001970837"
                        >
                            <img alt="Official SEC Logo" className="h-10" wid src="https://assets.republic.com/assets/sec_logo-37a94865a2e116eb24c31d9a52bc810580faf9e42a281b167d385e1e61a64256.png" />
                            <span className="ml-2 ">
                                Form C
                            </span>
                            <span className="ml-2 border-l-2 pl-2 text-primary-500">
                                SEC.gov
                            </span>
                        </a>
                    </div>
                    <hr className='w-full border-primary-300 botder' />
                    <div className="mb-4">
                        <div className="text-primary-600 text-sm mb-2">
                            Company documents
                        </div>
                        <a
                            className="flex items-center mb-2"
                            target="_blank"
                            href="https://uploads.republic.com/p/offerings/security_attachments/original/000/003/828/3828-1701698075-b14886d1fedb6f98a97f26bed643c3594b5b3943.pdf"
                        >
                            <SiGoogledocs className='text-3xl mx-2 ' />
                            <span className='text-primary-600'>
                                Crowd Convertible Promissory Note
                            </span>
                        </a>
                        <a
                            className="flex items-center"
                            target="_blank"
                            href="/documents/6377"
                        >
                            <SiGoogledocs className='text-3xl mx-2 ' />
                            <span className='text-primary-600'>
                                TT1 Products (Supersapiens) Form C.pdf
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default FAQAccordion;