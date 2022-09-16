import React, { useState } from 'react';
import Iproduct from '../models';

interface productProps {
  product: Iproduct
}

export default function Product(props: productProps) {
  const { product } = props;
  const {
    title, image, price, description, rating,
  } = product;

  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
  const btnClasses = ['py-2 px-4 border', btnBgClassName];
  return (
    <div
      className="border py-2 px-4 rounded flex flex-col items-center mb-2"
    >
      <img src={image} className="w-1/6" alt={title} />
      <p>{title}</p>
      <span className="font-bold">
        {price}
      </span>
      <button
        type="button"
        className={btnClasses.join(' ')}
        onClick={() => {
          setDetails((prev) => !prev);
        }}
      >
        {details ? 'Hide details' : 'Show details' }
      </button>
      {details && (
      <div>
        <p>{description}</p>
        <p>
          Rate:
          {' '}
          <span style={{ fontWeight: 700 }}>{rating?.rate}</span>
        </p>
      </div>
      )}
    </div>
  );
}
