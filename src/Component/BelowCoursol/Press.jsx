const Press = () => {
    const Card = ({ title, description, link, image, icon, date, bsns }) => (
        <div className="bg-white border rounded overflow-hidden w-full">
            <img src={image} className="w-full  object-cover rounded-t" />

            <div className="p-4">
                <h2 className="text-xl ">{title}</h2>
                <div className="icn flex gap-2 mt-2">
                    <img src={icon} className="w-5" />
                    <p className="text-sm ">
                        {bsns} | <span className="text-gray-600">{date}</span>
                    </p>
                </div>
            </div>
            <p className="text-sm p-4 text-gray-800">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
            >
            </a>
        </div>
    );
    return (
        <>
            <div className="justify-center flex flex-col text-center my-10 text-3xl font-bold text-gray-600">
                <hr className="my-8 text-gray-800" />
                <p>Press</p>
                <hr className="my-5 text-gray-800 border-2 w-[50px] border-blue-600 mx-auto" />
            </div>
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card
                        title="25 Promising Sports Startups to Watch"
                        description="Top investors in the sports industry highlighted startups ranging from sports betting and media companies to AI and health tech."
                        link="https://www.businessinsider.com/most-promising-sports-startups-to-watch-according-vcs-top-investors-2023-11"
                        image="https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/037/631/37631-1701287706-0bee25d5813e33dca4b1a899d359ac6f261d8a6b."
                        icon="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/037/631/37631-1701287706-ff2fdd21cf85c928443bfe631485289ed0280641."
                        bsns="Business Insider"
                        date="11 November 2023"


                    />
                    <Card
                        title="What is a Continuous Glucose Monitor and Do I Need One?"
                        bsns= 'Toms s Guide'
                        date= 'sep 5 2023'
                        icon= 'https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/650/36650-1698939883-7d693b3f8512e3b5490de2ab192e56a86fdfef2a.'
                        description="We ask the experts about continuous glucose monitors and whether you need one."
                        link="https://www.tomsguide.com/features/what-is-a-continuous-glucose-monitor-and-do-i-need-one"
                        image="https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/650/36650-1698939883-ab447f9f2a4a5b642c59d840e9e34d1d7d966869."
                    />
                    <Card
                        title="Supersapiens vs Levels: Continuous Glucose Monitors Reviewed"
                        description="Should you invest in a continuous glucose monitor to help with your training and racing? Former 220 editor James Witts tells you."
                        link="#"
                        bsns= '220 Tiathlon'
                        date= 'Aug 7 2023'
                        icon='https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/642/36642-1698939770-4d75ab06821336bf931796743d8cc665509242f0.'
                        image="https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/642/36642-1698939770-23d2da3f4a729d62fb5300d920ba78eb69b94785."
                    />
                    <Card
                        title="How to Optimize Your Pre-Workout Meal Timing"
                        bsns= 'Outside Online'
                        date='Aug 3, 2023'
                        icon = 'https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/651/36651-1698939898-31bdf5c8781cb2c72e76e11bc318ac75a8dd1694.'
                        description="Analyzing glucose data from endurance athletes offers new insights, with the potential of more to come."
                        link="https://www.outsideonline.com/health/training-performance/continuous-glucose-monitor-rebound-hypoglycemia/?scope=anon"
                        image="https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/651/36651-1698939898-9418ce7b2733619507f1957b1a2a9fa75dbbf30b."
                    />
                    <Card
                        title="The Sweet Science of Glucose Monitors"
                        bsns='AW'
                        date='Jun 11,2023'
                        icon='https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/646/36646-1698939825-e889f3acec4a3ba3fb2e2432ef91058c877b8afe.'
                        description="Sifan Hassan, Eilish McColgan, and Eliud Kipchoge are among a new wave of athletes who are measuring their sugar levels with continuous glucose monitors."
                        link="https://athleticsweekly.com/performance/the-sweet-science-of-glucose-monitors-1039968334/"
                        image="https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/646/36646-1698939825-4a5f31e1fb2a1c2ef9b85e07c57da68b8d2fb46f."
                    />
                    <Card
                        title="Trailblazer Marley Blonsky Joins Supersapiens"
                        date= ' July 16 2001'

                        icon='https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/643/36643-1698939781-0370ba59595d0b58b26eaa334d900e91b048ddbb.'
                        description="Marley Blonsky joins Supersapiens as their newest ambassador."
                        link="https://www.endurancesportswire.com/trailblazer-marley-blonsky-joins-as-supersapiens-newest-ambassador/"
                        image="https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/643/36643-1698939781-549791ee5332ded6fe0ba072e8eef3b38006ad05."
                    />
                </div>
            </div>
            <div className="btn flex justify-center">
                <button className="text-gray-700 border w-100 m-4 px-4 py-2 rounded font-bold">Show all</button>
            </div>
        </>
    )
}

export default Press;