import Button from '../components/button'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'

function ForgetPassword() {
  return (
    <div className="flex w-screen h-screen justify-center items-center relative">
      {/*Helmet async*/}
      <Helmet>
        <title>Forget Password</title>
      </Helmet>

      {/*Background*/}
      <section className="w-full h-full hidden tablet:block relative z-10">
        <img
          className="w-full h-full object-cover relative z-10"
          src={WhiteRoomImg}
          alt="Ảnh nội thất"
        />
        <div className="w-full h-full block bg-black/60 absolute top-0 z-20"></div>
      </section>

      {/*animated forget password container for tablet and laptop*/}
      <motion.div
        className="w-full tablet:w-fit tablet:min-w-[25vw] tablet:py-12 tablet:absolute z-20 tablet:bg-white/10 tablet:backdrop-blur-lg tablet:shadow-lg tablet:shadow-black/30 tablet:rounded-2xl"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
      >
        {/* Greeting go here */}
        <h1 className="text-h1 text-light_grey text-center my-2 ">
          Forget password?
        </h1>
        <p className="text-body-md text-border_dark text-center">
          You're Never Alone with a Forget password.
        </p>

        {/* Form Sign In */}
        <form className="mt-10 px-4">
          {/* Email */}
          <label className="mt-5 block">
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="text"
              placeholder="Enter your email*"
            />
          </label>

          {/* Another */}
          <p className="text-h6 mt-12 text-border_grey font-normal">
            We will send you a message to set or reset your new password.
          </p>

          <div className="mt-5 flex rounded overflow-hidden">
            <Button Color="primary" Size="small">
              Send code
            </Button>
          </div>
        </form>

        {/* Direct sign in page */}
        <p className="text-h6 mt-6 text-center text-gray-500 font-normal">
          Remembered password? &nbsp;
          <Link to="/signin" className="text-light_grey">
            <u>Back to login</u>
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

export default ForgetPassword
