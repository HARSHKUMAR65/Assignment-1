import React, { useState } from 'react';
import Faq from './FAQ';
import Opportunity from './Coursel/Opportunity';
const TabsWithUnderline = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className="w-full  mx-auto">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-1 max-w-6xl mx-auto gap-x-4" aria-label="Tabs" role="tablist">
                        <button
                            type="button"
                            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl font-bold whitespace-nowrap ${activeTab === 1
                                ? 'font-semibold border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-blue-600'
                                } focus:outline-none`}
                            id="tabs-with-underline-item-1"
                            onClick={() => handleTabClick(1)}
                            role="tab"
                        >
                            Pitch
                        </button>
                        <button
                            type="button"
                            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl font-bold whitespace-nowrap ${activeTab === 2
                                ? 'font-semibold border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-blue-600'
                                } focus:outline-none`}
                            id="tabs-with-underline-item-2"
                            onClick={() => handleTabClick(2)}
                            role="tab"
                        >
                            Discussion
                        </button>
                        <button
                            type="button"
                            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl font-bold whitespace-nowrap ${activeTab === 3
                                ? 'font-semibold border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-blue-600'
                                } focus:outline-none`}
                            id="tabs-with-underline-item-3"
                            onClick={() => handleTabClick(3)}
                            role="tab"
                        >
                            Updates
                        </button>

                        <button
                            type="button"
                            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl font-bold whitespace-nowrap ${activeTab === 4
                                ? 'font-semibold border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-blue-600'
                                } focus:outline-none`}
                            id="tabs-with-underline-item-3"
                            onClick={() => handleTabClick(4)}
                            role="tab"
                        >
                            Reviews
                        </button>
                    </nav>
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex mt-10 gap-1">
                <div className="w-full">
                    <div
                        id="tabs-with-underline-1"
                        className={activeTab === 1 ? '' : 'hidden'}
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-1"
                    >
                        <div className="">
                            <h1 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h1>
                            <hr style={{ width: '56px' }} className="mb-6 text-gray-800" />
                        </div>
                        <div className="list-disc my-5" >
                            <ul className="text-gray-500 list-disc text-left mx-16 text-gray-800 text-xl leading-8">
                                <li>Q1 2024: Supersapiens enters US market with a focus on diabetes</li>
                                <li>Glucose monitoring platform for optimizing health & performance</li>
                                <li>Insights for metabolic health via glucose, first launched in Europe</li>
                                <li>Partnered with a market leader to enhance US diabetes management</li>
                                <li>World's largest glucose dataset (non-diabetic): 1B+ data points</li>
                                <li>Trusted by Olympians, F1, UEFA, NBA, PGA, NFL, NHL, MLB, TDF, Ironman</li>
                                <li>Seamlessly integrates with Apple Health, Oura, Garmin, Wahoo, and others</li>
                            </ul>
                        </div>
                        <Opportunity />
                    </div>
                    <div
                        id="tabs-with-underline-2"
                        className={activeTab === 2 ? '' : 'hidden'}
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-2"
                    >
                        <p className="text-gray-500">
                            This is the <em className="font-semibold text-gray-800">second</em> item's tab body.
                        </p>
                    </div>
                    <div
                        id="tabs-with-underline-3"
                        className={activeTab === 3 ? '' : 'hidden'}
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-3"
                    >
                        <p className="text-gray-500">
                            This is the <em className="font-semibold text-gray-800">third</em> item's tab body.
                        </p>
                    </div>
                    <div
                        id="tabs-with-underline-4"
                        className={activeTab === 4 ? '' : 'hidden'}
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-4"
                    >
                        <p className="text-gray-500">
                            This is the <em className="font-semibold text-gray-800">fourth</em> item's tab body.
                        </p>
                    </div>
                </div>
                <div className="w-1/3">
                    <Faq />
                </div>
            </div>
        </>
    );
};

export default TabsWithUnderline;
