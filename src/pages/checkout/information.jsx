import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectUserAddressDefault,
  selectUserEmail,
  selectUserUid
} from '../../redux/features/userSlice'
import {
  selectAddressList,
  selectStatus,
  getAddressList
} from '../../redux/features/address/addressSlice'
import { addContact } from '../../redux/features/bills/billSlice'
import { setStep } from '../../redux/features/stepper/stepperSlice'
import Controller from '../../components/popup/controller'
import Input from '../../components/popup/input'
import EmailSchema from '../../validations/email'
import AddressList from '../../components/user/addressList'
import { useEffect } from 'react'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'

function CheckoutInformation() {
  const userEmail = useSelector(selectUserEmail)
  const addressList = useSelector(selectAddressList)
  const addressStatus = useSelector(selectStatus)
  const userUid = useSelector(selectUserUid)
  const userAddressDefault = useSelector(selectUserAddressDefault)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAddressList(userUid))
  }, [])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: { email: userEmail || '' },
    resolver: yupResolver(EmailSchema)
  })

  //handle email field and address
  const onSubmit = (data) => {
    //add email to bill
    console.log(data.email)
    dispatch(addContact(data.email))
    //add address to bill

    dispatch(setStep(2))
    navigate('/user/checkout/shipping')
  }

  const backTo = () => {
    navigate('/productCart')
  }
  return (
    <div className="w-full flex flex-col gap-7">
      {/*contact information*/}
      <div className="w-full flex flex-col gap-2 text-light_grey">
        <p className="text-h4">Contact information</p>

        <form
          id="email-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1"
        >
          <Controller
            {...{
              control,
              register,
              name: 'email',
              rules: {},
              type: 'email',
              placeholder: 'your email',
              handleChange: () => {},
              className: 'w-full p-2 rounded-lg bg-border_dark/50',
              render: (props) => <Input {...props} />
            }}
          />
          <p className="text-red-400">{errors.email?.message}</p>
        </form>
      </div>

      {/*Shipping Address*/}
      <div className="text-light_grey flex flex-col">
        <p className="text-h4">Shipping Address</p>

        {addressStatus === 'idle' ? (
          <AddressList
            addressList={addressList}
            addressDefault={userAddressDefault}
          />
        ) : (
          <div>Loading....</div>
        )}
      </div>

      {/*button to set current step and check email validation*/}
      <div className="flex flex-col-reverse gap-3 tablet:flex-row">
        <div>
          <Button Color="opaque" onClick={backTo}>
            Back to Cart
          </Button>
        </div>
        <Button Color="primary" Form="email-form">
          Continue to Shipping
        </Button>
      </div>
    </div>
  )
}

export default CheckoutInformation
