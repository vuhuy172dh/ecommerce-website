import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { forgetPasswordScheme } from '../../validations/forgetPassword'
import { Button } from '../../components/buttons'
import { resetPasswordByEmail } from '../../services/auth'
import WhiteRoomImg from '../../assets/images/features3.png'

function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(forgetPasswordScheme) })

  const handleForgetPass = (data) => {
    resetPasswordByEmail(data.email)
      .then((notify) => alert(notify))
      .catch((e) => alert(e))
  }

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

        {/*notify.type === 'error' && (
          <div className="mt-10 flex p-2 rounded border border-solid border-red-200">
            <span className="text-red-500">
              <Icon icon="close_24" />
            </span>
            <span className="ml-2 text-h6 self-center">{notify.content}</span>
          </div>
        )*/}

        {/*notify.type === 'success' && (
          <div className="mt-10 flex p-2 rounded border border-solid border-green-500">
            <span className="text-green-500">
              <Icon icon="checkmark_24" />
            </span>
            <span className="ml-2 text-h6 self-center">{notify.content}</span>
          </div>
        )*/}

        {/* Form Sign In */}
        <form className="mt-10 px-4" onSubmit={handleSubmit(handleForgetPass)}>
          {/* Email */}
          <label className="mt-5 block">
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark text-secondary"
              type="text"
              placeholder="Enter your email*"
              {...register('email')}
            />
            <p className="text-body-sm text-red-700">{errors.email?.message}</p>
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
