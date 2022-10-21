import { Helmet } from 'react-helmet-async'
import Button from '../../components/button'
import CeilingLamp from '../../assets/images/CeilingLamp.png'
import Controller from '../../components/popup/controller'
import Input from '../../components/popup/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import UserInformationSchema from '../../validations/userInformation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getInformation,
  selectStatus,
  selectUserName,
  selectUserEmail,
  selectUserPhone,
  selectUserGender,
  selectUserUid,
  selectUserBirth,
  setActiveUser,
  selectUserAddressDefault
} from '../../redux/features/userSlice'
import { updateOneUser } from '../../services/user'
import RadioInput from '../../components/popup/radio'

function Profile() {
  //create form hook
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      gender: '',
      birth: ''
    },
    resolver: yupResolver(UserInformationSchema)
  })

  const dispatch = useDispatch()
  const userUid = useSelector(selectUserUid)
  const userFullname = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)
  const userPhone = useSelector(selectUserPhone)
  const userGender = useSelector(selectUserGender)
  const userBirth = useSelector(selectUserBirth)
  const userAddressDefault = useSelector(selectUserAddressDefault)

  useEffect(() => {
    if (userUid) {
      dispatch(getInformation(userUid))
    }
  }, [])

  //set default value for form field
  useEffect(() => {
    if (userFullname) setValue('fullname', userFullname)
    if (userEmail) setValue('email', userEmail)
    if (userPhone) setValue('phone', userPhone)
    if (userGender) setValue('gender', userGender)
    if (userBirth) setValue('birth', userBirth)
  }, [userFullname, userEmail, userPhone, userGender, userBirth])

  //update address on firebase and redux store
  const onSubmit = async (data) => {
    dispatch(
      setActiveUser({
        fullname: data.fullname,
        phone: data.phone,
        gender: data.gender,
        email: data.email
      })
    )

    console.log(userUid)
    await updateOneUser({
      uuid: userUid,
      email: data.email,
      phone: data.phone,
      fullname: data.fullname,
      birth: data.birth,
      gender: data.gender,
      addr_default: userAddressDefault
    })
      .then((res) => alert(res))
      .catch((e) => console.log(e))
  }
  return (
    <div className="flex-row px-6 pb-14 mb-8 laptop:w-full bg-border_grey dark:bg-secondary dark:text-white rounded-tl-lg rounded-bl-lg shadow-md shadow-black/40 dark:shadow-light_grey/30">
      {/*Helmet async*/}
      <Helmet>
        <title>Profile</title>
      </Helmet>

      {/*title*/}
      <div className="mb-5">
        <div className="laptop:text-h4">Personal information</div>
        <div className="text-body-sm laptop:text-body-md laptop:mb-2">
          Manage personal information to secure your account
        </div>
      </div>

      <hr className="w-full border-t border-t-border_dark mb-8" />

      {/*body*/}
      <div className="w-full flex columns-2">
        {/*form*/}
        <form
          className="flex flex-1 flex-col items-start gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/*User name*/}
          <label className="flex items-center">
            <p className="w-32">Username</p>
            <Controller
              {...{
                control,
                register,
                name: 'fullname',
                type: 'text',
                placeholder: 'username',
                className: 'py-2 px-2 dark:bg-light_grey/40 rounded-md',
                handleChange: () => {},
                render: (props) => <Input {...props} />
              }}
            />
            <p className="text-red-600">{errors.fullname?.message}</p>
          </label>

          {/*Email*/}
          <label className="flex items-center">
            <p className="w-32">Email</p>
            <Controller
              {...{
                control,
                register,
                name: 'email',
                type: 'email',
                placeholder: 'email',
                className: 'py-2 px-2 dark:bg-light_grey/40 rounded-md',
                handleChange: () => {},
                render: (props) => <Input {...props} />
              }}
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </label>

          {/*Email*/}
          <label className="flex items-center">
            <p className="w-32">Phone</p>
            <Controller
              {...{
                control,
                register,
                name: 'phone',
                type: 'text',
                placeholder: 'phone',
                className: 'py-2 px-2 dark:bg-light_grey/40 rounded-md',
                handleChange: () => {},
                render: (props) => <Input {...props} />
              }}
            />
            <p className="text-red-600">{errors.phone?.message}</p>
          </label>

          {/*gender*/}
          <label className="flex items-center py-2">
            <p className="w-32">Gender</p>
            <div aria-label="gender" className="flex gap-4">
              {/* Male */}
              <label className="inline-flex items-center">
                <Controller
                  {...{
                    control,
                    register,
                    name: 'gender',
                    type: 'radio',
                    radioValue: 'male',
                    handleChange: () => {},
                    render: (props) => <RadioInput {...props} />
                  }}
                />
                <span className="ml-2">Male</span>
              </label>
              {/* Female */}
              <label className="inline-flex items-center">
                <Controller
                  {...{
                    control,
                    register,
                    name: 'gender',
                    type: 'radio',
                    radioValue: 'female',
                    handleChange: () => {},
                    render: (props) => <RadioInput {...props} />
                  }}
                />
                <span className="ml-2">Female</span>
              </label>
              {/* Other */}
              <label className="inline-flex items-center">
                <Controller
                  {...{
                    control,
                    register,
                    name: 'gender',
                    type: 'radio',
                    radioValue: 'other',
                    handleChange: () => {},
                    render: (props) => <RadioInput {...props} />
                  }}
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
            <p className="text-red-600">{errors.birth?.message}</p>
          </label>

          {/*Date of birth*/}
          <label className="flex items-center">
            <p className="w-32">Date of birth</p>
            <Controller
              {...{
                control,
                register,
                name: 'birth',
                type: 'date',
                className: 'py-2 px-2 dark:bg-light_grey/40 rounded-md',
                handleChange: () => {},
                render: (props) => <Input {...props} />
              }}
            />
            <p className="text-red-600">{errors.birth?.message}</p>
          </label>

          <div className="w-full flex">
            <Button>Update</Button>
          </div>
        </form>

        {/*Change Avatar*/}
        <div className="flex-col flex-1 hidden laptop:flex items-center justify-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img src={CeilingLamp} alt="avatar" className="w-full h-full" />
          </div>

          <div className="w-fit h-fit">
            <Button>Browse</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
