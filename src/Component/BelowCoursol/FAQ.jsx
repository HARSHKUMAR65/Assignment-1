import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
const FAQ = () => {
    const data = [
        {
            label: "What am I investing in?",
            value: ["What am I investing in?"],
            desc: [`What am I investing in?    

            TT1 Products, Inc (dba Supersapiens) is offering a Crowd Convertible Promissory Note (“Convertible Note”) to investors (“Holders”) with the following terms:

            Maturity date: May 1, 2025

            20% Discount

            Simple interest of 6% per annum

            $120M valuation cap

            This Convertible Note being offered is a form of debt that may convert into equity securities when a Qualified Financing (as defined in the offering documents) occurs. Likewise, in the event the Convertible Note remains outstanding on the Maturity Date (May 1, 2025), then the outstanding balance of the note and any unpaid accrued interest shall automatically convert into shares of the Issuer’s Common Stock (as defined in the offering documents). 

            The holder of the Convertible Note loans money to the company; however, instead of getting cash returns in the form of principal plus interest, the holder will receive common stock in the company upon conversion or a subsequent equity financing event.

            For this offering, it is important to understand that while interest is accrued, cash payments will not be made to Convertible Note holders.`]
        },
        {
            label: "What is the Maturity Date on the Convertible Note?",
            value: ["What is the Maturity Date on the Convertible Note?", "What is the Interest Rate on my principal?   "],
            desc: ["The Maturity Date is May 1, 2025, which is the date in which the Convertible Note matures, or becomes due.  In the event the Convertible Note remains outstanding on the Maturity Date, then the principal and unpaid accrued interest shall automatically convert into shares of the Issuer’s Common Stock (as defined in the offering documents). For how that is calculated, please review the offering documents.", "The Interest Rate (as defined in the offering documents) denotes the rate at which the interest accrues on the principal invested. The Interest Rate for this offering is 8% simple interest per annum."]
        },
        {
            label: "What is the Discount?",
            value: ["What is the Discount?"],
            desc: [`The Valuation Cap is $120M and represents the maximum valuation or “ceiling” on the valuation of the Issuer for Convertible Note Holders at a subsequent equity financing.`]
        },
        {
            label: "What is the Valuation Cap?",
            value: ["What is the Valuation Cap?"],
            desc: [`Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`]
        },
        {
            label: "What are the tax implications, if any, of investing in this offering?",
            value: ['What are the tax implications, if any, of investing in this offering?', 'In general, here are some potential tax implications to consider:'],
            desc: [`The tax implications of investing in a Convertible Note may vary depending on the specific circumstances and the jurisdiction in which the holder resides. It is important for holders to consult with a qualified tax professional to fully understand the tax implications of their investment.

Each holder agrees to treat the investment agreements that it invests in on OpenDeal Portal LLC as "debt instruments" (as defined in U.S. Treasury regulations) for U.S. federal income tax purposes. Returns from your debt investments are reported as interest income for the applicable year.`, `The tax implications of investing in a Convertible Note may vary depending on the specific circumstances and the jurisdiction in which the holder resides. It is important for holders to consult with a qualified tax professional to fully understand the tax implications of their investment.

Each holder agrees to treat the investment agreements that it invests in on OpenDeal Portal LLC as "debt instruments" (as defined in U.S. Treasury regulations) for U.S. federal income tax purposes. Returns from your debt investments are reported as interest income for the applicable year.

In general, here are some potential tax implications to consider:

Interest income: If interest is accrued with the Convertible Note, the interest income received by the holder may be subject to income tax. Holders may receive a 1099-INT.

Capital gains or losses: If the Convertible Note is converted into equity, the holder may realize capital gains or losses when the conversion occurs or when the equity is eventually sold or disposed of. The tax treatment of capital gains or losses depends on various factors, including the holding period of the equity and the investor's tax bracket.

Original issue discount (OID): If the crowd convertible promissory note is issued at a discount to its face value or conversion price, the difference between the face value or conversion price and the issue price may be considered OID. OID is generally taxable as interest income over the term of the note, even if the interest is not actually paid. Investors may receive a 1099-OID.

Alternative Minimum Tax (AMT): Investors subject to the Alternative Minimum Tax should be aware that certain tax preferences associated with the investment in a crowd convertible promissory note, such as OID, may trigger AMT liability.

Deductibility of losses: If the investment in the crowd convertible promissory note results in a loss, the tax treatment of the loss may depend on the investor's individual tax situation and applicable tax laws. It is important to consult with a tax professional to determine the deductibility of any losses.

** It is critical for investors to seek professional tax advice based on their individual circumstances to ensure compliance with applicable tax laws`],
        },
        {
            label: "What is the minimum and maximum investment to participate?",
            value: ['What is the minimum and maximum investment to participate?'],
            desc: [`Holders could invest as little as $250 and as much as $123,500. The minimum investment amount for non-sole ownership entities is $5,000.`],
        },
        {
            label: "Will I receive any voting or management rights as a Convertible Note holder?",
            value: ['Will I receive any voting or management rights as a Convertible Note holder?'],
            desc: [`Convertible Note holders may convert into equity securities when a Qualified Financing (as defined in the offering documents) occurs. Similarly, in the event the Convertible Note remains outstanding on the Maturity Date (May 1, 2025), then the outstanding balance of the note and any unpaid accrued interest shall automatically convert into shares of the Issuer’s Common Stock (as defined in the offering documents). As such, voting or management rights will be determined by the Company Bylaws.`],
        },
        {
            label: "Is this investment opportunity open to international investors?",
            value: ['Is this investment opportunity open to international investors?'],
            desc: [`Yes. If the investor lives outside the United States, it is the investor’s responsibility to fully observe the laws of any relevant territory or jurisdiction outside the United States in connection with any purchase of the securities, including obtaining required governmental or other consents or observing any other required legal or other formalities.`],
        },
    ];
    return (
        <>
            <div className="justify-center flex flex-col text-center my-10 text-3xl font-bold text-gray-600">
                <hr className="my-8 text-gray-800" />
                <p>FAQ</p>
                <hr className="my-5 text-gray-800 border w-[50px] border-blue-600 mx-auto" />
            </div>
            <div className="w-full max-w-6xl mx-auto border-2 p-2">
                <Tabs value="html" orientation="vertical" className="w-full max-w-6xl mx-auto border-2">
                    <div className="w-1/3 border-2">
                        <TabsHeader className="w-32">
                            {data.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <div className="w-full max-w-4xl border-2">
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value} className="py-0">
                                    <div className="px-4 py-4">
                                        <h2 className="text-lg font-bold">{value}</h2>
                                        <p className="text-sm text-gray-600">{desc}</p>
                                    </div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default FAQ;