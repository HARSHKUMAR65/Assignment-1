import { team_members } from "../../Utils/constant";
const Team = () => {
    return (
        <>
            <div className="justify-center flex flex-col text-center my-10 text-3xl font-bold text-gray-600">
                <hr className="my-8 text-gray-800" />
                <p>Supersapiens Team</p>
                <p className="text-gray-500 text-base my-5">Everyone helping build Supersapiens , not limited to employees
                </p>
                <hr className="my- text-gray-800 border-2 w-[200px] border-blue-600 mx-auto" />
            </div>
            <div className="my-10">
                <div className="w-full max-w-6xl mx-auto ">
                    <div className="flex justify-between flex-wrap">
                        {team_members.map((data, index) => (
                            <div key={index} class="max-w-sm bg-white ">
                                <div class="flex justify-center">
                                    <img class="rounded-t-lg" src={data.imageUrl} alt="" />
                                </div>
                                <div class="p-2 text-center ">
                                    <h2 class="mb-2 text-4xl  tracking-tight text-gray-900">{data.h2}</h2>
                                    <h4 class="mb-5 text-2xl  tracking-tight text-gray-600">{data.h4}</h4>
                                    <p class="mb-3 font-normal text-gray-900">{data.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Team;