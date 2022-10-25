import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AddressList } from '../../components/user'
import { Button } from '../../components/buttons'
import PopupAddress from '../../components/popup/popupAddress'
import {
  getAddressList,
  selectError,
  selectStatus,
  selectAddressList,
  getAddressDefault
} from '../../redux/features/address/addressSlice'
import {
  selectUserUid,
  selectUserAddressDefault
} from '../../redux/features/userSlice'

function Address() {
  const [popupAddress, setPopupAddress] = useState(false)
  //declate redux and state
  const dispatch = useDispatch()
  const addressStatus = useSelector(selectStatus)
  const addressList = useSelector(selectAddressList)
  const userUid = useSelector(selectUserUid)
  const userAddressDefault = useSelector(selectUserAddressDefault)

  useEffect(() => {
    dispatch(getAddressList(userUid))
    if (userAddressDefault) dispatch(getAddressDefault(userAddressDefault))
  }, [])

  return (
    <div className="w-full">
      {addressStatus === 'idle' ? (
        <div className="px-6 py-2 my-2 w-full bg-border dark:bg-secondary dark:text-white rounded-tl-lg rounded-bl-lg shadow-md shadow-black/40 dark:shadow-light_grey/30">
          {/*address page header*/}
          <header className="text-center laptop:text-left laptop:flex laptop:justify-between laptop:items-center laptop:border-b-2 border-primary pb-3">
            <div>
              <h3 className="text-body-lg font-semibold text-dark_primary dark:text-light_grey">
                Delivery Address
              </h3>
              <p className="mb-3 laptop:mb-0 text-body-md text-border_dark">
                Manage your shipping address
              </p>
            </div>
            <div className="flex laptop:max-w-sm">
              <Button
                Color="primary"
                Custom={true}
                Padding="px-6"
                onClick={() => setPopupAddress(true)}
              >
                New Address
              </Button>
            </div>
          </header>

          {/*address list*/}
          <div>
            <AddressList
              addressList={addressList}
              addressDefault={userAddressDefault}
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-white/75"></div>
      )}
      {popupAddress && <PopupAddress onBack={() => setPopupAddress(false)} />}
    </div>
  )
}

export default Address
