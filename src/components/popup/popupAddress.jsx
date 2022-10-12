import Popup from "./popup"
import Button from "../button"
import PopupStatus from "../popup/popupStatus"
import { useEffect, useState } from "react"

function PopupAddress ({type = "create", address, onBack = () => {}}) {

  const provinceAPI = 'https://provinces.open-api.vn/api/'

  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [isProvinceSelected, setIsProvinceSelected] = useState(false)
  const [isDistrictSelected, setIsDistrictSelected] = useState(false)
  const [isWardSelected, setIsWardSelected] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [newAddress, setNewAddress] = useState({
    Name: '',
    PhoneNumber: '',
    Address: '',
    Province: '',
    District: '',
    Ward: ''
  })

  useEffect(() => {
    getProvince();
    if(type === 'update'){
      setNewAddress({
        ...newAddress,
        Name: address.Name,
        PhoneNumber: address.PhoneNumber
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // get Province:
  const getProvince = async () => {
    fetch(provinceAPI)
    .then(res => res.json())
    .then(res => setProvince(res))
    .catch(err => console.log(err))
  }

  // get District:
  const getDistrict = async provinceCode => {
    fetch(`${provinceAPI}p/${provinceCode}/?depth=2`)
    .then(res => res.json())
    .then(res => setDistrict(res.districts))
    .catch(err => console.log(err))
  }

  // get Ward:
  const getWard = async districtCode => {
    fetch(`${provinceAPI}d/${districtCode}/?depth=2`)
    .then(res => res.json())
    .then(res => setWard(res.wards))
    .catch(err => console.log(err))
  }

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    if(key === 'province'){
      setNewAddress({
        ...newAddress,
        Province: e.target.options[e.target.selectedIndex].text,
        District: '',
        Ward: ''
      })
      setIsDistrictSelected(false)
      setIsWardSelected(false)
      getDistrict(value);
    }

    if(key === 'district'){
      setNewAddress({
        ...newAddress,
        District: e.target.options[e.target.selectedIndex].text,
        Ward: ''
      })
      setIsWardSelected(false)
      getWard(value);
    }

    if(key === 'ward')
    {
     setNewAddress({
      ...newAddress,
      Ward: e.target.options[e.target.selectedIndex].text,
     }) 
    }

    if(key === 'name'){
      setNewAddress({
        ...newAddress,
        Name: value
      })
    }

    if(key === 'phone'){
      setNewAddress({
        ...newAddress,
        PhoneNumber: value
      })
    }

    if(key === 'address'){
      setNewAddress({
        ...newAddress,
        Address: value
      })
    }
  }

  // handle add Address
    const handleAddAddress = () => {
      // HANDLE HERE
      setIsSuccess(true)
      setTimeout(()=>{
        setIsSuccess(false)
        onBack()
      }, 2000)

    }
    
    // handle update Address 
    const handleUpdateAddress = () => {  
      // HANDLE HERE
    }

    return(
      <>
        <Popup> 
          <div className="w-full laptop:w-[450px]">
            <h3 className="text-center mb-3 laptop:text-left text-body-lg font-semibold laptop:mb-5">{type === 'create'? 'Địa chỉ mới': 'Sửa địa chỉ'}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input className="border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none" type="text" name="name" placeholder="Họ và tên" value={newAddress.Name} onChange={handleChange} />
                <input className="border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none" type="text" name="phone" placeholder="Số điện thoại" value={newAddress.PhoneNumber} onChange={handleChange}/>
              </div>
  
              <select className={`border border-1 border-primary border-solid w-full h-9 px-2 outline-none ${isProvinceSelected? '' : "text-[#9ca3b7]"}`}
                defaultValue=""
                name="province"  
                onChange={e => handleChange(e)} 
                onClick={()=>setIsProvinceSelected(true)}
              >
                { isProvinceSelected 
                  ? province.map(prv => <option key={prv.code} value={prv.code}>{prv.name}</option>) 
                  : <option value="" disabled hidden>Thêm tỉnh/ thành phố</option> 
                }
              </select>
  
              <select className={`border border-1 border-primary border-solid w-full h-9 px-2 outline-none ${isDistrictSelected && district.length > 0 ?'': "text-[#9ca3b7]"}`} 
                defaultValue=""
                name="district" 
                onChange={e => handleChange(e)}
                onClick={() => setIsDistrictSelected(true)}
              >
                { isDistrictSelected && district.length > 0
                  ? district.map(dst => <option key={dst.code} value={dst.code}>{dst.name}</option>) 
                  : <option value="" disabled hidden>Thêm quận/ huyện</option> }
              </select>
  
              <select className={`border border-1 border-primary border-solid w-full h-9 px-2 outline-none ${isWardSelected && ward.length > 0?'': "text-[#9ca3b7]"}`} 
                defaultValue=""
                name="ward"
                onChange={e => handleChange(e)}
                onClick={() => setIsWardSelected(true)}
                >
                { isWardSelected && ward.length > 0
                  ? ward.map(wd => <option key={wd.code} value={wd.code}>{wd.name}</option>)
                  : <option value="" disabled hidden>Thêm Phường/ xã</option> }
              </select>
  
              <input className="border border-1 border-primary border-solid w-full h-9 px-2 outline-none" type="text" name="address" placeholder="Tên đường/ Số nhà" value={newAddress.Address} onChange={handleChange}/>
              <div className="flex justify-center laptop:justify-end gap-3">
                <div className=""><Button Color="secondary" onClick={() => onBack()}>Trở về</Button></div>
                {
                  type === "create"? (<div><Button Color="primary" onClick={handleAddAddress}>Thêm địa chỉ</Button></div>):('')
                }
                {
                  type === "update"? (<div><Button Color="primary"  onClick={handleUpdateAddress}>Cập nhật</Button></div>):('')
                }
              </div>
            </div>
          </div>
        </Popup>
        {isSuccess && <PopupStatus success>Thêm địa chỉ mới thành công</PopupStatus> }
      </>
    )
}

export default PopupAddress