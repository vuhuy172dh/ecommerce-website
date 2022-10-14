import { Helmet } from 'react-helmet-async'
import Button from '../../components/button'
import CeilingLamp from '../../assets/images/CeilingLamp.png'

function Profile() {
  return (
    <div className="flex-row px-6 pb-14 mb-8 laptop:w-full bg-border_grey dark:bg-secondary dark:text-white rounded-tl-lg rounded-bl-lg shadow-md shadow-black/40 dark:shadow-light_grey/30">
      {/*Helmet async*/}
      <Helmet>
        <title>Profile</title>
      </Helmet>

      {/*title*/}
      <div className="mb-5">
        <div className="laptop:text-h4">Personal information</div>
        <div className="text-body-sm laptop:text-body-md laptop:mb-2">
          Manage personal information to secure your account
        </div>
      </div>

      <hr className="w-full border-t border-t-border_dark mb-8" />

      {/*body*/}
      <div className="w-full flex columns-2">
        {/*form*/}
        <form className="flex flex-1 flex-col items-start gap-6">
          {/*User name*/}
          <label className="flex items-center">
            <p className="w-32">Username</p>
            <input type="text" placeholder="username" className="py-2 px-2" />
          </label>

          {/*Email*/}
          <label className="flex items-center">
            <p className="w-32">Email</p>
            <input type="email" placeholder="email" className="py-2 px-2" />
          </label>

          {/*Email*/}
          <label className="flex items-center">
            <p className="w-32">Phone</p>
            <input type="number" placeholder="phone" className="py-2 px-2" />
          </label>

          {/*gender*/}
          <label className="flex items-center py-2">
            <p className="w-32">Gender</p>
            <div>
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
          </label>

          {/*Date of birth*/}
          <label className="flex items-center">
            <p className="w-32">Date of birth</p>
            <input
              type="date"
              placeholder="date of birth"
              className="py-2 px-2"
            />
          </label>

          <div className="w-full flex">
            <Button>Update</Button>
          </div>
        </form>

        {/*Change Avatar*/}
        <div className="flex flex-col flex-1 items-center justify-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img src={CeilingLamp} alt="avatar" className="w-full h-full" />
          </div>

          <div className="w-fit h-fit">
            <Button>Browse</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
