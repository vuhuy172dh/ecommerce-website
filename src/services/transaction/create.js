import { serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import { TRANSACTIONS } from '../constant/firestore'

const createOneTransaction = async (
  uidUser,
  contact,
  shipTo,
  shippingMethod,
  payment,
  totalPrice,
  products
) => {
  try {
    // Transaction Collection Ref
    const transactionCollectionRef = collection(db, TRANSACTIONS)

    // Khởi tạo data cho transaction
    const data = {
      user: uidUser,
      contact: contact,
      ship_to: shipTo,
      shipping_method: shippingMethod,
      payment: payment,
      status: 'Waiting', // Lần đầu tạo bill sẽ ở trạng thái này
      products: products,
      total: totalPrice,
      created_date: serverTimestamp(),
      updated_date: serverTimestamp()
    }

    // Sau khi thêm thành công một doc, trả về một docRef
    const docRef = await addDoc(transactionCollectionRef, data)
    data.uid = docRef.id
    return Promise.resolve(data)
    // Do sth here
  } catch (e) {
    const { code } = e
    return Promise.resolve(code)
  }
}

export default createOneTransaction
