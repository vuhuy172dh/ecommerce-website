import { runTransaction, doc } from 'firebase/firestore'
import { TRANSACTIONS } from '../constant/firestore'
import { db } from '../firebase.config'

// Hàm hủy đơn hàng
const cancelOrder = async (uidTransaction) => {
  // Get doc ref
  const transactionRef = doc(db, `${TRANSACTIONS}/${uidTransaction}`)

  try {
    const result = await runTransaction(db, async (transaction) => {
      // Đọc dữ liệu từ doc ref
      const transactionDoc = await transaction.get(transactionRef)

      // Nếu tồn tại doc vừa mới get
      if (!transactionDoc.exists()) {
        return {
          status: 'error',
          mes: 'Doc does not exists!'
        }
      }

      // Get statusCurrent
      const statusCurrent = transactionDoc.data().status

      // Nếu không ở trạng thái 'In progress' thì không được hủy đơn hàng
      if (statusCurrent !== 'Waiting') {
        return {
          status: 'error',
          mes: 'cannot cancel order'
        }
      }

      // Update lại trạng thái đơn hàng
      transaction.update(transactionRef, {
        status: 'Canceled'
      })

      return {
        status: 'success',
        mes: 'Canceled order successfully'
      }
    })

    if (result.status === 'success') return Promise.resolve(result.mes)
    return Promise.reject(result.mes)
  } catch (e) {
    const { code } = e
    return Promise.reject(code)
  }
}

export default cancelOrder
