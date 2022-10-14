import AddressList from './addressList'
import Button from '../button'
import PopupAddress from '../popup/popupAddress'
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
      <div className="px-4 bg-white py-5 laptop:px-10">
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
            <Button Color="primary" onClick={() => setPopupAddress(true)}>
              New Address
            </Button>
          </div>
        </header>
        <div>
          <AddressList addressList={addressList} />
        </div>
      </div>
      {popupAddress && <PopupAddress onBack={() => setPopupAddress(false)} />}
    </>
  )
}

export default Address
