import React, { useState } from 'react';
import About from './BelowCoursol/About';
import Discussion from './BelowCoursol/Discussion';
import Update from './Update';
import PitchTab from './PitchTab';
import Review from './Review';
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
        component: <Review />
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
                <div className="border-b border-primary-200">
                    <nav className="flex flex-wrap space-x-1 max-w-6xl mx-auto gap-x-4 sm:gap-x-2 md:gap-x-4" aria-label="Tabs" role="tablist">
                        {tabs.map((tab, index) => (
                            <button key={index}
                                type="button"
                                className={`py-2 px-2 sm:py-4 sm:px-1 inline-flex items-center gap-x-2 border-b-2 text-lg sm:text-2xl md:text-3xl font-bold whitespace-nowrap ${activeTab === index
                                    ? 'font-semibold border-secondary-600 text-secondary-600'
                                    : 'border-transparent text-primary-500 hover:text-blue-600'
                                    } focus:outline-none`}
                                id={`tabs-with-underline-item-${index}`}
                                onClick={() => handleTabClick(index)}
                                role="tab"
                            >
                                {tab.title}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    id={`tabs-with-underline-panel-${index}`}
                    className={activeTab === index ? 'block' : 'hidden'}
                    role="tabpanel"
                    aria-labelledby={`tabs-with-underline-item-${index}`}
                >
                    {tab.component}
                </div>
            ))}
        </>
    );
};

export default HeadersTab;
