import  {useState} from 'react'

import Button from "../button"
import PopupConfirm from "../popup/popupConfirm"
import PopupAddress from "../popup/popupAddress"


function AddressItem({address}) {

    const [popupDelete, setPopupDelete] = useState(false);
    const [popupUpdate, setPopupUpdate] = useState(false);
    const [popupDefaultAddress, setPopupDefaultAddress] = useState(false);

    const addressDefault = `${address.Ward}, ${address.District}, ${address.Province}`

    const handleConfirmAddressDefault = () =>{
        // hanlde set default address here
        console.log('confirm default address')
    }

    const handleDeleteAddress = () => {
        // handle delete address
        console.log('delete address')
    }

    return (
        <div className="border-b-2 border-border_dark py-5">
            <div className="flex justify-between items-center">
                {/* info contact*/}
                <div>
                    <div className="flex items-center min-h-[56px]">
                        <p className="min-w-[200px] text-right mr-8 text-border_dark">Họ và tên:</p>
                        <p className="text-primary tracking-widest">{address.Name}</p>
                        { address.Default && <div className="ml-8"><Button Color="primary">Địa chỉ giao hàng</Button></div> }
                    </div>
                    <div className="flex items-center min-h-[56px]">
                        <p className="min-w-[200px] text-right mr-8 text-border_dark">Số điện thoại:</p>
                        <p className="text-primary tracking-widest">{address.PhoneNumber}</p>
                    </div>
                </div>
                {/* control button*/}
                <div className="">
                    <Button onClick={() => setPopupDelete(true)}>Xóa</Button>
                    <Button onClick = {() => setPopupUpdate(true)}>Sửa</Button>
                </div>
            </div>
            {/* info address */}
            <div className="flex items-center min-h-[56px]">
                <p className="min-w-[200px] text-right mr-8 text-border_dark">Địa chỉ:</p>
                <p className="max-w-[50%] text-primary tracking-widest">{addressDefault}</p>
            </div>
            <div className="flex items-center">
                <p className="min-w-[200px] text-right mr-8 text-border_dark">Chi tiết:</p>
                <p className="max-w-[50%] text-primary tracking-widest">{address.Address}</p>
                <div className="ml-auto"><Button Color="primary" State={address.Default ? "disable" : "default"} onClick={address.Default ? ()=>{} : () => setPopupDefaultAddress(true)}>Chọn làm địa chỉ giao hàng</Button></div>
            </div>

            {/* Popup confirm delete */}
            { popupDelete && <PopupConfirm 
                Title='Xác nhận xóa địa chỉ giao hàng' 
                Content='Bạn có chắc chắn xóa địa chỉ này?' 
                onBack = {() => setPopupDelete(false)} 
                onConfirm={handleDeleteAddress}/>
            }

            {/* Popup update address */}
            { popupUpdate && <PopupAddress type='update' address={address} onBack = {()=>setPopupUpdate(false)}/>}
            
            {/* Popup confirm set address default */}
            { popupDefaultAddress && <PopupConfirm 
                Title='Xác nhận chọn địa chỉ giao hàng' 
                Content='Bạn có chắc chắn chọn địa chỉ này làm mặc định?' 
                onBack = {() => setPopupDefaultAddress(false)} 
                onConfirm={handleConfirmAddressDefault}/>
            }
        </div>
    )
}

export default AddressItem