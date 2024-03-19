import { products } from '@/app/data';
import React from 'react';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = { ...products.filter((item) => item.id === id) };
  console.log(product);
  return <div className='p-2 md:p-4 lg:p-10 xl:px-16'></div>;
};

export default ProductPage;
