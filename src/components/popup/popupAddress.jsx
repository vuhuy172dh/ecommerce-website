import Popup from "./popup"
import Button from "../button"
import PopupStatus from "../popup/popupStatus"
import { useEffect, useState } from "react"

import {useForm} from "react-hook-form" 
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  fullname: yup.string().required('Name should be required please'),
  phone: yup.string().required('Phone should be required please'),
  province: yup.string().required('Province is required'),
  district: yup.string().required('District is required'),
  ward: yup.string().required('Ward  is required'),
  address: yup.string().required('Address should be required please.')
})


function PopupAddress ({type = "create", address, onBack = () => {}}) {

  const provinceAPI = 'https://provinces.open-api.vn/api/'

  // declare useForm validation:
  const {
    register,
    handleSubmit,
    clearErrors, 
    formState: {errors}
  } = useForm({ resolver: yupResolver(schema) })

  // Create register:
  const fullname = register('fullname');
  const phone = register('phone');
  const provinceName = register('province')
  const districtName = register('district')
  const wardName = register('ward')
  const addressDetail = register('address')

  // Create useState:
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [isProvinceSelected, setIsProvinceSelected] = useState(false)
  const [isDistrictSelected, setIsDistrictSelected] = useState(false)
  const [isWardSelected, setIsWardSelected] = useState(false)
  // const [isSuccess, setIsSuccess] = useState(false)

  const [newAddress, setNewAddress] = useState({
    Name: '',
    PhoneNumber: '',
    Address: '',
    Province: '',
    District: '',
    Ward: '',
    ProvinceCode: '',
    DistrictCode: '',
    WardCode: ''
  })


  useEffect(() => {
    getProvince();
    if(type === 'update'){
      clearErrors()
      setNewAddress({
        ...newAddress,
        Name: address.Name,
        PhoneNumber: address.PhoneNumber,
        Province: address.Province,
        ProvinceCode: address.ProvinceCode,
        District: address.District,
        DistrictCode: address.DistrictCode,
        Ward: address.Ward,
        WardCode: address.WardCode,
        Address: address.Address
      })
      getDistrict(address.ProvinceCode);
      getWard(address.DistrictCode);
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

  // Handle change input field:
  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    if(key === 'province'){
      setNewAddress({
        ...newAddress,
        Province: e.target.options[e.target.selectedIndex].text,
        ProvinceCode: value,
        District: '',
        DistrictCode: '',
        Ward: '',
        WardCode: ''
      })
      setIsDistrictSelected(false)
      setIsWardSelected(false)
      getDistrict(value);
    }

    if(key === 'district'){
      setNewAddress({
        ...newAddress,
        District: e.target.options[e.target.selectedIndex].text,
        DistrictCode: value,
        Ward: '',
        WardCode: ''
      })
      setIsWardSelected(false)
      getWard(value);
    }

    if(key === 'ward')
    {
     setNewAddress({
      ...newAddress,
      Ward: e.target.options[e.target.selectedIndex].text,
      WardCode: value
     }) 
    }

    if(key === 'fullname'){
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
  const handleAddAddress = (data) => {
    // HANDLE HERE
    // setIsSuccess(true)
    // setTimeout(()=>{
    //   setIsSuccess(false)
    //   onBack()
    // }, 2000)

  }
    
    // handle update Address 
  const handleUpdateAddress = (data) => {  
    // HANDLE HERE
    console.log('data save to DB: ')
    console.log((newAddress));
  }


  return(
    <>
      <Popup> 
        <form className="w-full laptop:w-[450px]" onSubmit={handleSubmit(handleUpdateAddress)}>
          <h3 className="text-center mb-3 laptop:text-left text-body-lg font-semibold laptop:mb-5">{type === 'create'? 'Địa chỉ mới': 'Sửa địa chỉ'}</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input className="border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none" 
                type="text"
                name="fullname" 
                placeholder="Họ và tên" 
                value={newAddress.Name}
                {...fullname} 
                onChange={e => {fullname.onChange(e); handleChange(e)}}
              />

              <input className="border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none" 
                type="text" 
                name="phone" 
                value={newAddress.PhoneNumber}
                placeholder="Số điện thoại" 
                {...phone} 
                onChange={e => {phone.onChange(e); handleChange(e)}}
              />
            </div>
            <div className={` flex gap-2 ${errors.fullname||errors.phone ?'':'hidden'}`}>
              <p className="flex-1 text-body-sm text-red-700">{errors.fullname?.message}</p>
              <p className="flex-1 text-body-sm text-red-700">{errors.phone?.message}</p>
            </div>

            <select className={`border border-1 border-primary border-solid w-full h-9 px-2 outline-none ${(isProvinceSelected || type === 'update')? '' : "text-[#9ca3b7]"}`}
              defaultValue={newAddress.ProvinceCode}
              name="province"  
              {...provinceName}
              onChange={(e)=>{ provinceName.onChange(e); handleChange(e)}}
              onClick={()=>setIsProvinceSelected(true)}
            >
              {
                isProvinceSelected
                ? province.map(prv => <option key={prv.code} value={prv.code}>{prv.name}</option>)
                : (
                    type === 'update'
                    ? <option value={newAddress.ProvinceCode}>{newAddress.Province}</option> 
                    : <option value="" disabled hidden>Thêm tỉnh/ thành phố</option> 
                  )
              }

              {/* { isProvinceSelected 
                ? province.map(prv => <option key={prv.code} value={prv.code}>{prv.name}</option>) 
                : <option value="" disabled hidden>Thêm tỉnh/ thành phố</option> 
              } */}
            </select>
            <p className={`flex-1 text-body-sm text-red-700 ${errors.province?'':'hidden'}`}>{errors.province?.message}</p>

            <select className={`border border-1 border-primary border-solid w-full h-9 px-2 outline-none ${(isDistrictSelected && district.length > 0) || type === 'update' ?'': "text-[#9ca3b7]"}`} 
              defaultValue=""
              name="district" 
              {...districtName}
              onChange={(e)=>{districtName.onChange(e); handleChange(e)}}
              onClick={() => setIsDistrictSelected(true)}
            >
              {
                isDistrictSelected && district.length > 0
                ? district.map(dst => <option key={dst.code} value={dst.code}>{dst.name}</option>) 
                : (
                    type === 'update'
                    ? <option value={newAddress.DistrictCode}>{newAddress.District}</option> 
                    : <option value="" disabled hidden>Thêm quận/ huyện</option>
                  )
              }

              {/* { isDistrictSelected && district.length > 0
                ? district.map(dst => <option key={dst.code} value={dst.code}>{dst.name}</option>) 
                : <option value="" disabled hidden>Thêm quận/ huyện</option> } */}
            </select>
            <p className={`flex-1 text-body-sm text-red-700 ${errors.district?'':'hidden'}`}>{errors.district?.message}</p>

            <select className={`border border-1 border-primary border-solid w-full h-9 px-2 outline-none ${(isWardSelected && ward.length > 0) || type === 'update' ?'': "text-[#9ca3b7]"}`} 
              defaultValue=""
              name="ward"
              {...wardName}
              onChange={(e)=>{wardName.onChange(e); handleChange(e)}}
              onClick={() => setIsWardSelected(true)}
              >
               {
                isWardSelected && ward.length > 0
                ? ward.map(wd => <option key={wd.code} value={wd.code}>{wd.name}</option>)
                : (
                    type === 'update'
                    ? <option value={newAddress.WardCode}>{newAddress.Ward}</option> 
                    : <option value="" disabled hidden>Thêm Phường/ xã</option>
                  )
               }

              {/* { isWardSelected && ward.length > 0
                ? ward.map(wd => <option key={wd.code} value={wd.code}>{wd.name}</option>)
                : <option value="" disabled hidden>Thêm Phường/ xã</option> } */}
            </select>
            <p className={`flex-1 text-body-sm text-red-700 ${errors.ward?'':'hidden'}`}>{errors.ward?.message}</p>

            <input className="border border-1 border-primary border-solid w-full h-9 px-2 outline-none" 
              type="text" 
              name="address" 
              value={newAddress.Address}
              placeholder="Tên đường/ Số nhà" 
              {...addressDetail} 
              onChange={e => {addressDetail.onChange(e); handleChange(e)}}
            />
            <p className={`flex-1 text-body-sm text-red-700 ${errors.address?'':'hidden'}`}>{errors.address?.message}</p>

            <div className="flex justify-center laptop:justify-end gap-3">
              <div className=""><Button Color="secondary" onClick={() => onBack()}>Trở về</Button></div>
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
      {/* {isSuccess && <PopupStatus success>Thêm địa chỉ mới thành công</PopupStatus> } */}
    </>
  )
}

export default PopupAddress