import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { forgetPasswordScheme } from '../validations/forgetPassword'
import resetPasswordByEmail from '../services/auth/forgetPassword'
import Button from '../components/button'
import Icon from '../helper/icon'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'

function ForgetPassword() {
  // Error from firebase
  const [notify, setNotify] = useState('')

  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(forgetPasswordScheme) })

  // Handle data that get from form
  const handleDataForm = (data) => {
    resetPasswordByEmail(data.email)
      .then((mes) => {
        setNotify({
          type: 'success',
          content: mes
        })
      })
      .catch((e) => {
        setNotify({
          type: 'error',
          content: e
        })
      })
  }

  return (
    <div className="flex justify-center tablet:justify-start laptop:justify-start mt-4 mx-6 gap-8 laptop:gap-16 tablet:mx-0 laptop:mx-0">
      <section className="hidden tablet:block table:basis-3/5 laptop:basis-3/5">
        <img
          className="w-full h-full object-cover"
          src={WhiteRoomImg}
          alt="Ảnh nội thất"
        />
      </section>
      <section className="max-w-sm mb-7 flex-1 tablet:pr-8 table:basis-2/5 laptop:basis-2/5">
        {/* Greeting go here */}
        <h1 className="text-h1 my-2 ">Forget password?</h1>
        <p className="text-body-md text-border_dark">
          You're Never Alone with a Forget password.
        </p>

        {/* Notify message */}
        {notify.type === 'error' && (
          <div className="mt-10 flex p-2 rounded border border-solid border-red-200">
            <span className="text-red-500">
              <Icon icon="close_24" />
            </span>
            <span className="ml-2 text-h6 self-center">{notify.content}</span>
          </div>
        )}

        {notify.type === 'success' && (
          <div className="mt-10 flex p-2 rounded border border-solid border-green-500">
            <span className="text-green-500">
              <Icon icon="checkmark_24" />
            </span>
            <span className="ml-2 text-h6 self-center">{notify.content}</span>
          </div>
        )}

        {/* Form Sign In */}
        <form
          noValidate
          className="mt-10"
          onSubmit={handleSubmit(handleDataForm)}
        >
          {/* Email */}
          <label className="mt-5 block">
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="text"
              placeholder="Enter your email*"
              {...register('email')}
            />
            <p className="text-body-sm text-red-700">{errors.email?.message}</p>
          </label>

          {/* Another */}
          <p className="text-h6 mt-12 text-gray-500 font-normal">
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
          <Link to="/signin" className="text-dark_primary">
            <u>Back to login</u>
          </Link>
        </p>
      </section>
    </div>
  )
}

export default ForgetPassword
