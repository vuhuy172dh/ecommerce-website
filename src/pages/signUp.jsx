import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import signUpWithEmailAndPassword from '../services/auth/signup'
import Button from '../components/button'
import { signupScheme } from '../validations/signup'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'

function SignUp() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(signupScheme) })

  // Handle data that get from form
  const handleDataForm = (data) => {
    // Get fullname, email, password
    const { fullname, email, password } = data

    signUpWithEmailAndPassword(fullname, email, password)
    // Set global state
    // Sau khi thành công thì direct đến home page
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
        <h1 className="text-h1 my-2 ">Hello</h1>
        <p className="text-body-md text-border_dark">
          Sign up - once you have it, you love it.
        </p>

        {/* Form Sign up */}
        {/* "handleSubmit" will validate inputs before invoking "onSubmit" */}
        <form
          noValidate
          className="mt-10"
          onSubmit={handleSubmit(handleDataForm)}
        >
          {/* Fullname */}
          <label className="block">
            <h5 className="font-medium text-h5">Fullname</h5>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="text"
              placeholder="Enter your fullname*"
              {...register('fullname')}
            />
            <p className="text-body-sm text-red-700">
              {errors.fullname?.message}
            </p>
          </label>
          {/* Email */}
          <label className="mt-5 block">
            <h5 className="font-medium text-h5">Email</h5>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="email"
              placeholder="Enter your email*"
              {...register('email')}
            />
            <p className="text-body-sm text-red-700">{errors.email?.message}</p>
          </label>
          {/* Password */}
          <label className="mt-5 block">
            <h5 className="font-medium text-h5">Password</h5>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="password"
              placeholder="Create password*"
              {...register('password')}
            />
            <p className="text-body-sm text-red-700">
              {errors.password?.message}
            </p>
          </label>
          <div className="mt-5 flex rounded overflow-hidden">
            <Button Color="primary" Size="small">
              Sign up
            </Button>
          </div>
        </form>

        {/* Direct sign in page */}
        <p className="text-h6 mt-6 text-center text-gray-500 font-normal">
          Already a member? &nbsp;
          <Link to="/signin">
            <u className="text-dark_primary">Sign in</u>
          </Link>
        </p>
      </section>
    </div>
  )
}

export default SignUp
