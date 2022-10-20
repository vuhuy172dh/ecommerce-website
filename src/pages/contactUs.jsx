import Button from "../components/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faEnvelope, faEarthAmericas, faCommentDots } from "@fortawesome/free-solid-svg-icons"

function ContactUs() {
    return(
        <div>    
            <div className="py-14 bg-light_grey text-center">
                <h3 className="uppercase text-body-lg font-semibold text-primary mb-8">Contact us</h3>
                <p className="text-gray-500 w-4/5 mx-auto">We're open for any suggestion or just to have a chat</p>
            </div>
            {/* Form Contact */}
            <form className="bg-dark_primary py-10 px-6">
                <h3 className="text-white ml-4 mb-8 text-body-lg">Write Us</h3>
                <input name="name" className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2" type="text" placeholder="Name"/>
                <input name="email" className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 mt-4" type="email" placeholder="Email"/>
                <input name="subject" className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 mt-4" type="text" placeholder="Subject"/>
                <textarea name="message" className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 mt-4" rows="4" placeholder="Message"></textarea>
                <div className="max-w-[60px] mt-5"><Button Color="white">Send</Button></div>
            </form>
            {/* Contact Infomation */}
            <div className="pt-14 pb-20 px-6">
                <h3 className="uppercase text-body-lg font-semibold text-primary mb-4 text-center">Contact infomation</h3>
                <p className="w-4/5 bg-border_dark h-1 mx-auto mb-8 "></p>
                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-border_grey w-8 h-8 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faLocationDot} className="text-primary"/>
                    </div>
                    <p className="flex-1 text-body-sm"><span className="font-semibold text-primary text-body-md">Address: </span>4517 Washington Ave. Manch, Kentucky 39495</p>
                </div>
                <div className="flex gap-3 items-center mt-8">
                    <div className="rounded-full bg-border_grey w-8 h-8 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="text-primary"/>
                    </div>
                    <p className="flex-1 text-body-sm"><span className="font-semibold text-primary text-body-md">Address: </span>4517 Washington Ave. Manch, Kentucky 39495</p>
                </div>
                <div className="flex gap-3 items-center mt-8">
                    <div className="rounded-full bg-border_grey w-8 h-8 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary"/>
                    </div>
                    <p className="flex-1 text-body-sm"><span className="font-semibold text-primary text-body-md">Address: </span>4517 Washington Ave. Manch, Kentucky 39495</p>
                </div>
                <div className="flex gap-3 items-center mt-8">
                    <div className="rounded-full bg-border_grey w-8 h-8 flex-shrink-0 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEarthAmericas} className="text-primary"/>
                    </div>
                    <p className="flex-1 text-body-sm"><span className="font-semibold text-primary text-body-md">Address: </span>4517 Washington Ave. Manch, Kentucky 39495</p>
                </div>
            </div>
            {/* Need Help */}
            <div className="bg-light_grey pt-14 pb-20 px-6">
                <h3 className="uppercase text-body-lg font-semibold text-primary mb-14 text-center">Need Help? Contact Us!</h3>
                <div className="border-dark_primary text-center border-2 rounded-xl px-5 py-10">
                    <div className="flex justify-center items-center gap-5">
                        <FontAwesomeIcon icon={faPhone} className="text-[30px] text-dark_primary"/>
                        <p className="text-dark_primary text-body-lg font-bold">Call Us</p>
                    </div>
                    <p className="mt-5 text-dark_primary text-body-md font-semibold">1-844-553-6737</p>
                    <p className="mt-5 text-body-sm text-gray-500">Monday-Friday 8:30AM - 8.00PM EST Saturday 9:00AM - 5.30PM EST</p>
                </div>
                <div className="border-dark_primary text-center border-2 rounded-xl px-5 py-10 mt-8">
                    <div className="flex justify-center items-center gap-5">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[30px] text-dark_primary"/>
                        <p className="text-dark_primary text-body-lg font-bold">Wrire To Us</p>
                    </div>
                    <p className="mt-5 text-dark_primary text-body-md font-semibold">Send us an Email</p>
                    <p className="mt-5 text-body-sm text-gray-500">We’ll get back to you  as  soon as possible</p>
                </div>
                <div className="border-dark_primary text-center border-2 rounded-xl px-5 py-10 mt-8">
                    <div className="flex justify-center items-center gap-5">
                        <FontAwesomeIcon icon={faCommentDots} className="text-[30px] text-dark_primary"/>
                        <p className="text-dark_primary text-body-lg font-bold">Chat With Us</p>
                    </div>
                    <p className="mt-5 text-dark_primary text-body-md font-semibold">Customer support</p>
                    <p className="mt-5 text-body-sm text-gray-500">Monday - Friday 8:30 am to 4:30 pm EST</p>
                </div>
            </div>
            <div className="py-10 text-center">
                <h3 className="text-body-md font-semibold text-primary mb-4 ">Don't Worry!</h3>
                <p className="mt-5 text-body-sm text-gray-500">It's our honor to help you!</p>
            </div>
        </div>            
    )
}

export default ContactUs