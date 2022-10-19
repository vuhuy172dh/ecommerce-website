import AddressItem from './addressItem'

function AddressList({ addressList = [], addressDefault }) {
  return (
    <div className="flex flex-col gap-2 laptop:gap-0">
      {addressList.map((item) => {
        const def = item.uid === addressDefault
        return (
          <AddressItem
            key={item.uid}
            address={{
              Id: item.uid,
              Name: item.name,
              PhoneNumber: item.phone_num,
              Address: item.detail,
              Default: def,
              Province: item.province,
              District: item.district,
              Ward: item.ward,
              ProvinceCode: item.province_code,
              DistrictCode: item.district_code,
              WardCode: item.wardCode
            }}
          />
        )
      })}
    </div>
  )
}

export default AddressList
