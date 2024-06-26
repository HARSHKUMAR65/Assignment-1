import Team from "./Team";
import FAQ from "./FAQ";
import Press from "./Press";
import Discussion from "./Discussion";
const About = () => {
    return (
        <>
            <div className="justify-center flex flex-col text-center my-10 text-3xl font-bold text-primary-600">
                <hr className="my-8 text-primary-400" />
                About Supersapiens
                <hr className="my-8 text-primary-500 border-2 w-[200px] border-secondary-600 mx-auto" />
            </div>

            <div className="w-full max-w-6xl mx-auto ">
                <div className="flex justify-between  lg:flex-row flex-col">
                    <div className="grid grid-row-3 gap-8">
                        <div className="text-start text-xl text-primary-600">
                            <h3>Legal Name</h3>
                            <p className="text-primary-500 text-2xl">TT1 Products, Inc.</p>
                        </div>
                        <div className="text-start text-xl text-primary-600">
                            <h3>Founded</h3>
                            <p className="text-primary-800 text-2xl">Feb 2019</p>
                        </div>
                        <div className="text-start text-xl text-primary-600">
                            <h3>Form</h3>
                            <p className="text-primary-800 text-2xl">Delaware Corporation</p>
                        </div>
                    </div>
                    <div className="grid grid-row-3 gap-8">
                        <div className="text-start text-xl text-primary-600">
                            <h3> Employees</h3>
                            <p className="text-primary-800 text-2xl">12</p>
                        </div>
                        <div className="text-start text-xl text-primary-600">
                            <h3>Website</h3>
                            <p className="text-secondary-800 text-2xl"><a href="/">supersapiens.com</a></p>
                        </div>
                        <div className="text-start text-xl text-primary-600">
                            <h3>Social Media</h3>
                            <div>
                                <a   class="s-marginLeft1 c-link c-link--twitter" href="https://twitter.com/supersapiensinc"><i class="icon-twitter"></i></a>
                                <a   class="s-marginLeft1 c-link c-link--instagram" href="https://www.instagram.com/supersapiensinc/"><i class="icon-instagram"></i></a>
                                <a   class="s-marginLeft1 c-link c-link--linkedin" href="https://www.linkedin.com/company/supersapiens"><i class="icon-linkedin"></i></a>
                                <a   class="s-marginLeft1 c-link c-link--facebook" href="https://www.facebook.com/supersapiensinc"><i class="icon-facebook"></i></a>
                                <a   class="s-marginLeft1 c-link c-link--youtube" href="https://www.youtube.com/c/Supersapiens_performance_technology?app=desktop"><i class="icon-youtube"></i></a>
                                <a  class="s-marginLeft1 c-link c-link--discord" href="https://discord.gg/ppgtJFCn"><i class="icon-discord"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-row-3 gap-8">
                        <div className="text-start text-xl text-primary-600">
                            <h3 className="my-2">Headquaters</h3>
                            <div className="flex flex-col justify-center items-center max-w-md mb-4  bg-white border border-primary-200 shadow-md">
                                <img alt="Google Map location of of Supersapiens" title="Google Map location of of Supersapiens" src="https://res.cloudinary.com/dn80vxb41/image/upload/v1717908528/staticmap_frdof3.png" className="w-full h-46 object-cover" />
                                <div className="text-sm p-1 text-left  bg-primary-800 text-primary-100 w-full"><p>2144 Hills Avenue Northwest, Suite A, Atlanta, GA</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Team/>
            <Press/>
            <Discussion/>
        </>
    )
}

export default About;