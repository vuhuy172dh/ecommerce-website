import AddressList from '../../components/user/addressList'
import Button from '../../components/button'
import PopupAddress from '../../components/popup/popupAddress'
import { useState } from 'react'

const addressList = [
  {
    id: 1,
    name: 'Hoàng Văn Phúc',
    phoneNumber: '0123321760',
    address:
      'Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh',
    default: true,
    province: 'Tỉnh Hà Giang',
    district: 'Huyện Đồng Văn',
    ward: 'Xã Lũng Cú',
    provinceCode: '2',
    districtCode: '26',
    wardCode: '715'
  },
  {
    id: 2,
    name: 'Hoàng Văn Phúc',
    phoneNumber: '0123321760',
    address:
      'Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh',
    default: false,
    province: 'Tỉnh Hà Giang',
    district: 'Huyện Đồng Văn',
    ward: 'Xã Lũng Cú',
    provinceCode: '2',
    districtCode: '26',
    wardCode: '715'
  }
]

function Address() {
  const [popupAddress, setPopupAddress] = useState(false)

  return (
    <>
      <div className="px-6 py-2 my-2 w-full bg-border_grey dark:bg-secondary dark:text-white rounded-tl-lg rounded-bl-lg shadow-md shadow-black/40 dark:shadow-light_grey/30">
        {/*address page header*/}
        <header className="text-center laptop:text-left laptop:flex laptop:justify-between laptop:items-center laptop:border-b-2 border-primary pb-3">
          <div>
            <h3 className="text-body-lg font-semibold text-dark_primary">
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
          <AddressList addressList={addressList} />
        </div>
      </div>
      {popupAddress && <PopupAddress onBack={() => setPopupAddress(false)} />}
    </>
  )
}

export default Address
