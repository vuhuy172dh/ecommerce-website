import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '../components/button'
import { signupScheme } from '../validations/signup'
import { motion } from 'framer-motion'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'
import { Helmet } from 'react-helmet-async'

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(signupScheme) })

  const submitForm = (data) => {
    console.log('sign up: ', data)
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center relative">
      {/*Helmet async*/}
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      {/*background*/}
      <section className="w-full h-full hidden tablet:block relative z-10">
        <img
          className="w-full h-full object-cover relative z-10"
          src={WhiteRoomImg}
          alt="Ảnh nội thất"
        />
        <div className="w-full h-full block bg-black/60 absolute top-0 z-20"></div>
      </section>

      {/*sign up*/}
      <motion.div
        className="w-full tablet:w-fit tablet:min-w-[25vw] tablet:py-12 tablet:absolute z-20 tablet:bg-white/10 tablet:backdrop-blur-lg tablet:shadow-lg tablet:shadow-black/30 tablet:rounded-2xl"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <Link to="/">
          <p className="w-full text-h2 text-center">Avion</p>
        </Link>
        {/* Form Sign Un */}
        <form className="mt-5 px-4" onSubmit={handleSubmit(submitForm)}>
          {/* Fullname */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="text"
              placeholder="Enter your fullname*"
              {...register('fullname')}
            />
            <p className="text-body-sm text-red-700">
              {errors.fullname?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="email"
              placeholder="Enter your email*"
              {...register('email')}
            />
            <p className="text-body-sm text-red-700">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="password"
              placeholder="Create password*"
              {...register('password')}
            />
            <p className="text-body-sm text-red-700">
              {errors.password?.message}
            </p>
          </div>
          <div className="mt-5 flex rounded overflow-hidden">
            <Button Color="primary" Size="small">
              Sign up
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center mt-6 justify-between">
          <span className="border-t-[0.5px] border-border_grey w-[45%]" />
          <span>or</span>
          <span className="border-t-[0.5px] border-border_grey w-[45%]" />
        </div>

        {/* Direct sign in page */}
        <p className="text-h6 mt-6 text-center text-border_dark font-normal">
          Already a member? &nbsp;
          <Link to="/signin">
            <u className="text-dark_primary laptop:text-light_grey">Sign in</u>
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

export default SignUp
