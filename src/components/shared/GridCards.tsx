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
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

const GridCards = (props: { items: TProduct[] }) => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-4 p-8 md:p-0'>
      {props.items.map((item: TProduct, index) => (
        <Card
          key={index}
          className='flex-grow min-h-[440px] flex flex-col justify-between hover:drop-shadow-xl duration-300 ease-linear hover:z-10 group'
        >
          <Link href={`/products/${item.id}`} className='contents'>
            <CardContent className='relative flex-grow h-full min-h-48 w-full'>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
              )}
            </CardContent>
            <CardHeader className='text-center'>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className='text-sm'>
                {item.description.slice(0, 128)}
              </CardDescription>
            </CardHeader>
          </Link>
          <CardFooter className='p-0'>
            <div className='w-full text-center'>
              <span className='text-gray-600'>{item.cost}</span>
              <div className='w-[94%] mx-auto gap-4 group-hover:visible flex items-center justify-center text-3xl invisible my-1 bg-emerald-400/90 rounded-md transition-all duration-100 ease-in-out'>
                <span className=' group/basket'>
                  <Button
                    variant='link'
                    className='group-hover/basket:hidden text-2xl p-0 px-2'
                  >
                    <CiShoppingCart />
                  </Button>
                  <Button
                    variant='link'
                    className='hidden group-hover/basket:block text-2xl p-0 px-2'
                  >
                    <FaCartPlus className='text-white' />
                  </Button>
                </span>
                <span className='group/fav'>
                  <Button
                    variant='link'
                    className='group-hover/fav:hidden text-2xl p-0 px-2'
                  >
                    <CiHeart />
                  </Button>
                  <Button
                    variant='link'
                    className='hidden group-hover/fav:block text-2xl p-0 px-2'
                  >
                    <FaHeart className='text-red-500' />
                  </Button>
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
