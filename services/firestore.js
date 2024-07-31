// services/firestore.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const pantryCollection = collection(db, 'pantry');

export const getAllItemIds = async () => {
  const snapshot = await getDocs(pantryCollection);
  const paths = snapshot.docs.map(doc => ({
    params: { id: doc.id },
  }));
  return paths;
};

export const getItem = async (id) => {
  const itemDoc = doc(db, 'pantry', id);
  const item = await getDoc(itemDoc);
  return item.exists() ? { id: item.id, ...item.data() } : null;
};

export const getItems = async () => {
  const snapshot = await getDocs(pantryCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addItem = async (item) => {
  await addDoc(pantryCollection, item);
};

export const updateItem = async (id, updatedItem) => {
  const itemDoc = doc(db, 'pantry', id);
  await updateDoc(itemDoc, updatedItem);
};

export const deleteItem = async (id) => {
  const itemDoc = doc(db, 'pantry', id);
  await deleteDoc(itemDoc);
};
