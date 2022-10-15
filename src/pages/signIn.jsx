import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import Button from '../components/button'
import Icon from '../helper/icon'
import { signinScheme } from '../validations/signin'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'

function SignIn() {
  let navigate = useNavigate()
  // Error from firebase
  const [error, setError] = useState('')

  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(signinScheme) })

  // Handle data that get from form
  const handleDataForm = (data) => {
    // Get email, password
    const { email, password } = data

    // Call API at here
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        setError(err)
      })

    // Handle set state global
  }

  // Handle sign in with Gooole
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        setError(err)
      })
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center relative">
      {/*Helmet async*/}
      <Helmet>
        <title>Sign In</title>
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

      {/*animated login container for tablet and laptop*/}
      <motion.div
        className="w-full tablet:w-fit tablet:min-w-[25vw] tablet:py-12 tablet:absolute z-20 tablet:bg-white/10 tablet:backdrop-blur-lg tablet:shadow-lg tablet:shadow-black/30 tablet:rounded-2xl"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
      >
        <a href="/">
          <p className="w-full text-h2 text-center">Avion</p>
        </a>

        {/* Form Sign In */}
        <form className="mt-5 px-4" onSubmit={handleSubmit(submitForm)}>
          {/* Email */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-border_dark"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
            />
            <p className="text-body-sm text-red-700">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-border_dark"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
            <p className="text-body-sm text-red-700">
              {errors.password?.message}
            </p>
          </div>

          {/* Another */}
          <div className="mt-5 flex justify-between">
            <label className="inline-flex">
              <input type="checkbox" name="" id="" />
              <h5 className="text-h6 font-medium self-center ml-2">
                Remember me
              </h5>
            </label>
            <span className="text-right">
              <Link
                to="/forgetPassword"
                className="text-h6 font-medium text-primary laptop:text-border_grey"
              >
                Forgot password
              </Link>
            </span>
          </div>
          <div className="mt-4">
            <Button Color="primary" Size="small">
              Sign in
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center mt-6 justify-between">
          <span className="border-t-[0.5px] border-border_grey w-[45%]" />
          <span>or</span>
          <span className="border-t-[0.5px] border-border_grey w-[45%]" />
        </div>

        {/* Sign in with another social media */}
        <div className="flex w-full flex-col gap-3 laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-8 mt-5 px-4">
          <Button Size="small">
            <span>
              <Icon icon="google_28" />
            </span>
            <span className="block laptop:hidden">Sign in with Google</span>
            <span className="hidden laptop:block">Google</span>
          </Button>
          <Button Size="small">
            <span>
              <Icon icon="facebook_28" />
            </span>
            <span className="block laptop:hidden">Sign in with Facebook</span>
            <span className="hidden laptop:block">Facebook</span>
          </Button>
        </div>

        {/* Direct sign up page */}
        <p className="text-h6 mt-6 text-center text-border_dark font-normal">
          Don't have an account? &nbsp;
          <Link to="/signup">
            <u className="text-dark_primary laptop:text-light_grey">Sign up</u>
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

export default SignIn
