import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import Iproduct from '../models';

export default function useProducts() {
  const [products, setProducts] = useState([] as Iproduct[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product: Iproduct) {
    setProducts((prev) => [...prev, product]);
  }
  async function fetchProducts() {
    try {
      setLoading(true);
      setError('');
      setLoading(true);
      const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const err = e as AxiosError;
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return {
    products, loading, error, addProduct,
  };
}
