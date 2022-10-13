import { Helmet } from 'react-helmet-async'
import Button from '../button'
const colors = {
  dark: ['bg-[rgba(255,255,255,0.15)]', 'white'],
  light: ['bg-light_grey', 'primary']
}

function Profile({ Color = 'light' }) {
  return (
    // Title
    <div className="flex-row px-6 laptop:w-full">
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className="border-b-2 border-primary-300 mb-5">
        <div className="laptop:text-h4">Personal information</div>
        <div className="text-body-sm laptop:text-body-md laptop:mb-2">
          Manage personal information to secure your account
        </div>
      </div>

      <div className="flex">
        <div className="grid grid-cols-2">
          {/* All labels fields */}
          <div className="flex flex-col gap-3 justifu">
            <label className="pr-5">Username</label>
            <label className="pr-5">Email</label>
            <label className="pr-5">Mobile phone</label>
            <label className="pr-5">Gender</label>
            <label className="pr-5">Day of birth</label>
          </div>

          {/* All input fields */}
          <div className="flex flex-col gap-3">
            {/* Username input */}
            <input
              placeholder="Username"
              className={`${colors[Color][0]}  pl-5 overflow-auto`}
            />
            {/* Email input  */}
            <input
              placeholder="your@email.com"
              className={`${colors[Color][0]} pl-5 overflow-auto`}
            />
            {/* Mobile phone input */}
            <input
              placeholder="mobile phone"
              className={`${colors[Color][0]} pl-5 overflow-auto`}
            />
            {/* Genders radio options */}
            <div className="flex gap-3">
              {/* Male */}
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className=" bg-gray-100 focus:ring-primary text-primary"
                />
                <span className="ml-2">Male</span>
              </label>
              {/* Female */}
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="bg-gray-100 focus:ring-primary text-primary"
                />
                <span className="ml-2">Female</span>
              </label>
              {/* Other */}
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className=" bg-gray-100 focus:ring-primary text-primary"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>

            {/* Date of birth */}

            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                datepicker
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
        {/* Edit profile image */}
        <div></div>
      </div>
      <div className="flex w-full laptop:w-1/6 laptop:mt- mobile:mb-16 mt-16">
        <Button Size="medium" Color="primary" State="default">
          Save
        </Button>
      </div>
    </div>
  )
}

export default Profile
