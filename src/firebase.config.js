import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAUMdCkpD2_sQX3zlIqv03jt-IU_SnBUpw",
    authDomain: "restaurant5.firebaseapp.com",
    databaseURL: "https://restaurant5-default-rtdb.firebaseio.com",
    projectId: "restaurant5",
    storageBucket: "restaurant5.appspot.com",
    messagingSenderId: "45272865100",
    appId: "1:45272865100:web:2f677297c059cc3c3997e9"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };