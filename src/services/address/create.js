import { serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import { ADDRESS, USERS } from '../constant/firestore'

// CreateNewAddr function
// Cung cấp cho hàm này uid của người dùng
// Đối số thứ 2 là data object
const createNewAddr = async (
  uid,
  {
    name,
    phoneNum,
    province,
    district,
    ward,
    detail,
    provinceCode,
    districtCode,
    wardCode
  }
) => {
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
      created_date: serverTimestamp(),
      updated_date: serverTimestamp()
    }

    // Trỏ vào sub-collection ADDRESS với path: users/:uid/addr.
    const path = `${USERS}/${uid}/${ADDRESS}`
    // Lấy được collection ref
    const collectionRef = collection(db, path)
    // Thêm 1 document với uid ngẫu nhiên đưa vào ADDRESS collection
    addDoc(collectionRef, data)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

// Note: Sau khi upload địa chỉ này lên, danh sách ADDRESS trên firestore được
// thêm vào một document. Nhưng để tối ưu hiệu năng, bổ sung địa chỉ mới này vào
// redux. Tránh load lại một list từ firestore rồi lưu lại vào redux

export default createNewAddr
