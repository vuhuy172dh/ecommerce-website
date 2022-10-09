import Popup from "./popup"
import Button from "../button"

function PopupAddress ({type = "create"}) {

    return(
        <Popup> 
        <form className="w-[450px]">
          <h3 className="text-body-lg font-semibold mb-5">Địa chỉ mới</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input className="border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none" type="text" placeholder="Họ và tên"/>
              <input className="border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none" type="text" placeholder="Số điện thoại"/>
            </div>
            <select className="border border-1 border-primary border-solid w-full h-9 px-2 outline-none">
              <option value="75">Thừa Thiên Huế</option>
            </select>
            <select className="border border-1 border-primary border-solid w-full h-9 px-2 outline-none">
              <option value="75">Thừa Thiên Huế</option>
            </select>
            <select className="border border-1 border-primary border-solid w-full h-9 px-2 outline-none">
              <option value="75">Thừa Thiên Huế</option>
            </select>
            <input className="border border-1 border-primary border-solid w-full h-9 px-2 outline-none" type="text" placeholder="Tên đường/ Số nhà"/>
            <div className="flex justify-end gap-3">
              <div className=""><Button Color="secondary">Trở về</Button></div>
              {
                type === "create"? (<div><Button Color="primary">Thêm địa chỉ</Button></div>):('')
              }
              {
                type === "update"? (<div><Button Color="primary">Cập nhật</Button></div>):('')
              }
            </div>
          </div>
          </form>
    </Popup>
    )
}

export default PopupAddress