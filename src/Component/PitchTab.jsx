
import Opportunity from './Coursel/Opportunity';
import Product from './Coursel/Product';
import Traction from './Coursel/Traction';
import Faq from './SideOptions';
import Busness from './Coursel/BusnessModel';
import VisionAndStrategy from './Coursel/Vision';
import Funding from './Coursel/Funding';
import LeaderShip from './Coursel/Leadership';
import { highlights } from '../Utils/constant';

const PitchTab = () => 
<div className="max-w-6xl mx-auto flex mt-10 lg:flex-row flex-col gap-8">
    <div className="mr-5">
        <h1 className="text-3xl font-bold text-primary-500 mb-6">Highlights</h1>
        <hr className="mb-6 text-primary-800 w-[56px]" />
        <div className="list-disc my-5">
            <ul className="text-primary-500 list-disc text-left mx-16 text-primary-800 text-xl leading-8 mb-16">
                {highlights.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <Opportunity />
            <Product />
            <Traction />
            <Busness />
            <VisionAndStrategy />
            <Funding />
            <LeaderShip />
        </div>

    </div>
    <Faq />

</div>

export default PitchTab;