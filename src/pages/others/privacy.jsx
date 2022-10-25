function Privacy() {
  return (
    <div>
      <div className="bg-dark_primary pt-16 pb-20 laptop:pl-24">
        <h2 className="text-white text-h3 text-center laptop:text-left">
          Avion Privacy Policy
        </h2>
        <p className="text-h6 text-gray-500 text-center mt-8 laptop:text-left">
          Last update: February 14, 2022
        </p>
      </div>
      <div className="mb-20 laptop:mx-40 laptop:flex laptop:gap-10">
        <div className="hidden mt-20 laptop:block w-4/12 border-r-2 border-border_dark">
          <ul>
            <li className="hover:font-bold">
              <a
                className="text-h4 text-dark_primary transition-all"
                href="#protectPrivacy"
              >
                How we protect your privacy
              </a>
            </li>
            <li className="mt-5 hover:font-bold">
              <a
                className="text-h4 text-dark_primary transition-all"
                href="#collectInfo"
              >
                Information we collect
              </a>
            </li>
            <li className="mt-5 hover:font-bold">
              <a
                className="text-h4 text-dark_primary transition-all"
                href="#security"
              >
                Security
              </a>
            </li>
            <li className="mt-5 hover:font-bold">
              <a
                className="text-h4 text-dark_primary transition-all"
                href="#policyUpdate"
              >
                Policy Updates
              </a>
            </li>
            <li className="mt-5 hover:font-bold">
              <a
                className="text-h4 text-dark_primary transition-all"
                href="#contactUs"
              >
                Contacting Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-6 laptop:mx-0 mt-20 laptop:w-8/12">
          <div id="protectPrivacy">
            <h3 className="text-h3 font-medium text-dark_primary text-center">
              How we protect your privacy
            </h3>
            <p className="mt-10">
              Avion offer services to help you run your business, including a
              platform to host your own Avion database. As part of running those
              services we collect data about you and your business. This data is
              not only essential to run our services, but also critical for the
              safety of our services and all our users.This policy explains what
              information is collected, why it is collected, and how we use it.
            </p>
          </div>
          <div id="collectInfo" className="mt-20">
            <h3 className="text-h3 font-medium text-dark_primary text-center">
              Information we collect
            </h3>
            <p className="mt-10">
              Most of the personal data we collect is directly provided by our
              users when they register and use our services. Other data is
              collected by recording interactions with our services.
            </p>
            <p className="mt-6">
              <b className="font-medium text-dark_primary">
                Account & Contact Data:{' '}
              </b>
              When you register on our website to use or download one of our
              products, or to subscribe to one of our services, or fill in one
              of our contact forms, you voluntarily give us certain information.
              This typically includes your name, email address, and sometimes
              your phone number, postal address (when an invoice or delivery is
              required),your business sector and interest in Avion, as well as a
              personal password.
            </p>
            <p className="mt-6">
              <b className="font-medium text-dark_primary">
                Job Application Data:{' '}
              </b>
              When you apply for a job on our website or via an employment
              agency, we usually collect your contact information (name, email,
              phone) and any information you choose to share with us in your
              introduction letter and Curriculum Vitae. If we decide to send you
              a job proposition, we will also ask you to provide extra personal
              details as required to fulfill our legal obligations and personnel
              management requirements.We will not ask you to provide information
              that is not necessary for the recruitment process. In particular,
              we will never collect any information about your racial or ethnic
              origin, political opinions, religious beliefs, trade union
              membership or sexual life.
            </p>
            <p className="mt-6">
              <b className="font-medium text-dark_primary">Browser Data: </b>
              When you visit our website and access our online services, we
              detect and store your browser language and geolocation in order to
              customize your experience according to your country and preferred
              language. Our servers also passively record a summary of the
              information sent by your browser for statistical, security and
              legal purposes: your IP address, the time and date of your visit,
              your browser version and platform, and the web page that referred
              you to our website.
            </p>
            <p className="mt-6">
              <b className="font-medium text-dark_primary">
                Customer Databases:{' '}
              </b>
              When you subscribe to an Avion Cloud service and create your own
              Avion database (for example by starting a Free Trial), any
              information or content you submit or upload into your database is
              your own, and you control it fully.
            </p>
          </div>
          <div id="security" className="mt-20">
            <h3 className="text-h3 font-medium text-dark_primary text-center">
              Security
            </h3>
            <p className="mt-10">
              We realize how important and sensitive your personal data is, and
              we take a great number of measures to ensure that this information
              is securely processed, stored and preserved from data loss and
              unauthorized access. Our technical, administrative and
              organizational security measures are described in details in our
              Security Policy.
            </p>
          </div>
          <div id="policyUpdate" className="mt-20">
            <h3 className="text-h3 font-medium text-dark_primary text-center">
              Policy Updates
            </h3>
            <p className="mt-10">
              We may update this Privacy Policy from time to time, in order to
              clarify it, to reflect any changes to our website, or to comply
              with legal obligations. The "Last Updated" mention at the top of
              the policy indicates the last revision, which is also the
              effective date of those changes. We give you access to archived
              versions of this policy, so you can review the changes.
            </p>
          </div>
          <div id="contactUs" className="mt-20 transition-all">
            <h3 className="text-h3 font-medium text-dark_primary text-center">
              Contacting Us
            </h3>
            <p className="mt-10">
              If you have are any question regarding this Privacy Policy, or any
              enquiry about your personal data,please reach out to the Avion
              Helpdesk or contact us via email at ContactUs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
