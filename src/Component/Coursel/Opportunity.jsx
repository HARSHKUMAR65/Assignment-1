const Opportunity = () => {
    return (
        <>
            <div className="">
                <h1 className="text-3xl font-bold text-primary-600 mb-6">Opportunities</h1>
                <hr style={{ width: '56px' }} className="mb-6 text-primary-500" />
            </div>
            <div className="text-6xl font-bold text-primary-900 mb-6 text-center">
                Glucose: The Cornerstone of Health
            </div>
            <hr className="mb-6 text-primary-300" />
            <div className="text-3xl font-bold text-primary-600 text-center my-8">
                The Problem
            </div>
            <hr  className="mb-6 text-primary-300"/>
            <div className=" flex justify-center my-4">
                <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/105/682/105682-1699472641-5fb7e5c1d4ea111d919bb584ff75909a2ceeb600.png" alt="" />
            </div>
            <div className="flex justify-center flex-col text-xl  text-primary-900 text-start">
                <div className="my-8">
                    Diabetes, a condition inherently linked to glucose management, is not just a medical term; it's become a significant challenge in the tapestry of modern healthcare, especially in the US.
                </div>
                <div>
                    In an era where we can track and analyze countless health metrics, we've often underestimated the profound importance of glucose regulation.
                </div>
                <div className="my-8">
                    The result?
                </div>
                <div className="my-">
                    Countless individuals, from the newly diagnosed to those managing long-term diabetes, grapple with understanding and managing their glucose levels. The absence of actionable insights has left many asking: "Why did my levels spike today?" "I felt great this morning; why did I crash in the afternoon?"
                </div>
                <div className="my-8">
                    For too long, achieving optimal glucose stability has been
                    <br />
                    … <span className="text-blue-500">Read more</span>
                </div>
            </div>
        </>
    )
}

export default Opportunity;