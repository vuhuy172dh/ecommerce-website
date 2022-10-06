import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCJ-4lpgxjBXxBxzM3gembLR7-awTo520Y',
  authDomain: 'ecommerce-naver.firebaseapp.com',
  projectId: 'ecommerce-naver',
  storageBucket: 'ecommerce-naver.appspot.com',
  messagingSenderId: '788274062159',
  appId: '1:788274062159:web:3b100ff257fdd9868a1b3a',
  measurementId: 'G-JRXYQF9EX2'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
