const highlights = [
    'Q1 2024: Supersapiens enters US market with a focus on diabetes0',
    'Glucose monitoring platform for optimizing health & performance0',
    'Insights for metabolic health via glucose, first launched in Europe0',
    'Partnered with a market leader to enhance US diabetes management0',
    'Worlds largest glucose dataset (non-diabetic): 1B+ data points0',
    'Trusted by Olympians, F1, UEFA, NBA, PGA, NFL, NHL, MLB, TDF, Ironman0',
    'Seamlessly integrates with Apple Health, Oura, Garmin, Wahoo, and others0',
];

const image_URL = [
  'https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/020/082/20082-1701507571-b947f36da5fec894b0fff7ab0842cc0bf6b73ac4.jpg',
  'https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/062/22062-1705697384-7af29616af148bbbdf66d9434f7557e9e0a25308.png',
  'https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/063/22063-1705697414-7f17210e54c0859bb1e5a58843c752ec91cd4fad.png'
];

const homeOptions = ['SaaS','Women Founders','Wellbeing & Longevity','Fitness' , 'Healthtech' , 'Biotechnology' , 'Wearables'];


const faqs = [
  {
      "title": "Security Instrument",
      "value": "Crowd Convertible Promissory Note",
      "details": "Please see our FAQ for more details."
  },
  {
      "title": "Valuation cap",
      "value": "$120M",
      "details": "The maximum valuation at which your investment converts into equity shares or cash."
  },
  {
      "title": "Discount",
      "value": "20%",
      "details": "If a trigger event for Supersapiens occurs, the discount provision gives investors equity shares (or equal value in cash) at a reduced price."
  },
  {
      "title": "Interest Rate",
      "value": "6%",
      "details": "The interest rate is the percentage that the investor will earn on the note until it matures or is converted into equity."
  },
  {
      "title": "Maturity",
      "value": "18 Months",
      "details": "The maturity date is the date on which the note must be repaid, either with interest or converted into equity."
  },
  {
      "title": "Minimum investment",
      "value": "$250",
      "details": "The smallest investment amount that Supersapiens is accepting."
  },
  {
      "title": "Maximum investment",
      "value": "$124K",
      "details": "The largest investment amount that Supersapiens is accepting."
  },
  {
      "title": "Deadline",
      "value": "March 4, 2024",
      "details": "Supersapiens needs to reach their minimum funding goal before the deadline (March 4, 2024 at 1:29 PM IST). If they don’t, all investments will be refunded."
  }
]
const cardData = [
  { img1: "https://images.unsplash.com/photo-1716506479875-70a866214c71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717457779714-33b88744eab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8", h1: "The New Shop", h2: "The real state investmenr is on boomb", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1716654975857-649bcfbe9605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", img2: "https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8", h1: "Groma  Reit", h2: "Leverging an Air pollution", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://plus.unsplash.com/premium_photo-1669863791280-fd9c40cc9e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1696549999348-71ec08f04cc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8", h1: "Fuel Gems", h2: "Gems of Fuel", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1714138665028-95e35021d928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1716813376299-c1f9d40a7f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8", h1: "StudioPod", h2: "Studiopod is the best", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1717819520943-2f20d73d00c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717457781876-a7f52cfa66dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8", h1: "Sharp Med", h2: "We Only See SharpMed", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1715553179509-88f536acabcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1716660565802-52f1a05c4f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8", h1: "Borderless...", h2: " Everyone need Borderless Boundries", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1717457782081-5900afd1e7c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", img2: "https://plus.unsplash.com/premium_photo-1663050697110-5a587ae85177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", h1: "Studio Pod", h2: "No Need for Studio", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1717705717956-432114a03149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717684566059-4d16b456c72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8", h1: "Reental", h2: "ol is the best", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://plus.unsplash.com/premium_photo-1669864070364-6b24d7bfb515?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1715484620057-1145dba8ac76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", h1: "IP 3", h2: "IP# is the Good IP in it ", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1717780084943-305381b5f8f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717457781885-d1cd3ede18e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D", h1: "Hydro Wind Energy", h2: "Hydro Wind Energy", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://images.unsplash.com/photo-1717704067715-57d14b090290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D", img2: "https://images.unsplash.com/photo-1717328357605-9c1c27c6c906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8", h1: "Zoop", h2: " 1 is the best", p: "Republic Funding Portal. Ring CF" },
  { img1: "https://plus.unsplash.com/premium_photo-1714785786689-ed6b64e28917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D", img2: "https://plus.unsplash.com/premium_photo-1683141237355-d966b653f414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D", h1: "Fitbake", h2: "Fitbake is the best", p: "Republic Funding Portal. Ring CF" },
];
const team_members = [
  {
      "imageUrl": "https://uploads.republic.com/p/roles/team_members/avatars/large/000/015/873/15873-1699452179-d41a489d1a211dc255d8b6f628babda9f458bac9.jpg",
      "h2": "Phil Southerland",
      "h4": "CEO & Founder",
      "p": "An experienced CEO, entrepreneur, public speaker, and global diabetes ambassador. Founded Team Novo Nordisk Pro Cycling Team, & the non-profit Team Type 1 Foundation. Recognized by the United Nations, WHO, World Bank and more."
  },
  {
      "imageUrl": "https://uploads.republic.com/p/roles/team_members/avatars/large/000/015/874/15874-1699452189-bc14d00b5b1cb18ddf9b5a4926812a0758095629.jpg",
      "h2": "Jay Robbins",
      "h4": "CFO & Founder",
      "p": "Jay has over 20 years of experience in finance, accounting, and operations in several different businesses. Before he joined Phil to start Supersapiens, he was a partner with a large CPA firm working with fast growing Private Equity backed companies."
  },
  {
      "imageUrl": "https://uploads.republic.com/p/roles/team_members/avatars/large/000/015/875/15875-1699452199-334b3f66804911b6a2e7fb13f90add4d93b6fa21.jpg",
      "h2": "Fitzalan Crowe",
      "h4": "Chief of Staff & Co-Founder",
      "p": "Fitzalan is a seasoned marketing executive with more than 20 years of experience in strategic communications, executive positioning, public relations, athlete management, and earned media."
  }
]
const PressData =  [
  {
      "title": "25 Promising Sports Startups to Watch",
      "description": "Top investors in the sports industry highlighted startups ranging from sports betting and media companies to AI and health tech.",
      "link": "https://www.businessinsider.com/most-promising-sports-startups-to-watch-according-vcs-top-investors-2023-11",
      "image": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/037/631/37631-1701287706-0bee25d5813e33dca4b1a899d359ac6f261d8a6b.",
      "icon": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/037/631/37631-1701287706-ff2fdd21cf85c928443bfe631485289ed0280641.",
      "bsns": "Business Insider",
      "date": "11 November 2023"
  },
  {
      "title": "What is a Continuous Glucose Monitor and Do I Need One?",
      "bsns": "Toms s Guide",
      "date": "sep 5 2023",
      "icon": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/650/36650-1698939883-7d693b3f8512e3b5490de2ab192e56a86fdfef2a.",
      "description": "We ask the experts about continuous glucose monitors and whether you need one.",
      "link": "https://www.tomsguide.com/features/what-is-a-continuous-glucose-monitor-and-do-i-need-one",
      "image": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/650/36650-1698939883-ab447f9f2a4a5b642c59d840e9e34d1d7d966869."
  },
  {
      "title": "Supersapiens vs Levels: Continuous Glucose Monitors Reviewed",
      "description": "Should you invest in a continuous glucose monitor to help with your training and racing? Former 220 editor James Witts tells you.",
      "link": "#",
      "bsns": "220 Tiathlon",
      "date": "Aug 7 2023",
      "icon": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/642/36642-1698939770-4d75ab06821336bf931796743d8cc665509242f0.",
      "image": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/642/36642-1698939770-23d2da3f4a729d62fb5300d920ba78eb69b94785."
  },
  {
      "title": "How to Optimize Your Pre-Workout Meal Timing",
      "bsns": "Outside Online",
      "date": "Aug 3, 2023",
      "icon": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/651/36651-1698939898-31bdf5c8781cb2c72e76e11bc318ac75a8dd1694.",
      "description": "Analyzing glucose data from endurance athletes offers new insights, with the potential of more to come.",
      "link": "https://www.outsideonline.com/health/training-performance/continuous-glucose-monitor-rebound-hypoglycemia/?scope=anon",
      "image": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/651/36651-1698939898-9418ce7b2733619507f1957b1a2a9fa75dbbf30b."
  },
  {
      "title": "The Sweet Science of Glucose Monitors",
      "bsns": "AW",
      "date": "Jun 11,2023",
      "icon": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/646/36646-1698939825-e889f3acec4a3ba3fb2e2432ef91058c877b8afe.",
      "description": "Sifan Hassan, Eilish McColgan, and Eliud Kipchoge are among a new wave of athletes who are measuring their sugar levels with continuous glucose monitors.",
      "link": "https://athleticsweekly.com/performance/the-sweet-science-of-glucose-monitors-1039968334/",
      "image": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/646/36646-1698939825-4a5f31e1fb2a1c2ef9b85e07c57da68b8d2fb46f."
  },
  {
      "title": "Trailblazer Marley Blonsky Joins Supersapiens",
      "date": "July 16 2001",
      "icon": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/036/643/36643-1698939781-0370ba59595d0b58b26eaa334d900e91b048ddbb.",
      "description": "Marley Blonsky joins Supersapiens as their newest ambassador.",
      "link": "https://www.endurancesportswire.com/trailblazer-marley-blonsky-joins-as-supersapiens-newest-ambassador/",
      "image": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/036/643/36643-1698939781-549791ee5332ded6fe0ba072e8eef3b38006ad05."
  }
]
const commentsData = [
  {
      name: "Enrique Alejandro Carvajal Patiño",
      price: "$5,000",
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
      price: "$25,000",
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
      price: "$50,000",
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
      price: "$100,000",
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
      price: "$150,000",
      profile_picture: {
          small_2x: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg"
      },
      role: "Investor in Supersapiens",
      timestamp: "Apr 05, 2024, 04:50 PM (PST)",
      content: "I think it's prudent to reassess our investment strategy given the recent developments.",
      likes: 7
  }
];
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
export {image_URL,homeOptions , highlights , faqs , cardData , team_members , PressData , commentsData , data};