
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"

function Footer(){
    return(
        <section className=" flex flex-col justify-center items-center gap-6 py-3 px-6 bg-neutral-very-dark-blue sm:flex-row lg:gap-20">
            <h1 className="text-3xl text-white font-bold">Shortly</h1>

            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-base font-bold text-white">Features</h3>

                <ul className="flex text-neutral-grayish-violet flex-col font-normal justify-center items-center gap-2">
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>

            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-base font-bold text-white">Resources</h3>

                <ul className="flex text-neutral-grayish-violet flex-col font-normal justify-center items-center gap-2">
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>

            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-base font-bold text-white">Company</h3>

                <ul className="flex text-neutral-grayish-violet flex-col font-normal justify-center items-center gap-2">
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="flex justify-center items-start gap-6 sm:justify-start ">
                <picture>
                    <img src={facebook} alt="Our Facebook" className="object-scale-down w-6 h-6"/>
                </picture>

                <picture>
                    <img src={twitter} alt="Our Twitter" className="object-scale-down w-6 h-6"/>
                </picture>

                <picture>
                    <img src={pinterest} alt="Our pinterest" className="object-scale-down w-6 h-6"/>
                </picture>

                <picture>
                    <img src={instagram} alt="Our Instagram" className="object-scale-down w-6 h-6"/>
                </picture>
            </div>

        </section>
    )
}

export default Footer;