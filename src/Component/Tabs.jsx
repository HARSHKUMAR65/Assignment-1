import React, { useState } from 'react';
import About from './BelowCoursol/About';
import Discussion from './BelowCoursol/Discussion';
import Update from './Update';
import PitchTab from './PitchTab';

const tabs = [
    {
        title: 'Pitch',
        component: <PitchTab />
    },
    {
        title: 'Discussion',
        component: <Discussion />
    },
    {
        title: 'Updates',
        component: <Update />
    },
    {
        title: 'Reviews',
        component: <About />
    }
]

const HeadersTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className="w-full mx-auto">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-1 max-w-6xl mx-auto gap-x-4" aria-label="Tabs" role="tablist">
                        {tabs.map((tab, index) => (
                            <button key={index}
                                type="button"
                                className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-3xl font-bold whitespace-nowrap ${activeTab === index
                                    ? 'font-semibold border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-blue-600'
                                    } focus:outline-none`}
                                id="tabs-with-underline-item-1"
                                onClick={() => handleTabClick(index)}
                                role="tab"
                            >
                                {tab.title}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
            {tabs.map((tab, index) => <div

                id="tabs-with-underline-2"
                className={activeTab === index ? '' : 'hidden'}
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
            >
                {tab.component}
            </div>)}
        </>
    );
};

export default HeadersTab;
