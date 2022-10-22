import {
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  limit,
  query
} from 'firebase/firestore'
import { db, auth } from '../firebase.config'
import { TRANSACTIONS } from '../constant/firestore'

// Listing array object category get from firestore of firebase
const showListTransactions = async (status) => {
  try {
    const userId = auth.currentUser.uid
    const q = query(
      collection(db, TRANSACTIONS),
      where('status', '==', status),
      where('user', '==', userId),
      limit(4)
    )
    const querySnapshot = await getDocs(q)
    const listTransactions = []
    querySnapshot.forEach((doc) => {
      listTransactions.push(doc.data())
      listTransactions[listTransactions.length - 1].uid = doc.id
    })
    return Promise.resolve(listTransactions)
  } catch (error) {
    return Promise.resolve(error)
  }
}

export const showOneTransaction = async (id) => {
  const querySnapshot = await getDoc(doc(db, TRANSACTIONS, id))
  var transaction = querySnapshot.data()
  transaction.uid = querySnapshot.id
  return transaction
}

export default showListTransactions
