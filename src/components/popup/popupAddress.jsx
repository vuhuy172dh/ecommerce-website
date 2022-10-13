import Popup from './popup'
import Button from '../button'
import { useCallback, useEffect, useState } from 'react'
import Controller from './controller'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from './input'
import Select from './select'

const schema = yup.object().shape({
  fullname: yup.string().required('Name should be required please'),
  phone: yup.string().required('Phone should be required please'),
  province: yup.string().required('Province is required'),
  district: yup.string().required('District is required'),
  ward: yup.string().required('Ward  is required'),
  address: yup.string().required('Address should be required please.')
})

function PopupAddress({ type = 'create', address, onBack = () => {} }) {
  const provinceAPI = 'https://provinces.open-api.vn/api/'

  // Create useState:
  const [province, setProvince] = useState([])
  const [district, setDistrict] = useState([])
  const [ward, setWard] = useState([])

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

  // get Province:
  const getProvince = async () => {
    fetch(provinceAPI)
      .then((res) => res.json())
      .then((res) => setProvince(res))
      .catch((err) => console.log(err))
  }

  // get District:
  const getDistrict = async (provinceCode) => {
    fetch(`${provinceAPI}p/${provinceCode}/?depth=2`)
      .then((res) => res.json())
      .then((res) => setDistrict(res.districts))
      .catch((err) => console.log(err))
  }

  // get Ward:
  const getWard = async (districtCode) => {
    fetch(`${provinceAPI}d/${districtCode}/?depth=2`)
      .then((res) => res.json())
      .then((res) => setWard(res.wards))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (type === 'update') {
      //clearErrors()
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
      //assign default value for update form
      setValue('fullname', address.Name)
      setValue('phone', address.PhoneNumber)
      setValue('province', address.ProvinceCode)
      setValue('district', address.DistrictCode)
      setValue('ward', address.WardCode)
      setValue('address', address.Address)
      // fetch data
      getDistrict(address.ProvinceCode)
      getWard(address.DistrictCode)
    }
    getProvince()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Handle change input field:
  const handleChange = useCallback(
    (e) => {
      const key = e.target.name
      const value = e.target.value

      if (key === 'province') {
        setNewAddress({
          ...newAddress,
          Province: e.target.options[e.target.selectedIndex].text,
          ProvinceCode: value,
          District: '',
          DistrictCode: '',
          Ward: '',
          WardCode: ''
        })
        getDistrict(value)
      }

      if (key === 'district') {
        setNewAddress({
          ...newAddress,
          District: e.target.options[e.target.selectedIndex].text,
          DistrictCode: value,
          Ward: '',
          WardCode: ''
        })
        getWard(value)
      }

      if (key === 'ward') {
        setNewAddress({
          ...newAddress,
          Ward: e.target.options[e.target.selectedIndex].text,
          WardCode: value
        })
      }

      if (key === 'fullname') {
        setNewAddress({
          ...newAddress,
          Name: value
        })
      }

      if (key === 'phone') {
        setNewAddress({
          ...newAddress,
          PhoneNumber: value
        })
      }

      if (key === 'address') {
        setNewAddress({
          ...newAddress,
          Address: value
        })
      }
    },
    [newAddress]
  )

  // declare useForm validation:
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

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
    console.log(data)
    console.log(newAddress)
    //console.log(newAddress)
  }

  return (
    <>
      <Popup>
        <form
          className="w-full laptop:w-[450px]"
          onSubmit={handleSubmit(handleUpdateAddress)}
        >
          <h3 className="text-center mb-3 laptop:text-left text-body-lg font-semibold laptop:mb-5">
            {type === 'create' ? 'Địa chỉ mới' : 'Sửa địa chỉ'}
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {/*Name field */}
              <Controller
                {...{
                  control,
                  register,
                  name: 'fullname',
                  rules: {},
                  type: 'text',
                  placeholder: 'your name',
                  className:
                    'border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none',
                  handleChange: (e) => handleChange(e),
                  render: (props) => <Input {...props} />
                }}
              />

              {/*Phone field*/}
              <Controller
                {...{
                  control,
                  register,
                  name: 'phone',
                  rules: {},
                  type: 'number',
                  placeholder: 'your phone',
                  className:
                    'border border-1 border-primary border-solid w-1/2 h-9 px-2 outline-none',
                  handleChange: (e) => handleChange(e),
                  render: (props) => <Input {...props} />
                }}
              />
            </div>

            {/*error*/}
            <div
              className={` flex gap-2 ${
                errors.fullname || errors.phone ? '' : 'hidden'
              }`}
            >
              <p className="flex-1 text-body-sm text-red-700">
                {errors.fullname?.message}
              </p>
              <p className="flex-1 text-body-sm text-red-700">
                {errors.phone?.message}
              </p>
            </div>

            {/*province select */}
            <Controller
              {...{
                control,
                register,
                name: 'province',
                rules: {},
                type: '',
                placeholder: 'Thêm tỉnh/ thành phố',
                className:
                  'border border-1 border-primary border-solid w-full h-9 px-2 outline-none',
                handleChange: (e) => handleChange(e),
                options: province,
                render: (props) => <Select {...props} />
              }}
            />
            <p
              className={`flex-1 text-body-sm text-red-700 ${
                errors.province ? '' : 'hidden'
              }`}
            >
              {errors.province?.message}
            </p>

            {/*district select*/}
            <Controller
              {...{
                control,
                register,
                name: 'district',
                rules: {},
                type: '',
                placeholder: 'Thêm quận/ huyện',
                className:
                  'border border-1 border-primary border-solid w-full h-9 px-2 outline-none',
                handleChange: (e) => handleChange(e),
                options: district,
                render: (props) => <Select {...props} />
              }}
            />
            <p
              className={`flex-1 text-body-sm text-red-700 ${
                errors.district ? '' : 'hidden'
              }`}
            >
              {errors.district?.message}
            </p>

            {/*ward select */}
            <Controller
              {...{
                control,
                register,
                name: 'ward',
                rules: {},
                type: '',
                placeholder: 'Thêm Phường/ xã',
                className:
                  'border border-1 border-primary border-solid w-full h-9 px-2 outline-none',
                handleChange: (e) => handleChange(e),
                options: ward,
                render: (props) => <Select {...props} />
              }}
            />
            <p
              className={`flex-1 text-body-sm text-red-700 ${
                errors.ward ? '' : 'hidden'
              }`}
            >
              {errors.ward?.message}
            </p>

            {/*address field*/}
            <Controller
              {...{
                control,
                register,
                name: 'address',
                type: 'text',
                placeholder: 'Tên đường/ Số nhà',
                className:
                  'border border-1 border-primary border-solid w-full h-9 px-2 outline-none',
                handleChange: (e) => handleChange(e),
                render: (props) => <Input {...props} />
              }}
            />
            <p
              className={`flex-1 text-body-sm text-red-700 ${
                errors.address ? '' : 'hidden'
              }`}
            >
              {errors.address?.message}
            </p>

            <div className="flex justify-center laptop:justify-end gap-3">
              <div className="">
                <Button Color="secondary" onClick={() => onBack()}>
                  Trở về
                </Button>
              </div>
              {type === 'create' ? (
                <div>
                  <Button Color="primary">Thêm địa chỉ</Button>
                </div>
              ) : (
                ''
              )}
              {type === 'update' ? (
                <div>
                  <Button Color="primary">Cập nhật</Button>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </form>
      </Popup>
      {/* {isSuccess && <PopupStatus success>Thêm địa chỉ mới thành công</PopupStatus> } */}
    </>
  )
}

export default PopupAddress
