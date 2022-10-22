import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowsRotate, faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons"

function ReturnPolicy() {
    return (
        <div>
            <div className="mx-6 laptop:mx-20">
                <div>
                    <div className="mb-8">
                        <h3 className="text-center text-h3 font-medium mb-5 text-dark_primary">What is the return policy at Avion?</h3>
                        <p className="text-center text-h6 font-normal">22 Thg 10, 2022</p>
                    </div>
                    <div className="border-2 border-dark_primary rounded-md p-3">
                        <p className="font-h5">
                            At Avion, we appreciate the trust of our customers when ordering products. The after-sales policy at Avion is built on a commitment to protecting the interests of consumers so that you can rest assured to shop and experience the service.  
                        </p>
                    </div>
                    <div className="border-2 border-dark_primary rounded-md p-3 mt-5">
                        <p className="font-h5">
                        Avion guarantees that the products sold at Avion are new and 100% genuine. In the rare case that the product you receive is defective, damaged or not as described, Avion is committed to protecting customers with a return and warranty policy.                   
                        </p>
                    </div>
                    {/* Application period */}
                    <div>
                        <div className="bg-dark_primary h-[24px] relative mb-5 mt-10 rounded">
                            <div className="flex items-center gap-3 absolute left-[20px] top-1/2 -translate-y-1/2">
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-dark_primary bg-white flex">
                                    <FontAwesomeIcon className="m-auto text-[30px]" icon={faArrowsRotate}/>
                                </div>
                                <h3 className="font-normal text-body-sm text-white">Policy application period</h3>
                            </div>
                        </div>
                        <p className="text-body-sm mx-3">
                           Please use a high resolution device such as a laptop or PC to view the full selection for our return policy. <b className="text-dark_primary text-body-sm"> Sorry about this inconvenience!</b>  
                        </p>
                    </div>
                    <div className="mx-3 mt-10">
                        <p className="text-body-sm"> 
                            <b className="text-dark_primary text-body-md font-bold">Note: </b>
                            Within 7 days after receiving the goods, if your device has a technical fault and has been repaired, Avion regrets not to support product return and exchange, only warranty support (if the product is not available for purchase) !
                        </p>
                    </div>
                </div>
                {/* Question Customer */}
                <div className="mx-3">
                    <h3 className="text-center text-h3 font-medium mb-5 mt-10 text-dark_primary">Frequently asked questions</h3>
                    <ul className="list-disc">
                        <li><a href="#" className="text-primary underline">What is the warranty policy at Avion?</a></li>
                        <li className="mt-4"><a href="#" className="text-primary underline">Terms of use ?</a></li>
                        <li className="mt-4"><a href="#" className="text-primary underline">What is the product return policy at Avion?</a></li>
                        <li className="mt-4"><a href="#" className="text-primary underline">How do I register for billing when I make a purchase at Avion?</a></li>
                        <li className="mt-4"><a href="#" className="text-primary underline">How do I order through the Avion website?</a></li>
                    </ul>
                </div>
            </div>
            {/* Return Step */}
            <div className="mx-6">
                <h3 className="text-center text-h3 font-medium mb-5 mt-10 text-dark_primary">3 - Extremely Simple Step</h3>
                <div className="mt-10 text-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                    <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:top-0 mobile:-translate-y-1/2 mobile:left-1/2 mobile:-translate-x-1/2">
                        <span className="text-white">1</span>
                    </div>
                    <FontAwesomeIcon className="text-[40px] text-dark_primary mt-3" icon={faArrowsRotate}/>
                    <p className="text-center text-h4 font-medium mt-3">Register exchange</p>
                    <p className="text-center text-h6 mt-5">Contact Avion via hotline 1-844-553-6737 to register for exchange, including Saturday, Sunday</p>
                </div>
                <div className="mt-10 text-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                    <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:top-0 mobile:-translate-y-1/2 mobile:left-1/2 mobile:-translate-x-1/2">
                        <span className="text-white">2</span>
                    </div>
                    <FontAwesomeIcon className="text-[40px] text-dark_primary mt-3" icon={faEnvelope}/>
                    <p className="text-center text-h4 font-medium mt-3">Receive a confirmation message</p>
                    <p className="text-center text-h6 mt-5">A message or email confirming the registration of return and exchange will be sent to the customer immediately after successful registration</p>
                </div>
                <div className="mt-10 text-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                    <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:top-0 mobile:-translate-y-1/2 mobile:left-1/2 mobile:-translate-x-1/2">
                        <span className="text-white">3</span>
                    </div>
                    <FontAwesomeIcon className="text-[40px] text-dark_primary mt-3" icon={faKey}/>
                    <p className="text-center text-h4 font-medium mt-3">Free shipping on returns</p>
                    <p className="text-center text-h6 mt-5">Avion recalls products nationwide for free</p>
                </div>
            </div>
            {/* Belive Us */}
            <div className="bg-light_grey px-6 py-8 mt-10">
                <h3 className="text-center pb-8 text-body-lg font-bold">Belive Us</h3>
                <p className="text-center">Avion always accompany and bring absolute trust to you</p>
            </div>
        </div>
    )
}

export default  ReturnPolicy