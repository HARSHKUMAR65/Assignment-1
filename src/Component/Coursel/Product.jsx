const Product = () => {
    return (
        <>
            <div className="my-8">
                <h1 className="text-3xl font-bold text-gray-600 mb-6">Product</h1>
                <hr style={{ width: '56px' }} className="mb-6 text-gray-800" />
            </div>
            <div className="text-6xl font-bold text-gray-900 my-6 text-center">
                Supersapiens: next-gen insights empowering  diabetes management
            </div>
            <div className="justify-center flex flex-col text-center my-10 p-8 m-8">
                <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/103/140/103140-1698170890-e7014450733ea2d1575012a5418905f1e1f66f29.png" alt="" />
                <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/084/149/84149-1677282201-2d36e32b31860fdea2c46af84eca3209c854ca9d.jpg" alt="" />
                <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/102/394/102394-1697740633-9496edeaf7d890ff3e575cc623c67ce7b4a0bf60.png" alt="" />
            </div>
            <div className="text-6xl font-bold text-gray-900 my-8 text-center">
                Innovative Features for Enhanced Health
            </div>
            <div className="my-20">
                <div title="Page 31" className="text-xl font-bold text-gray-600 my-6 ">
                    <ul className="list-disc list-inside">
                        <li className="font-medium">
                            <strong>Continuous Glucose Visibility</strong>
                            <br />
                            <p  className="mx-8">Experience a glucose trace, built upon data provided by a market leader in CGMs, allowing you to instantly interpret the impacts of food, mood, and movement on your metabolic health.</p>
                        </li>
                        <li className="font-medium mt-4">
                            <strong>Daily Insights</strong>
                            <br />
                            <p  className="mx-8">Stay informed with daily progress summaries and key event overviews directly within our user-friendly app.</p>
                        </li>
                    </ul>
                    <div title="Page 31" className="mt-4">
                        <ul className="list-disc list-inside">
                            <li className="font-medium">
                                <strong>Glucose Score</strong>
                                <br />
                               <p  className="mx-8"> Analyze each event (food, mood, or movement) and its glucose efficiency with our hero metric.</p>
                            </li>
                            <li className="font-medium mt-4">
                                <strong>Desktop Portal</strong>
                                <br />
                               <p className="mx-8"> Zoom out and gain a macro perspective over weeks and months. Analyze long-term trends, export your data, share insights, and collaborate—all from the convenience of your desktop.
                               </p>
                            </li>
                            <li className="font-medium mt-4">
                                <strong>Complete</strong>
                            </li>
                        </ul>
                        <p>... <span className="text-blue-600 font-medium text-2xl">Read more</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;