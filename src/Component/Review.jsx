import { CiStar } from 'react-icons/ci';
import { commentsData } from '../Utils/constant';
const Review = () => {
    return (
        <>
            <div className='w-full max-w-6xl mx-auto'>
                <h1 className="text-2xl font-bold text-primary-600 my-6">Hear from some of the 0 investors in Supersapiens</h1>
            </div>
            <div className="w-full max-w-6xl mx-auto">
                {commentsData.map((data, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg   my-4">
                        <div className="flex justify-between">
                            <div >
                                <div className="flex items-center mb-4">
                                    <img
                                        className="w-10 h-10 "
                                        src={data.profile_picture.small_2x}
                                        alt={`Profile picture of ${data.name}`}
                                    />
                                    <div className="ml-4">
                                        <div className="font-bold text-xl text-primary-500">{data.name}</div>
                                        <div className="flex gap-2">
                                            <div className=" text-sm text-primary-500">{data.role}</div>
                                            <div className=" text-sm text-primary-500">{data.timestamp}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-primary-700 mb-2 text-lg ">{data.content}</div>
                            </div>
                            <div className="price text-3xl font-bold text-primary-500">{data.price}</div>
                        </div>
                        <hr className="mt-8 border-primary-200" />
                    </div>

                ))}
            </div>
        </>
    )
}

export default Review;