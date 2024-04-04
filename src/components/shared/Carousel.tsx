'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { cn } from '@/lib/utils';
import { TCarouselSuggestion, TProduct } from '@/types';

import { CiShoppingCart } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/context/cart-context';

const CarouselComponent = (props: {
  classNameContainer?: String;
  classNameCarousel?: String;
  classNameContent?: String;
  classNameItem?: String;
  classNameCard?: String;
  classNameCardContent?: String;
  classNameCardHeader?: String;
  classNameCardDescription?: String;
  classNameCardTitle?: String;
  classNameCardFooter?: String;
  classNameCardFlex?: String;
  array: TCarouselSuggestion | TProduct[];
  title?: String;
  isProduct: boolean;
}) => {
  const { addToCart } = useContext(CartContext);
  const handleAddCart = (item: TProduct) => {
    const saveItem = {
      id: item.id,
      name: item.title,
      price: 12,
      quantity: 1,
      img: item.image || 'lala',
      seller: 'Fashion Store',
      predictedDeliveryTime: 'Jun 30',
    };

    addToCart(saveItem);
  };
  return (
    <div
      className={cn(
        'w-full p-16 md:p-4 lg:p-20 flex flex-col items-center justify-center',
        props.classNameContainer
      )}
    >
      {props.title && (
        <div className='w-full text-emerald-500 mb-4 text-xl font-bold text-center lg:text-start'>
          <h3>
            <Link href={`/categories/${props.title.toLowerCase()}`}>
              {props.title}
            </Link>
          </h3>
        </div>
      )}
      <Carousel
        className={cn(
          'w-full max-w-xs md:max-w-lg lg:max-w-full',
          props.classNameCarousel
        )}
      >
        <CarouselContent className={cn('', props.classNameContent)}>
          {props.isProduct &&
            (props.array as TProduct[]).map((item, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  'basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 group',
                  props.classNameItem
                )}
              >
                <div className={cn('p-1 h-full', props.classNameCardFlex)}>
                  <Card
                    className={cn(
                      'h-full flex-grow justify-between',
                      props.classNameCard
                    )}
                  >
                    <CardContent
                      className={cn(
                        'flex aspect-square items-center justify-center p-0',
                        props.classNameCardContent
                      )}
                    >
                      <Link
                        className='w-full h-full relative'
                        href={`/products/${item.id}`}
                      >
                        {item.image && (
                          <Image
                            alt='product'
                            src={item.image}
                            fill
                            className='object-cover group-hover:object-contain'
                          />
                        )}
                      </Link>
                    </CardContent>
                    <CardHeader
                      className={cn('p-2 ', props.classNameCardHeader)}
                    >
                      <CardTitle className={cn('', props.classNameCardTitle)}>
                        {item.title}
                      </CardTitle>
                      <CardDescription
                        className={cn('', props.classNameCardDescription)}
                      >
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='p-0'>
                      <div className='w-full flex flex-col items-center justify-between gap-4'>
                        <div className='w-full flex items-center justify-between px-4'>
                          <span className='w-full text-start text-emerald-300'>
                            {item.cost}
                          </span>
                        </div>
                        <div className='w-full mb-2 gap-4 flex items-center justify-center text-3xl'>
                          <span
                            className='text-yellow-500 hover:stroke-yellow-500 hover:scale-110'
                            onClick={() => handleAddCart(item)}
                          >
                            <CiShoppingCart />
                          </span>
                          <span className='text-red-500'>
                            <CiHeart />
                          </span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
