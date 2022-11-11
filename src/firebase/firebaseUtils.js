import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMkBUPDveCqLBW8Sv4TLVM4fb4x63S2y4",
    authDomain: "pizza-dojo.firebaseapp.com",
    projectId: "pizza-dojo",
    storageBucket: "pizza-dojo.appspot.com",
    messagingSenderId: "1003744872035",
    appId: "1:1003744872035:web:8fb473588678fe50c25a56",
    measurementId: "G-77C13C6G80"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const database = getFirestore(app);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(database, 'users', userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const userData = {
      displayName,
      email,
      createdAt,
      ...additionalData,
    };

    try {
      await setDoc(userRef, userData);
      console.log(userData);
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const createOrderDocument = async (order) => {
  if (!order) return;
  const orderRef = doc(database, 'orders', order.id);
  const snapShot = await getDoc(orderRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();
    const orderData = {
      userId: order.userId,
      shippingDetails: {
        ...order.shippingDetails,
      },
      items: [...order.items],
      shippingPrice: order.shippingPrice,
      subtotal: order.subtotal,
      total: order.total,
      status: 'pendiente',
      createdAt,
    };

    try {
      await setDoc(orderRef, orderData);
    } catch (error) {
      console.log('Error creating order', error.message);
    }
  }

  return orderRef;
};

export const getOrders = async (userId) => {
  const q = query(
    collection(database, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  try {
    const querySnapshot = await getDocs(q);
    let orders = [];
    querySnapshot.forEach((doc) => {
      orders = [...orders, { id: doc.id, ...doc.data() }];
    });

    return orders;
  } catch (error) {
    console.log('Errod getting documents: ', error);
  }
};