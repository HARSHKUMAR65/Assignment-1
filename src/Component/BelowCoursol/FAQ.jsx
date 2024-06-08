import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { data } from "../../Utils/constant";

const FAQ = () => {


    return (
        <>
            <div className="flex flex-col items-center text-center my-10 text-3xl font-bold text-primary-600">
                <hr className="my-8 w-full" />
                <p>FAQ</p>
                <hr className="my-5 w-[50px] border-blue-600" />
            </div>
            <div className="w-full max-w-6xl mx-auto border-2 p-4">
                <Tabs value="html" orientation="vertical" className="flex">
                    <div className="w-1/3">
                        <TabsHeader className="w-full text-start">
                            {data.map(({ label, value }) => (
                                <Tab key={label} value={value[0]} className="w-full text-left">
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <div className="w-2/3 p-4">
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value[0]} value={value[0]}>
                                    {desc.map((paragraph, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="text-sm text-primary-600 whitespace-pre-line">{paragraph}</p>
                                        </div>
                                    ))}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>
                </Tabs>
            </div>
        </>
    );
}

export default FAQ;
