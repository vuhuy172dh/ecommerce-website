import React from 'react'
import { Helmet } from 'react-helmet-async'

import { EmailSignUp } from '../../components/emails'
import feature2 from '../../assets/images/features1.png'
import feature3 from '../../assets/images/features3.png'
import { Button } from '../../components/buttons'
import { InfoItemList } from '../../components/others'

function AboutPage() {
  return (
    <div>
      {/*Helmet async*/}
      <Helmet>
        <title>About</title>
      </Helmet>

      {/* Page header*/}
      <div className="">
        <p className="laptop:text-9 laptop:pt-16 laptop:pb-20 laptop:px-[450px] text-h2 py-8 px-9 ">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </p>
      </div>
      {/* Features sections */}
      <div className="grid grid-cols-1 laptop:grid-cols-2 mx-auto">
        {/* Feature 1 */}
        <div>
          <div className="px-6 mt-12 mb-9 laptop:px-28  laptop:pt-20 ">
            <div className="text-h4 laptop:text-6">
              From a studio in London to a global brand with over 400 outlets
            </div>
            <p className="text-body-sm mt-3 laptop:text-body-md">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />{' '}
              <br />
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <div className="flex w-full laptop:w-2/5 laptop:mt-48 mobile:mb-16 mt-16">
              <Button
                className="laptop:mt-40 mobile:mb-16 mt-16"
                Size="medium"
                Color="secondary"
                State="default"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div>
          <img
            src={feature2}
            alt="feature2"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Feature 3 */}
        <div>
          <img
            src={feature3}
            alt="feature1"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Feature 4*/}
        <div>
          <div className="px-6 mt-12 mb-9 laptop:px-28  laptop:pt-20">
            <div className="text-h4 laptop:text-6 ">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </div>
            <p className="text-body-sm laptop:text-body-md mt-3">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />
              <br /> Handmade, and lovingly crafted furniture and homeware is
              what we live, breathe and design so our Chelsea boutique become
              the hotbed for the London interior design community.
            </p>
            <div className="flex w-full laptop:w-2/5 laptop:mt-48 mobile:mb-16 mt-16">
              <Button Size="medium" Color="secondary" State="default">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*Info item section */}
      <div className="laptop:px-20 laptop:py-12 px-6 mb-12">
        <InfoItemList />
      </div>
      {/* Email signup section */}
      <div>
        <EmailSignUp />
      </div>
    </div>
  )
}

export default AboutPage
