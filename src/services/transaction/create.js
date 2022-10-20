import { serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import { TRANSACTIONS } from '../constant/firestore'

const createOneTransaction = async (
  uuidUser,
  contact,
  shipTo,
  shippingMethod,
  payment,
  products
) => {
  try {
    // Transaction Collection Ref
    const transactionCollectionRef = collection(db, TRANSACTIONS)

    // Khởi tạo data cho transaction
    const data = {
      user: uuidUser,
      contact,
      ship_to: shipTo,
      shipping_method: shippingMethod,
      payment,
      status: 'In progress', // Lần đầu tạo bill sẽ ở trạng thái này
      products,
      created_date: serverTimestamp()
    }

    // Sau khi thêm thành công một doc, trả về một docRef
    await addDoc(transactionCollectionRef, data)

    // Do sth here
  } catch (e) {
    const { code } = e
    return Promise.resolve(code)
  }
}

export default createOneTransaction
