import React, { useContext } from 'react';
import Loader from '../components/Loader';
import Product from '../components/Product';
import useProducts from '../hooks/product';
import Error from '../components/Error';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import Iproduct from '../models';
import ModalContext from '../context/ModalContext';

export default function ProductsPage() {
  const {
    products, loading, error, addProduct,
  } = useProducts();
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext);
  // const [modal, setModal] = useState(false);
  const createHandler = (product: Iproduct) => {
    closeModal();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && (
      <Error error={error} />
      )}
      { products.map((product) => <Product product={product} key={product.id} />)}
      {modal && (
      <Modal title="Create new Product" onClose={closeModal}>
        <CreateProduct onCreate={createHandler} />
      </Modal>
      )}
      <button
        type="button"
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={openModal}
      >
        +
      </button>
    </div>
  );
}
