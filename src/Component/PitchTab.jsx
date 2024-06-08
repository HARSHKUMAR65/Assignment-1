
import Opportunity from './Coursel/Opportunity';
import Product from './Coursel/Product';
import Traction from './Coursel/Traction';
import Faq from './SideOptions';
import Busness from './Coursel/BusnessModel';
import VisionAndStrategy from './Coursel/Vision';
import Funding from './Coursel/Funding';
import LeaderShip from './Coursel/Leadership';
import {highlights} from '../Utils/constant';

const PitchTab = () => <div className="max-w-6xl mx-auto flex mt-10 gap-1">
    <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h1>
        <hr className="mb-6 text-gray-800 w-[56px]" />
        <div className="list-disc my-5">
            <ul className="text-gray-500 list-disc text-left mx-16 text-gray-800 text-xl leading-8 mb-16">
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