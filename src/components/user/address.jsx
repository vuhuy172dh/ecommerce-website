  import AddressList from "./addressList"
  import Button from "../button"
  import PopupAddress from "../popup/popupAddress"
import { useState } from "react"

  const addressList = [
    {
      id: 1,
      name: "Hoàng Văn Phúc",
      phoneNumber:"0123321760",
      address:"Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh",
      default: true,
      province: "Bình Định",
      district: "Quy Nhơn",
      ward: "Trần Phú"
    },
    {
      id: 2,
      name: "Hoàng Văn Phúc",
      phoneNumber:"0123321760",
      address:"Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh",
      default: false,
      province: "Bình Định",
      district: "Quy Nhơn",
      ward: "Trần Phú"
    },
    {
      id: 3,
      name: "Hoàng Văn Phúc",
      phoneNumber:"0123321760",
      address:"Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh",
      default: false,
      province: "Bình Định",
      district: "Quy Nhơn",
      ward: "Trần Phú"
    }
  ]

  function Address() {

    const [popupAddress, setPopupAddress] = useState(false);

    return (
      <>
        <div className="bg-white py-5 px-10">
          <header className="flex justify-between items-center border-b-2 border-primary pb-3">
            <div>
              <h3 className="text-body-lg font-semibold text-dark_primary">Địa chỉ giao hàng</h3>
              <p className="text-body-md text-border_dark">Quản lý địa chỉ giao hàng của bạn</p>
            </div>
            <div className="max-w-sm"><Button Color="primary" onClick={()=>setPopupAddress(true)}>Thêm địa chỉ</Button></div>
          </header>
          <div>
            <AddressList addressList={addressList}/>
          </div>
        </div>
        {
          popupAddress && <PopupAddress onBack={()=>setPopupAddress(false)}/>
        }
      </>
    )
  }

  export default Address
