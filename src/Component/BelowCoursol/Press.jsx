import { PressData } from "../../Utils/constant";
import PressCard from "../PressCard";

const Press = () => {
    return (
        <>
            <div className="justify-center flex flex-col text-center my-10 text-3xl font-bold text-primary-600">
                <hr className="my-8 text-primary-800" />
                <p>Press</p>
                <hr className="my-5 text-primary-800 border-2 w-[50px] border-blue-600 mx-auto" />
            </div>
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {PressData.map((item) => (
                        <PressCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            image={item.image}
                            icon={item.icon}
                            bsns={item.bsns}
                            date={item.date}
                        />
                    ))}
                    
                </div>
            </div>
            <div className="btn flex justify-center">
                <button className="text-primary-700 border w-100 m-4 px-4 py-2 rounded font-bold">Show all</button>
            </div>
        </>
    )
}

export default Press;