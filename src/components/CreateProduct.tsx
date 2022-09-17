/* eslint-disable no-unused-vars */
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Iproduct from '../models';
import Error from './Error';

const productData: Iproduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: Iproduct) => void
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const [values, setValues] = useState({} as Iproduct);
  const [error, setError] = useState('');
  const submitHandler = async (e: React.FormEvent) => {
    setError('');
    e.preventDefault();
    if (Object.keys(values).length === 0) {
      setError('Please enter valid title.');
      return;
    }
    productData.title = values.title;
    productData.price = values.price;
    productData.description = values.description;

    const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', productData);
    onCreate(response.data);
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const attribute = target.getAttribute('data-input') as keyof Iproduct;
    setValues(Object.assign(values, { [attribute]: target.value }));
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full  outline-0"
        data-input="title"
        placeholder="Enter product title..."
        value={values.title}
        onChange={changeHandler}
      />
      <input
        type="number"
        className="border py-2 px-4 mb-2 w-full  outline-0"
        data-input="price"
        placeholder="Enter product price..."
        value={values.price}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full  outline-0"
        data-input="description"
        placeholder="Enter product description..."
        value={values.description}
        onChange={changeHandler}
      />
      {error && <Error error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-yellow-200"
      >
        Create
      </button>
    </form>
  );
}
export default CreateProduct;
