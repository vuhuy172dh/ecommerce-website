import Button from '../components/button'

// Sample img
import WhiteRoomImg from '../assets/images/features3.png'

function ForgetPassword() {
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

        {/* Form Sign In */}
        <form className="mt-10">
          {/* Email */}
          <label className="mt-5 block">
            <input
              className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
              type="text"
              placeholder="Enter your email*"
            />
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
          <a href="/signin" className="text-dark_primary">
            <u>Back to login</u>
          </a>
        </p>
      </section>
    </div>
  )
}

export default ForgetPassword
