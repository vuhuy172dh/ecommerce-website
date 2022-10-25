import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { Button } from '../buttons'
import { PopupConfirm, PopupAddress } from '../popup'
import {
  selectUserAddressDefault,
  selectUserUid,
  setActiveUser
} from '../../redux/features/userSlice'
import {
  deleteAddress,
  getAddressDefault
} from '../../redux/features/address/addressSlice'
import { setAddressDefault } from '../../services/address'

function AddressItem({ address }) {
  const [popupDelete, setPopupDelete] = useState(false)
  const [popupUpdate, setPopupUpdate] = useState(false)
  const [popupDefaultAddress, setPopupDefaultAddress] = useState(false)

  const addressDefault = `${address.Ward}, ${address.District}, ${address.Province}`

  //declare redux and state
  const dispatch = useDispatch()
  const userUid = useSelector(selectUserUid)
  const userAddressDefault = useSelector(selectUserAddressDefault)

  //handle set address default
  const handleConfirmAddressDefault = () => {
    const setDefaul = async () => {
      await setAddressDefault(userUid, address.Id)
        .then((res) => {
          dispatch(setActiveUser({ addr_default: address.Id }))
          dispatch(getAddressDefault(address.Id))
          toast.success(res)
        })
        .catch((e) => alert(e))
    }

    setDefaul()
  }

  //handle delete address
  const handleDeleteAddress = () => {
    // handle delete address
    if (userAddressDefault === address.Id) {
      toast.error('This is address defaul, cant delete')
    } else {
      dispatch(deleteAddress(userUid, address.Id))
    }
  }

  return (
    <div className="mx-2 px-2 flex flex-col justify-start gap-3 laptop:flex-row laptop:justify-between laptop:py-5 laptop:px-0 border-2 border-primary/30 rounded-lg laptop:rounded-none laptop:border-0 laptop:border-b-2 laptop:border-border_dark/50">
      {/*info container*/}
      <div className="w-full flex flex-col gap-1">
        {/* info contact*/}
        <div className="flex w-full gap-4">
          <p className="mt-2 font-semibold laptop:mt-0 text-primary dark:text-light_grey">
            {address.Name}
          </p>

          <p className="mt-2 font-normal laptop:mt-0 text-primary/70 dark:text-border_grey/70">
            {address.PhoneNumber}
          </p>
        </div>

        {/* address */}
        <div className="flex w-full flex-col gap-1">
          <p className="text-primary dark:text-light_grey text-h6">
            {address.Address}
          </p>
          <p className="text-primary dark:text-light_grey text-h6">
            {addressDefault}
          </p>
        </div>
        {address.Default && (
          <div className="px-2 w-fit text-red-600 border border-red-600">
            default
          </div>
        )}
      </div>

      {/* control button*/}
      <div className="flex flex-col items-center">
        <div className="flex gap-2 justify-center">
          <button
            className="px-6 border border-primary/70 dark:border-light_grey/70 rounded-lg text-primary/60 dark:text-light_grey/60 hover:text-primary dark:hover:text-light_grey"
            onClick={() => setPopupUpdate(true)}
          >
            Update
          </button>
          <button
            className="px-6 border border-red-500 rounded-lg text-red-500"
            onClick={() => setPopupDelete(true)}
          >
            Delete
          </button>
        </div>
        <div className="my-2">
          <Button
            Color="primary"
            Custom={true}
            Padding="px-6 py-1"
            State={address.Default ? 'disable' : 'default'}
            onClick={
              address.Default ? () => {} : () => setPopupDefaultAddress(true)
            }
          >
            Set default
          </Button>
        </div>
      </div>

      {/* Popup confirm delete */}
      {popupDelete && (
        <PopupConfirm
          Title="Delete address"
          Content="Are you sure to delete this address?"
          onBack={() => setPopupDelete(false)}
          onConfirm={handleDeleteAddress}
        />
      )}

      {/* Popup update address */}
      {popupUpdate && (
        <PopupAddress
          type="update"
          address={address}
          onBack={() => setPopupUpdate(false)}
        />
      )}

      {/* Popup confirm set address default */}
      {popupDefaultAddress && (
        <PopupConfirm
          Title="Choose default address"
          Content="Are you sure to choose this address as the default?"
          onBack={() => setPopupDefaultAddress(false)}
          onConfirm={handleConfirmAddressDefault}
        />
      )}
    </div>
  )
}

export default AddressItem
