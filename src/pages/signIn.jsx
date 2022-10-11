import Button from '../components/button'
import Icon from '../helper/icon'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'

function SignIn() {
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
        <h1 className="text-h1 my-2 ">Welcome back</h1>
        <p className="text-body-md text-border_dark">
          We are so happy to see you again.
        </p>

        {/* Form Sign In */}
        <form className="mt-10">
          {/* Email */}
          <label className="block">
            <h5 className="font-medium text-h5">Email</h5>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="text"
              placeholder="Enter your email"
            />
          </label>

          {/* Password */}
          <label className="mt-5 block">
            <h5 className="font-medium text-h5">Password</h5>
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="password"
              placeholder="Enter your password"
            />
          </label>

          {/* Another */}
          <div className="mt-5 flex justify-between">
            <label className="inline-flex">
              <input type="checkbox" name="" id="" />
              <h5 className="text-h6 font-medium self-center ml-2">
                Remember me
              </h5>
            </label>
            <span className="text-right">
              <a
                href="/forgetPassword"
                className="text-h6 font-medium text-primary"
              >
                Forgot password
              </a>
            </span>
          </div>
          <div className="mt-5 flex rounded overflow-hidden">
            <Button Color="primary" Size="small">
              Sign in
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center mt-6 justify-between">
          <span className="border-t-[0.5px] border-gray-border w-[45%]" />
          <span>or</span>
          <span className="border-t-[0.5px] border-gray-border w-[45%]" />
        </div>

        {/* Sign in with another social media */}
        <div className="mt-5 flex rounded overflow-hidden border border-solid border-border_dark">
          <Button Size="small">
            <span>
              <Icon icon="google_28" />
            </span>
            Sign in with Google
          </Button>
        </div>
        <div className="mt-5 flex rounded overflow-hidden border border-solid border-border_dark">
          <Button Size="small">
            <span>
              <Icon icon="facebook_28" />
            </span>
            Sign in with Facebook
          </Button>
        </div>

        {/* Direct sign up page */}
        <p className="text-h6 mt-6 text-center text-gray-500 font-normal">
          Don't have an account? &nbsp;
          <a href="/signup" className="text-dark_primary">
            <u>Sign up</u>
          </a>
        </p>
      </section>
    </div>
  )
}

export default SignIn
