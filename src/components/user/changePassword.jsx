import Button from '../button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { changePasswordScheme } from '../../validations/changePassword'
import { Helmet } from 'react-helmet-async'

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(changePasswordScheme)
  })

  const submit = (data) => {
    console.log(data)
  }
  return (
    <div className="w-full px-6 flex flex-col">
      {/*Helmet async*/}
      <Helmet>
        <title>Change Password</title>
      </Helmet>

      <div className="flex flex-col items-start">
        <p className="text-h4">Change Password</p>
        <p className="text-body-sm">
          Please update your password regularly to protect your account
        </p>
      </div>

      <hr className="w-full border-t border-t-border_dark my-5 tablet:my-10" />

      <form
        className="w-full flex flex-col items-center gap-6"
        onSubmit={handleSubmit(submit)}
      >
        <label>
          <p>Current Password</p>
          <input
            type="password"
            className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
            {...register('currentPassword')}
          />
          <p>{errors.currentPassword?.message}</p>
        </label>

        <label>
          <p>New Password</p>
          <input
            type="password"
            className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
            {...register('newPassword')}
          />
          <p>{errors.newPassword?.message}</p>
        </label>

        <label>
          <p>New Password</p>
          <input
            type="password"
            className="block w-full mt-2 px-4 py-3 rounded border border-solid border-border_dark"
            {...register('confirmPassword')}
          />
          <p>{errors.confirmPassword?.message}</p>
        </label>

        <Button Color="primary">Change</Button>
      </form>
    </div>
  )
}

export default ChangePassword
