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
        <div className="my-5 mx-2 px-2 laptop:py-5 laptop:px-0 border-2 border-primary laptop:border-0 laptop:border-b-2 laptop:border-border_dark ">
            <div className="flex justify-between items-center">
                {/* info contact*/}
                <div>
                    <div className="laptop:flex items-center laptop:min-h-[56px]">
                        <p className="hidden laptop:block laptop:min-w-[200px] text-right mr-8 text-border_dark">Full name:</p>
                        <p className="mt-2 font-semibold laptop:font-normal laptop:mt-0 text-primary tracking-widest">{address.Name}</p>
                        { address.Default && <div className="hidden laptop:block ml-8"><Button Color="primary">Default address</Button></div> }
                    </div>
                    <div className="flex items-center laptop:min-h-[56px]">
                        <p className="hidden laptop:block laptop:min-w-[200px] text-right mr-8 text-border_dark">Phone number:</p>
                        <p className="mt-2 font-semibold laptop:font-normal laptop:mt-0 text-primary tracking-widest">{address.PhoneNumber}</p>
                    </div>
                </div>
                {/* control button laptop*/}
                <div className="hidden laptop:block">
                    <Button onClick={() => setPopupDelete(true)}>Delete</Button>
                    <Button onClick = {() => setPopupUpdate(true)}>Edit</Button>
                </div>
            </div>
            {/* info address */}
            <div className="flex items-center laptop:min-h-[56px]">
                <p className="hidden laptop:block min-w-[200px] text-right mr-8 text-border_dark">Address:</p>
                <p className="mt-2 laptop:mt-0 laptop:max-w-[50%] text-primary tracking-widest">{addressDefault}</p>
            </div>
            <div className="flex items-center">
                <p className="hidden laptop:block min-w-[200px] text-right mr-8 text-border_dark">Detail address:</p>
                <p className="my-2 laptop:my-0 laptop:max-w-[50%] text-primary tracking-widest">{address.Address}</p>
                <div className="hidden laptop:block ml-auto"><Button Color="primary" State={address.Default ? "disable" : "default"} onClick={address.Default ? ()=>{} : () => setPopupDefaultAddress(true)}>Choose as default</Button></div>
            </div>
            {/* control button mobile*/}
            <div className="flex gap-2 laptop:hidden">
                <Button Color='secondary' onClick={() => setPopupDelete(true)}>Xóa</Button>
                <Button Color='secondary' onClick = {() => setPopupUpdate(true)}>Sửa</Button>
            </div>
            <div className="flex my-2 laptop:hidden"><Button Color="primary" State={address.Default ? "disable" : "default"} onClick={address.Default ? ()=>{} : () => setPopupDefaultAddress(true)}>Chọn làm mặc định</Button></div>

            {/* Popup confirm delete */}
            { popupDelete && <PopupConfirm 
                Title='Delete address' 
                Content='Are you sure to delete this address?' 
                onBack = {() => setPopupDelete(false)} 
                onConfirm={handleDeleteAddress}/>
            }

            {/* Popup update address */}
            { popupUpdate && <PopupAddress type='update' address={address} onBack = {()=>setPopupUpdate(false)}/>}
            
            {/* Popup confirm set address default */}
            { popupDefaultAddress && <PopupConfirm 
                Title='Choose default address' 
                Content='Are you sure to choose this address as the default?' 
                onBack = {() => setPopupDefaultAddress(false)} 
                onConfirm={handleConfirmAddressDefault}/>
            }
        </div>
    )
}

export default AddressItem