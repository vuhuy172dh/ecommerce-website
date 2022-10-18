import {
  serverTimestamp,
  writeBatch,
  addDoc,
  collection,
  doc
} from 'firebase/firestore'
import { db } from '../firebase.config'
import {
  TRANSACTIONS,
  PRODUCTS,
  USERS,
  ADDRESS,
  TRANSACTION_ITEM
} from '../constant/firestore'

// Đối số thứ 3 là thông tin về hóa đơn
// Đối số thứ 4 là danh sách các sản phẩm kèm với số lượng mua. Lưu dạng object
// listProduct = [{uid: .., quanity: ..}, ...]
const createOneTransaction = async (
  uidUser,
  uidAddr,
  { shippingFee, totalDue },
  listProduct
) => {
  try {
    // Lưu địa chỉ chọn giao hàng
    const addrRef = doc(db, `${USERS}/${uidUser}/${ADDRESS}/${uidAddr}`)
    const userRef = doc(db, USERS, uidUser)
    const transactionCollectionRef = collection(db, TRANSACTIONS)

    // Khởi tạo data cho transaction
    const data = {
      shipping_fee: shippingFee,
      total_due: totalDue,
      created_date: serverTimestamp(),
      status: 'In progress', // Lần đầu tạo bill sẽ ở trạng thái này
      addr_ref: addrRef,
      user_ref: userRef
    }

    // Sau khi thêm thành công một doc, trả về một docRef
    const transactionRef = await addDoc(transactionCollectionRef, data)
    const uidTransaction = transactionRef.id // Lấy uid của transaction đó

    // Tạo collection ref, sau đó ghi nhiều doc vào collection ref này
    const transactionItemCollectionRef = collection(
      db,
      `${TRANSACTIONS}/${uidTransaction}/${TRANSACTION_ITEM}`
    )

    // Batch script to write multiple documents to a collection in once
    const batch = writeBatch(db)

    // Chuẩn hóa dữ liệu gửi đi
    const dataListProductItem = listProduct.map((item) => {
      const productRef = doc(db, PRODUCTS, item.uid)

      return {
        product_ref: productRef,
        quantity: item.quantity
      }
    })

    dataListProductItem.forEach((productItem) => {
      // Create doc ref with a generated ids
      const docRef = doc(transactionItemCollectionRef)
      batch.set(docRef, productItem)
    })

    // Commit the batch
    await batch.commit()

    // Do sth here
  } catch (e) {
    const { code } = e
    return Promise.resolve(code)
  }
}

export default createOneTransaction
