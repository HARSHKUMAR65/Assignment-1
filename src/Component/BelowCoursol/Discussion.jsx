import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaLock } from "react-icons/fa";

const commentsData = [
    {
        name: "Enrique Alejandro Carvajal Patiño",
        profile_picture: {
            small_2x: "https://uploads.republic.com/p/users/avatars/small_2x/001/495/730/1495730-1703192406-8e70371026614e1bdeb02ca43d0718257d4a1167.jpeg"
        },
        role: "Investor in Supersapiens",
        timestamp: "Feb 29, 2024, 02:02 PM (PST)",
        content: "we received an email of Supersapiens and their closing in Europe... I think its time to leave with my money",
        likes: 4
    },
    {
        name: "Maria Garcia",
        profile_picture: {
            small_2x: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg"
        },
        role: "Investor in Supersapiens",
        timestamp: "Mar 15, 2024, 10:45 AM (PST)",
        content: "I am worried about the future of our investment. Should we consider pulling out?",
        likes: 8
    },
    {
        name: "John Doe",
        profile_picture: {
            small_2x: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg"
        },
        role: "Investor in Supersapiens",
        timestamp: "Mar 25, 2024, 01:30 PM (PST)",
        content: "This news is quite alarming. Has anyone reached out to the company for more details?",
        likes: 5
    },
    {
        name: "Jane Smith",
        profile_picture: {
            small_2x: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg"
        },
        role: "Investor in Supersapiens",
        timestamp: "Apr 02, 2024, 09:20 AM (PST)",
        content: "I believe in the long-term vision of Supersapiens. Let's wait and see how they address this issue.",
        likes: 12
    },
    {
        name: "Carlos Mendoza",
        profile_picture: {
            small_2x: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg"
        },
        role: "Investor in Supersapiens",
        timestamp: "Apr 05, 2024, 04:50 PM (PST)",
        content: "I think it's prudent to reassess our investment strategy given the recent developments.",
        likes: 7
    }
];


const Discussion = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center my-10 text-3xl font-bold text-gray-600">
                <hr className="my-8 w-full" />
                <p>Discussion</p>
                <hr className="my-5 w-[50px] border-blue-600" />
            </div>
            <div className="text-gray-500 text-sm mb-10 text-center w-full max-w-3xl mx-auto">
                Ask questions and share feedback with the Supersapiens team below. If you have support related questions for Republic, please contact <a className="text-blue-600" href="#">investors@republic.co.</a>
            </div>
            <div className="w-full max-w-3xl mx-auto">
                {commentsData.map((data, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border shadow-sm my-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 "
                                src={data.profile_picture.small_2x}
                                alt={`Profile picture of ${data.name}`}
                            />
                            <div className="ml-4">
                                <div className="font-semibold text-lg text-gray-900">{data.name}</div>
                                <div className="flex gap-2">
                                    <div className="text-gray-600">{data.role}</div>
                                    <div className="text-gray-600">{data.timestamp}</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 mb-2 text-lg">{data.content}</div>
                        <div className="mt-4 flex gap-2">
                            <CiStar className="text-gray-500 mt-1" />
                            <span className="text-gray-500">{data.likes} likes</span>
                            <span className="text-gray-500 cursor-pointer">Reply</span>
                        </div>
                    </div>
                ))}
            </div>
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

        </>
    );
};

export default Discussion;
