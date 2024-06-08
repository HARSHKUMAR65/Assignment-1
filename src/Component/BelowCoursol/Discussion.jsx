import React from 'react';
import { CiStar } from 'react-icons/ci';
import { commentsData } from '../../Utils/constant';

const Discussion = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center my-10 text-3xl font-bold text-primary-600">
                <hr className="my-8 w-full" />
                <p>Discussion</p>
                <hr className="my-5 w-[50px] border-blue-600" />
            </div>
            <div className="text-primary-500 text-sm mb-10 text-center w-full max-w-3xl mx-auto">
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
                                <div className="font-semibold text-lg text-primary-900">{data.name}</div>
                                <div className="flex gap-2">
                                    <div className="text-primary-600">{data.role}</div>
                                    <div className="text-primary-600">{data.timestamp}</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-primary-700 mb-2 text-lg">{data.content}</div>
                        <div className="mt-4 flex gap-2">
                            <CiStar className="text-primary-500 mt-1" />
                            <span className="text-primary-500">{data.likes} likes</span>
                            <span className="text-primary-500 cursor-pointer">Reply</span>
                        </div>
                    </div>
                ))}
            </div>
            

        </>
    );
};

export default Discussion;
