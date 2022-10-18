import AddressItem from './addressItem'

function AddressList({ addressList = [] }) {
  return (
    <div className="flex flex-col gap-2 laptop:gap-0">
      {addressList.map((item) => (
        <AddressItem
          key={item.id}
          address={{
            Id: item.id,
            Name: item.name,
            PhoneNumber: item.phoneNumber,
            Address: item.address,
            Default: item.default,
            Province: item.province,
            District: item.district,
            Ward: item.ward,
            ProvinceCode: item.provinceCode,
            DistrictCode: item.districtCode,
            WardCode: item.wardCode
          }}
        />
      ))}
    </div>
  )
}

export default AddressList
