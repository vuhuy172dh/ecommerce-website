import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { USERS, ADDRESS } from '../constant/firestore'
import { db } from '../firebase.config'

const updateOneAddress = async (uidUser, uidAddr, dataInput) => {
  const {
    name,
    phoneNum,
    province,
    district,
    ward,
    detail,
    provinceCode,
    districtCode,
    wardCode
  } = dataInput

  try {
    // Chuẩn hóa data truyền vào
    const data = {
      name,
      phone_num: phoneNum,
      province,
      district,
      ward,
      detail,
      province_code: provinceCode,
      district_code: districtCode,
      wardCode: wardCode,
      updated_date: serverTimestamp()
    }

    // Addr path
    const path = `${USERS}/${uidUser}/${ADDRESS}/${uidAddr}`
    // Addr ref
    const addrRef = doc(db, path)
    // Update doc
    updateDoc(addrRef, data)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default updateOneAddress
