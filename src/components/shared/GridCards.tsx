import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { TProduct } from '@/types';

const GridCards = (props: { items: TProduct[] }) => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 lg:gap-4 p-8 md:p-0'>
      {props.items.map((item: TProduct, index) => (
        <Card
          key={index}
          className='flex-grow min-h-[340px] flex flex-col justify-between hover:scale-110 duration-300 ease-linear hover:z-10'
        >
          <Link href={`/products/${item.id}`} className='contents'>
            <CardContent className='relative h-full min-h-48 w-full'>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
              )}
            </CardContent>
            <CardHeader className='flex flex-col justify-around flex-grow h-full'>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.description.slice(0, 128)}
              </CardDescription>
            </CardHeader>
          </Link>
          <CardFooter>
            <div className='w-full flex flex-col items-center justify-between'>
              <div className='w-full text-center px-4'>
                <span className='w-full text-start text-gray-600'>
                  {item.cost}
                </span>
              </div>
              <div className='w-full gap-4 flex items-center justify-center text-3xl'>
                <span className='text-yellow-500 hover:shadow-yellow-500 hover:shadow-lg'>
                  <CiShoppingCart />
                </span>
                <span className='text-red-500'>
                  <CiHeart />
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default GridCards;
