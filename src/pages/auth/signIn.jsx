import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../../components/buttons'
import Icon from '../../helper/icon'
import { signinScheme } from '../../validations/signin'
import {
  signInWithEmailAndPass,
  signInGoogle,
  selectError,
  selectStatus,
  selectUserUid
} from '../../redux/features/userSlice'
import WhiteRoomImg from '../../assets/images/features3.png'
import { PagePreloader } from '../../components/preloader'

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(signinScheme) })

  //declare navigate
  const navigate = useNavigate()

  //create dispatch
  const dispatch = useDispatch()

  //get state
  const error = useSelector(selectError)
  const status = useSelector(selectStatus)
  const userUid = useSelector(selectUserUid)

  //handle submit form
  const submitForm = (data) => {
    dispatch(signInWithEmailAndPass(data.email, data.password))
  }

  //sign in with google
  const signInWithGoogle = () => {
    dispatch(signInGoogle())
  }

  useEffect(() => {
    if (userUid !== null) {
      //when sign in succesfully, get userCart and merge to localCart
      navigate('/')
    }
  }, [userUid])

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
        <Link to="/">
          <p className="w-full text-h2 text-center">Avion</p>
        </Link>

        {/* Form Sign In */}
        <form className="mt-5 px-4" onSubmit={handleSubmit(submitForm)}>
          {/* Email */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-border_dark text-secondary"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
            />
            <p className="text-body-sm text-red-700">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-border_dark text-secondary"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
            <p className="text-body-sm text-red-700">
              {errors.password?.message}
            </p>
          </div>

          {/*show an error when signing in incorrectly*/}
          {error && <p className="text-red-500 text-body-md">{error}</p>}

          {/* Another */}
          <div className="mt-5 flex justify-between">
            {/*<label className="inline-flex">
              <input type="checkbox" name="" id="" />
              <h5 className="text-h6 font-medium self-center ml-2">
                Remember me
              </h5>
            </label>*/}
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
        <div className="flex w-full laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-8 mt-5 px-4">
          <Button Size="small" onClick={signInWithGoogle}>
            <span>
              <Icon icon="google_28" />
            </span>
            <span className="block laptop:hidden">Sign in with Google</span>
            <span className="hidden laptop:block">Google</span>
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

      {status === 'loading' && <PagePreloader />}
    </div>
  )
}

export default SignIn
