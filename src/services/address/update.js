import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { USERS, ADDRESS } from '../constant/firestore'
import { db } from '../firebase.config'

const updateOneAddress = async (uidUser, uidAddr, dataInput) => {
  const {
    Name,
    PhoneNumber,
    Province,
    District,
    Ward,
    Address,
    ProvinceCode,
    DistrictCode,
    WardCode
  } = dataInput

  try {
    // Chuẩn hóa data truyền vào
    const data = {
      name: Name,
      phone_num: PhoneNumber,
      province: Province,
      district: District,
      ward: Ward,
      detail: Address,
      province_code: ProvinceCode,
      district_code: DistrictCode,
      wardCode: WardCode,
      updated_date: serverTimestamp()
    }

    // Addr path
    const path = `${USERS}/${uidUser}/${ADDRESS}/${uidAddr}`
    // Addr ref
    const addrRef = doc(db, path)
    // Update doc
    updateDoc(addrRef, data)
    return Promise.resolve('update address successfully')
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default updateOneAddress
