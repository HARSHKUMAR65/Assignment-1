import Team from "./Team";
import FAQ from "./FAQ";
import Press from "./Press";
import Discussion from "./Discussion";
const About = () => {
    return (
        <>
            <div className="justify-center flex flex-col text-center my-10 text-3xl font-bold text-gray-600">
                <hr className="my-8 text-gray-800" />
                About Supersapiens
                <hr className="my-8 text-gray-800 border-2 w-[200px] border-blue-600 mx-auto" />
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <div className="flex justify-between ">
                    <div className="grid grid-row-3 gap-8">
                        <div className="text-start text-xl text-gray-600">
                            <h3>Legal Name</h3>
                            <p className="text-gray-800 text-2xl">TT1 Products, Inc.</p>
                        </div>
                        <div className="text-start text-xl text-gray-600">
                            <h3>Founded</h3>
                            <p className="text-gray-800 text-2xl">Feb 2019</p>
                        </div>
                        <div className="text-start text-xl text-gray-600">
                            <h3>Form</h3>
                            <p className="text-gray-800 text-2xl">Delaware Corporation</p>
                        </div>
                    </div>
                    <div className="grid grid-row-3 gap-8">
                        <div className="text-start text-xl text-gray-600">
                            <h3> Employees</h3>
                            <p className="text-gray-800 text-2xl">12</p>
                        </div>
                        <div className="text-start text-xl text-gray-600">
                            <h3>Website</h3>
                            <p className="text-blue-800 text-2xl"><a href="/">supersapiens.com</a></p>
                        </div>
                        <div className="text-start text-xl text-gray-600">
                            <h3>Social Media</h3>
                            <div>
                                <a target="_blank" title="Twitter" class="s-marginLeft1 c-link c-link--twitter" href="https://twitter.com/supersapiensinc"><i class="icon-twitter"></i></a>
                                <a target="_blank" title="Instagram" class="s-marginLeft1 c-link c-link--instagram" href="https://www.instagram.com/supersapiensinc/"><i class="icon-instagram"></i></a>
                                <a target="_blank" title="Linkedin" class="s-marginLeft1 c-link c-link--linkedin" href="https://www.linkedin.com/company/supersapiens"><i class="icon-linkedin"></i></a>
                                <a target="_blank" title="Facebook" class="s-marginLeft1 c-link c-link--facebook" href="https://www.facebook.com/supersapiensinc"><i class="icon-facebook"></i></a>
                                <a target="_blank" title="Youtube" class="s-marginLeft1 c-link c-link--youtube" href="https://www.youtube.com/c/Supersapiens_performance_technology?app=desktop"><i class="icon-youtube"></i></a>
                                <a target="_blank" title="Discord" class="s-marginLeft1 c-link c-link--discord" href="https://discord.gg/ppgtJFCn"><i class="icon-discord"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-row-3 gap-8">
                        <div className="text-start text-xl text-gray-600">
                            <h3>Headquaters</h3>
                            <div className="flex justify-center items-center max-w-md mb-4 p-4 bg-white border border-gray-200 shadow-md">
                                <img alt="Google Map location of of Supersapiens" title="Google Map location of of Supersapiens" src="https://maps.googleapis.com/maps/api/staticmap?center=2144%2BHills%2BAvenue%2BNorthwest%2B%2CAtlanta%2CGA&amp;format=png&amp;key=AIzaSyBSAkS8gvhmvxYO9XQOuP1ows6mbvx_jAE&amp;maptype=roadmap&amp;markers=size%3Asmall%7Ccolor%3A0xff0000%7Clabel%3A1%7C2144%2BHills%2BAvenue%2BNorthwest%2B%2CAtlanta%2CGA&amp;scale=2&amp;size=360x165&amp;visual_refresh=true&amp;zoom=13&amp;signature=VIHHSRpFSc6ZPpSoJ9iQhXEe9oA=" className="w-full h-64 object-cover" />
                                <div className="text-lg font-bold mb-2">2144 Hills Avenue Northwest, Suite A, Atlanta, GA</div>
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