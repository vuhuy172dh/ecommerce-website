import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowsRotate,
  faEnvelope,
  faKey
} from '@fortawesome/free-solid-svg-icons'

function ReturnPolicy() {
  return (
    <div>
      <div className="mx-6 laptop:mx-20 laptop:flex laptop:gap-20">
        <div className="laptop:w-8/12">
          <div className="mb-8">
            <h3 className="text-center laptop:text-left text-h3 font-medium mb-5 text-dark_primary">
              What is the return policy at Avion?
            </h3>
            <p className="text-center text-h6 font-normal laptop:text-left">
              22 Thg 10, 2022
            </p>
          </div>
          <div className="border-2 border-dark_primary rounded-md p-3 laptop:border-none laptop:p-0">
            <p className="font-h5">
              At Avion, we appreciate the trust of our customers when ordering
              products. The after-sales policy at Avion is built on a commitment
              to protecting the interests of consumers so that you can rest
              assured to shop and experience the service.
            </p>
          </div>
          <div className="border-2 border-dark_primary rounded-md p-3 mt-5 laptop:border-none laptop:p-0">
            <p className="font-h5">
              Avion guarantees that the products sold at Avion are new and 100%
              genuine. In the rare case that the product you receive is
              defective, damaged or not as described, Avion is committed to
              protecting customers with a return and warranty policy.
            </p>
          </div>
          {/* Application period */}
          <div>
            <div className="bg-dark_primary h-[24px] laptop:h-[48px] relative mb-5 mt-10 rounded">
              <div className="flex items-center gap-3 absolute left-[20px] laptop:left-1/4 top-1/2 -translate-y-1/2">
                <div className="w-[50px] h-[50px] laptop:w-[100px] laptop:h-[100px] rounded-full border-2 border-dark_primary bg-white flex">
                  <FontAwesomeIcon
                    className="m-auto text-[30px] text-dark_primary laptop:text-[60px]"
                    icon={faArrowsRotate}
                  />
                </div>
                <h3 className="font-normal text-body-sm laptop:text-body-lg text-white">
                  Policy application period
                </h3>
              </div>
            </div>
            {/* Table */}
            <table className="hidden laptop:table mt-20 w-full">
              <tbody>
                {/* Table head */}
                <tr className="bg-primary">
                  <th className="w-1/5 border-2 border-dark_primary px-4 py-3 text-left"></th>
                  <th className="w-1/5 border-2 border-dark_primary px-4 py-3 text-left">
                    <p className="text-white text-h6 font-normal">
                      SINCE THE DELIVERY IS SUCCESSFUL
                    </p>
                  </th>
                  <th className="w-1/5 border-2 border-dark_primary px-4 py-3 text-left">
                    <p className="text-white text-h6 font-normal">
                      PRODUCTS ERROR
                    </p>
                  </th>
                  <th className="w-1/5 border-2 border-dark_primary px-4 py-3 text-left">
                    <p className="text-white text-h6 font-normal">
                      PRODUCTS WITHOUT ERROR
                    </p>
                  </th>
                  <th className="w-1/5 border-2 border-dark_primary px-4 py-3 text-left">
                    <p className="text-white text-h6 font-normal">
                      PRODUCT DAMAGED BY USERS
                    </p>
                  </th>
                </tr>
                {/* Table Row-1 */}
                <tr>
                  <td
                    rowSpan="4"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Types of lights
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      first 7 days
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Renew
                    </p>
                  </td>
                  <td
                    rowSpan="4"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support return
                    </p>
                  </td>
                  <td
                    rowSpan="4"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Warranty or repair for a fee as specified by the supplier.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Pay no fee
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      8 - 30 days
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Guarantee
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      30 days onwards
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Guarantee
                    </p>
                  </td>
                </tr>
                {/* Table Row-2 */}
                <tr>
                  <td
                    rowSpan="4"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Types of tables and chairs
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      first 7 days
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Renew
                    </p>
                  </td>
                  <td
                    rowSpan="3"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support return
                    </p>
                  </td>
                  <td
                    rowSpan="4"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Warranty or repair for a fee as specified by the supplier.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Pay no fee
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      8 - 30 days
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Guarantee
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      30 days onwards
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Guarantee
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support exchange/return
                    </p>
                  </td>
                </tr>
                {/* Table Row-3 */}
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Types of household cabinets
                    </p>
                  </td>
                  <td
                    colSpan="4"
                    className="border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Warranty only applies, returns do not apply
                    </p>
                  </td>
                </tr>
                {/* Table Row-4 */}
                <tr>
                  <td
                    rowSpan="3"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      All kinds of dishes, spoons, drinking cups
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      first 30 days
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Renew
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support return
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support return
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Pay no fee
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      30 days onwards
                    </p>
                  </td>
                  <td
                    colSpan="3"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support exchange/return
                    </p>
                  </td>
                </tr>
                {/* Table Row-5 */}
                <tr>
                  <td
                    rowSpan="3"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      All kinds of vases, flower arrangements
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      first 30 days
                    </p>
                  </td>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Renew
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Pay no fee
                    </p>
                  </td>
                  <td
                    rowSpan="3"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support return
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      Pay no fee
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/5 border-2 border-dark_primary px-4 py-3">
                    <p className="text-dark_primary text-h5 font-medium">
                      30 days onwards
                    </p>
                  </td>
                  <td
                    colSpan="2"
                    className="w-1/5 border-2 border-dark_primary px-4 py-3"
                  >
                    <p className="text-dark_primary text-h5 font-medium">
                      Does not support exchange/return
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-body-sm mx-3 laptop:hidden">
              Please use a high resolution device such as a laptop or PC to view
              the full selection for our return policy.{' '}
              <b className="text-dark_primary text-body-sm">
                {' '}
                Sorry about this inconvenience!
              </b>
            </p>
          </div>
          <div className="mx-3 mt-10">
            <p className="text-body-sm laptop:text-body-md">
              <b className="text-dark_primary text-body-md font-bold">Note: </b>
              Within 7 days after receiving the goods, if your device has a
              technical fault and has been repaired, Avion regrets not to
              support product return and exchange, only warranty support (if the
              product is not available for purchase) !
            </p>
            <ul className="hidden laptop:block list-disc pl-10 mt-8">
              <li className="font-h5">
                To ensure the interests of customers and Avion has the basis to
                work with relevant departments, all requests for
                exchange/return/warranty you need to provide pictures/videos of
                defective products. Past the time to exchange / return products,
                if we have not received enough pictures / clips from customers,
                Avion would like to refuse to support. Besides, you need to
                record a video clip of product packaging as proof of
                comparison/complaint related to return and exchange later (if
                necessary).
              </li>
              <li className="font-h5 mt-5">
                In addition to the general policy on time and conditions of
                return, exchange/return/warranty policy for products in the
                group of Gifts, Products/Services purchased with, Buy with
                discount, there are some additional conditions such as: after:
              </li>
            </ul>
            <table className="hidden laptop:table mt-10 w-full">
              <tbody>
                <tr className="bg-primary">
                  <th className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top"></th>
                  <th className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-white text-h6 font-normal">
                      BUNDLED GIFT
                    </p>
                  </th>
                  <th className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-white text-h6 font-normal">
                      PRODUCTS WITH BUY / BUY WITH MORE DISCOUNT
                    </p>
                  </th>
                </tr>
                <tr>
                  <td className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-dark_primary text-h5 font-medium">
                      Defective product (due to supplier)
                    </p>
                  </td>
                  <td className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-dark_primary text-h5 font-medium">
                      Exchange (faulty main product) or Return the full set
                    </p>
                  </td>
                  <td className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-dark_primary text-h5 font-medium">
                      Exchange defective products or Return the full set
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-dark_primary text-h5 font-medium">
                      Product is not defective
                    </p>
                  </td>
                  <td className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-dark_primary text-h5 font-medium">
                      Return the whole set
                    </p>
                  </td>
                  <td className="w-1/3 border-2 border-dark_primary px-4 py-3 align-top">
                    <p className="text-dark_primary text-h5 font-medium">
                      Return the whole set
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Question Customer */}
        <div className="mx-3 laptop:w-4/12">
          <h3 className="text-center laptop:text-left text-h3 font-medium mb-5 mt-10 laptop:mt-0 text-dark_primary">
            Frequently asked questions
          </h3>
          <ul className="list-disc laptop:list-none">
            <li>
              <a href="#" className="text-primary underline">
                What is the warranty policy at Avion?
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-primary underline">
                Terms of use ?
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-primary underline">
                What is the product return policy at Avion?
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-primary underline">
                How do I register for billing when I make a purchase at Avion?
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="text-primary underline">
                How do I order through the Avion website?
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Return Step */}
      <div className="mx-6 laptop:my-28">
        <h3 className="text-center text-h3 font-medium mb-5 mt-10 text-dark_primary laptop:hidden">
          3 - Extremely Simple Step
        </h3>
        <h3 className="text-center text-h3 font-medium mb-5 laptop:mb-10 mt-10 text-dark_primary hidden laptop:block">
          Implementation Refund with 3 - Extremely Simple Step
        </h3>
        <div className="laptop:flex laptop:mx-28 laptop:gap-8">
          <div className="mt-10 text-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-4/12">
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:top-0 mobile:-translate-y-1/2 mobile:left-1/2 mobile:-translate-x-1/2">
              <span className="text-white">1</span>
            </div>
            <FontAwesomeIcon
              className="text-[40px] text-dark_primary mt-3"
              icon={faArrowsRotate}
            />
            <p className="text-center text-h4 font-medium mt-3">
              Register exchange
            </p>
            <p className="text-center text-h6 mt-5">
              Contact Avion via hotline 1-844-553-6737 to register for exchange,
              including Saturday, Sunday
            </p>
          </div>
          <div className="mt-10 text-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-4/12">
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:top-0 mobile:-translate-y-1/2 mobile:left-1/2 mobile:-translate-x-1/2">
              <span className="text-white">2</span>
            </div>
            <FontAwesomeIcon
              className="text-[40px] text-dark_primary mt-3"
              icon={faEnvelope}
            />
            <p className="text-center text-h4 font-medium mt-3">
              Receive a confirmation message
            </p>
            <p className="text-center text-h6 mt-5">
              A message or email confirming the registration of return and
              exchange will be sent to the customer immediately after successful
              registration
            </p>
          </div>
          <div className="mt-10 text-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-4/12">
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:top-0 mobile:-translate-y-1/2 mobile:left-1/2 mobile:-translate-x-1/2">
              <span className="text-white">3</span>
            </div>
            <FontAwesomeIcon
              className="text-[40px] text-dark_primary mt-3"
              icon={faKey}
            />
            <p className="text-center text-h4 font-medium mt-3">
              Free shipping on returns
            </p>
            <p className="text-center text-h6 mt-5">
              Avion recalls products nationwide for free
            </p>
          </div>
        </div>
      </div>
      {/* Belive Us */}
      <div className="bg-light_grey px-6 py-8 mt-10">
        <h3 className="text-center pb-8 text-body-lg font-bold">Belive Us</h3>
        <p className="text-center">
          Avion always accompany and bring absolute trust to you
        </p>
      </div>
    </div>
  )
}

export default ReturnPolicy
