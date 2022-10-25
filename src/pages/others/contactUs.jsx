import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faEarthAmericas,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'

import { Button } from '../../components/buttons'
import bgImg from '../../assets/images/features3.png'

function ContactUs() {
  return (
    <div>
      <div className="laptop:relative">
        <img
          className="hidden laptop:block object-cover w-full"
          src={bgImg}
          alt="contact us"
        />
        {/* overlay */}
        <div className="hidden laptop:block bg-black absolute top-0 left-0 right-0 bottom-0 opacity-70"></div>
        <div className="laptop:absolute top-0 left-0 right-0 bottom-0">
          <div className="py-14 bg-light_grey text-center laptop:bg-transparent">
            <h3 className="uppercase text-body-lg font-semibold text-primary mb-8 laptop:text-white">
              Contact us
            </h3>
            <p className="text-gray-500 w-4/5 mx-auto">
              We're open for any suggestion or just to have a chat
            </p>
          </div>
          <div className="laptop:flex laptop:gap-5 laptop:justify-center laptop:items-start laptop:flex-row-reverse">
            {/* Form Contact */}
            <form className="bg-dark_primary py-10 px-6 laptop:bg-primary laptop:opacity-90 laptop:rounded-tr-3xl laptop:rounded-bl-3xl laptop:w-[400px] laptop:shadow-lg laptop:shadow-black/30">
              <h3 className="text-white ml-4 mb-8 text-body-lg">Write Us</h3>
              <input
                name="name"
                className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 laptop:bg-primary"
                type="text"
                placeholder="Name"
              />
              <input
                name="email"
                className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 mt-4 laptop:bg-primary"
                type="email"
                placeholder="Email"
              />
              <input
                name="subject"
                className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 mt-4 laptop:bg-primary"
                type="text"
                placeholder="Subject"
              />
              <textarea
                name="message"
                className="w-full bg-dark_primary border-b-2 border-border_dark outline-none text-white text-body-sm pl-1 py-2 mt-4 laptop:bg-primary"
                rows="4"
                placeholder="Message"
              ></textarea>
              {/* Button Send */}
              <div className="max-w-[60px] mt-5">
                <Button Color="white">Send</Button>
              </div>
            </form>
            {/* Contact Infomation */}
            <div className="pt-14 laptop:pt-10 pb-20 laptop:pb-10 px-6 laptop:w-[400px] laptop:opacity-90 laptop:rounded-tr-3xl laptop:rounded-bl-3xl laptop:bg-dark_primary laptop:shadow-lg laptop:shadow-black/30">
              <h3 className="uppercase text-body-lg font-semibold text-primary mb-4 text-center laptop:text-white laptop:text-left laptop:normal-case laptop:font-medium">
                Contact infomation
              </h3>
              {/* Divider */}
              <p className="w-4/5 bg-border_dark h-1 mx-auto mb-8 "></p>
              <div className="flex gap-3 items-center">
                <div className="rounded-full bg-border_grey laptop:bg-slate-700 w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-primary laptop:text-white"
                  />
                </div>
                <p className="flex-1 text-body-sm laptop:text-gray-500">
                  <span className="font-semibold text-primary text-body-md laptop:text-white laptop:font-normal">
                    Address:{' '}
                  </span>
                  4517 Washington Ave. Manch, Kentucky 39495
                </p>
              </div>
              <div className="flex gap-3 items-center mt-8">
                <div className="rounded-full bg-border_grey laptop:bg-slate-700 w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-primary laptop:text-white"
                  />
                </div>
                <p className="flex-1 text-body-sm laptop:text-gray-500">
                  <span className="font-semibold text-primary text-body-md laptop:text-white laptop:font-normal">
                    Address:{' '}
                  </span>
                  0847.635.644
                </p>
              </div>
              <div className="flex gap-3 items-center mt-8">
                <div className="rounded-full bg-border_grey laptop:bg-slate-700 w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary laptop:text-white"
                  />
                </div>
                <p className="flex-1 text-body-sm laptop:text-gray-500">
                  <span className="font-semibold text-primary text-body-md laptop:text-white laptop:font-normal">
                    Address:{' '}
                  </span>
                  michael.mitc@example.com
                </p>
              </div>
              <div className="flex gap-3 items-center mt-8">
                <div className="rounded-full bg-border_grey laptop:bg-slate-700 w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEarthAmericas}
                    className="text-primary laptop:text-white"
                  />
                </div>
                <p className="flex-1 text-body-sm laptop:text-gray-500">
                  <span className="font-semibold text-primary text-body-md laptop:text-white laptop:font-normal">
                    Address:{' '}
                  </span>
                  https://www.app.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Respone Customer */}
      <div className="hidden laptop:block pt-16 pb-40 px-48">
        <h3 className="text-body-lg font-semibold text-dark_primary mb-14 text-center">
          See what our customers are saying about us
        </h3>
        <div className="flex items-start gap-5">
          <div className="w-4/12 bg-dark_primary px-10 py-5 rounded-2xl">
            <h3 className="text-white font-normal text-body-lg text-center">
              Great Company
            </h3>
            <p className="text-gray-500 text-body-md mt-5 text-justify">
              “Very easy ordering process and a huge plus they work with your
              insurance. Not to mention it’s super simple to apply the
              insurance. My contacts were shipped and delivered within 2 days,
              can’t expect anything more!”
            </p>
            <p className="text-white mt-8 text-body-md">Bruno Kpankon</p>
          </div>
          <div className="w-4/12 bg-dark_primary px-10 py-5 rounded-2xl">
            <h3 className="text-white font-normal text-body-lg text-center">
              The customer service was top notch
            </h3>
            <p className="text-gray-500 text-body-md mt-5 text-justify">
              “The customer service was top notch. I made a mistake on my order
              and was informed promptly through an email. When I called to
              revise the order the customer service representative was extremely
              knowledgeable, helpful, professional and personable. My issue was
              resolved quickly and the order revised and resubmitted. The order
              took longer than expected to arrive but I think that was the
              delivery method. I would definitely use ContactsDirect again.”
            </p>
            <p className="text-white mt-8 text-body-md">Lynn Bell</p>
          </div>
          <div className="w-4/12 bg-dark_primary px-10 py-5 rounded-2xl">
            <h3 className="text-white font-normal text-body-lg text-center">
              It was one of the easiest things I have…
            </h3>
            <p className="text-gray-500 text-body-md mt-5 text-justify">
              “It was one of the easiest things I have done online and very
              quick! The price was great and I could not upload my prescription
              so they actually contacted my doctor and verified it. I will
              definitely use them again.”
            </p>
            <p className="text-white mt-8 text-body-md">Antony Ly.beart</p>
          </div>
        </div>
      </div>
      {/* Need Help */}
      <div className="bg-light_grey pt-14 pb-20 px-6 laptop:px-48 laptop:py-20">
        <h3 className="uppercase text-body-lg font-semibold text-primary mb-14 text-center laptop:text-dark_primary">
          Need Help? Contact Us!
        </h3>
        <div className="laptop:flex gap-5 ">
          <div className="border-dark_primary text-center border-2 rounded-xl px-5 py-10 laptop:w-4/12">
            <div className="flex justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[30px] text-dark_primary"
              />
              <p className="text-dark_primary text-body-lg font-bold">
                Call Us
              </p>
            </div>
            <p className="mt-5 text-dark_primary text-body-md font-semibold">
              1-844-553-6737
            </p>
            <p className="mt-5 text-body-sm text-gray-500">
              Monday-Friday 8:30AM - 8.00PM EST Saturday 9:00AM - 5.30PM EST
            </p>
          </div>
          <div className="border-dark_primary text-center border-2 rounded-xl px-5 py-10 laptop:w-4/12 mt-8 laptop:mt-0">
            <div className="flex justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[30px] text-dark_primary"
              />
              <p className="text-dark_primary text-body-lg font-bold">
                Wrire To Us
              </p>
            </div>
            <p className="mt-5 text-dark_primary text-body-md font-semibold">
              Send us an Email
            </p>
            <p className="mt-5 text-body-sm text-gray-500">
              We’ll get back to you as soon as possible
            </p>
          </div>
          <div className="border-dark_primary text-center border-2 rounded-xl px-5 py-10 laptop:w-4/12 mt-8 laptop:mt-0">
            <div className="flex justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="text-[30px] text-dark_primary"
              />
              <p className="text-dark_primary text-body-lg font-bold">
                Chat With Us
              </p>
            </div>
            <p className="mt-5 text-dark_primary text-body-md font-semibold">
              Customer support
            </p>
            <p className="mt-5 text-body-sm text-gray-500">
              Monday - Friday 8:30 am to 4:30 pm EST
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 text-center">
        <h3 className="text-body-md laptop:text-body-lg font-semibold text-primary mb-4 laptop:text-dark_primary">
          Don't Worry!
        </h3>
        <p className="mt-5 text-body-sm laptop:text-body-md text-gray-500">
          It's our honor to help you!
        </p>
      </div>
    </div>
  )
}

export default ContactUs
