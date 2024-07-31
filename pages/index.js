// pages/index.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PantryItem from '../components/PantryItem';
import AddItemForm from '../components/AddItemForm';
import { addItem, getItems, updateItem, deleteItem } from '../services/firestore';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const items = await getItems();
    setItems(items);
  };

  const handleAdd = async (item) => {
    await addItem(item);
    fetchItems();
  };

  const handleUpdate = async (id) => {
    const newQuantity = prompt('Enter new quantity:');
    await updateItem(id, { quantity: parseInt(newQuantity) });
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <Layout>
      <AddItemForm onAdd={handleAdd} />
      {items.map(item => (
        <PantryItem key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </Layout>
  );
};

export default Home;
