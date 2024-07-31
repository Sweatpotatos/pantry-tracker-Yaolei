// pages/pantry/[id].js
import { getItem, getAllItemIds } from '../../services/firestore';
import Layout from '../../components/Layout';

const PantryItem = ({ itemData }) => {
  if (!itemData) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <article>
        <h1>{itemData.name}</h1>
        <div>Quantity: {itemData.quantity}</div>
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getAllItemIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const itemData = await getItem(params.id);
  return {
    props: {
      itemData,
    },
  };
}

export default PantryItem;
