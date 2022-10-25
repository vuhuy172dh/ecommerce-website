import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'

import { Button } from '../../components/buttons'
import CeilingLamp from '../../assets/images/CeilingLamp.png'
import { Controller, Input, RadioInput } from '../../components/fields'
import UserInformationSchema from '../../validations/userInformation'
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
  selectUserAddressDefault,
  selectUserAvatar
} from '../../redux/features/userSlice'
import { updateOneUser } from '../../services/user'
import createUserImg from '../../services/user/create'

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
  const userAvatar = useSelector(selectUserAvatar)
  const [hover, setHover] = useState(false)

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

    await updateOneUser({
      uid: userUid,
      email: data.email,
      phone: data.phone,
      fullname: data.fullname,
      birth: data.birth,
      gender: data.gender,
      avatar: userAvatar,
      addr_default: userAddressDefault
    })
      .then((res) => toast.success(res))
      .catch((e) => toast.error(e))
  }

  const fileSelectedHandler = () => {
    let input = document.createElement('input')
    const create = async (img) => {
      //upload user avatar to firestore but still not update user avatar in profile
      await createUserImg(img)
        .then((res) => {
          dispatch(setActiveUser({ avatar: res }))
        })
        .catch((e) => console.log(e))

      //update avatar to user profile after upload image
      await updateOneUser({
        uid: userUid,
        email: userEmail,
        phone: userPhone,
        fullname: userFullname,
        birth: userBirth,
        gender: userGender,
        avatar: userAvatar,
        addr_default: userAddressDefault
      })
        .then((res) => toast.success('Update image successfully'))
        .catch((e) => toast.error(e))
    }
    input.type = 'file'

    input.onchange = () => {
      create(input.files[0])
    }

    input.click()
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
                disabled: true,
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
          <div
            className="w-64 h-64 border-[4px] dark:border-border_grey/60 border-secondary/60 rounded-full overflow-hidden cursor-pointer relative"
            onClick={() => fileSelectedHandler()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={userAvatar || CeilingLamp}
              alt="avatar"
              className="w-full h-full object-cover"
            />

            {hover && (
              <div className="w-full h-full flex justify-center items-center bg-light_grey/40 dark:bg-secondary/40 absolute top-0 left-0">
                <FontAwesomeIcon icon={faUserPen} />
              </div>
            )}
          </div>

          {/* <div className="w-fit h-fit">
            <Button
              onClick={() => fileSelectedHandler()}
              Color="primary"
              Custom={true}
              Padding="py-2 px-4"
            >
              Browse
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
