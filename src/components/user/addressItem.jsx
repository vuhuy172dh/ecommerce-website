import Button from "../button"

function AddressItem({Name = "", PhoneNumber = "", Address = "", Default = false }) {
    return (
        <div className="border-b-2 border-border_dark py-5">
            <div className="flex justify-between items-center">
                {/* info contact*/}
                <div>
                    <div className="flex items-center min-h-[56px]">
                        <p className="min-w-[200px] text-right mr-8 text-border_dark">Họ và tên:</p>
                        <p className="text-primary tracking-widest">{Name}</p>
                        { Default && <div className="ml-8"><Button Color="primary">Địa chỉ giao hàng</Button></div> }
                    </div>
                    <div className="flex items-center min-h-[56px]">
                        <p className="min-w-[200px] text-right mr-8 text-border_dark">Số điện thoại:</p>
                        <p className="text-primary tracking-widest">{PhoneNumber}</p>
                    </div>
                </div>
                {/* control button*/}
                <div className="">
                    <Button>Xóa</Button>
                    <Button>Sửa</Button>
                </div>
            </div>
            {/* info address */}
            <div className="flex items-center">
                <p className="min-w-[200px] text-right mr-8 text-border_dark">Địa chỉ:</p>
                <p className="max-w-[50%] text-primary tracking-widest">{Address}</p>
                <div className="ml-auto"><Button Color="primary" State={Default ? "disable" : "default"}>Chọn làm địa chỉ giao hàng</Button></div>
            </div>
        </div>
    )
}

export default AddressItem