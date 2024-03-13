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
import { TProduct } from '@/types';

import { CiShoppingCart } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoTicketOutline } from 'react-icons/io5';

import Image from 'next/image';
import Link from 'next/link';

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
  array: number[] | TProduct[];
  title?: String;
  isProduct: boolean;
}) => {
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
          {props.isProduct
            ? (props.array as TProduct[]).map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    'basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6',
                    props.classNameItem
                  )}
                >
                  <div className='p-1'>
                    <Card className={cn('', props.classNameCard)}>
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
                          <Image
                            alt='product'
                            src={item.image}
                            fill
                            className='object-cover'
                          />
                        </Link>
                      </CardContent>
                      <CardHeader className={cn('', props.classNameCardHeader)}>
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
                          <div className='w-full flex items-center justify-between px-1'>
                            <span className='w-full text-center'>
                              {item.cost}
                            </span>
                            <span className='w-full text-center flex items-center'>
                              <Link
                                href={`/categories/${item.category}`}
                                className='hover:text-emerald-200'
                              >
                                {item.category}
                              </Link>
                              <IoTicketOutline className='text-2xl' />
                            </span>
                          </div>
                          <div className='w-full mb-2 gap-4 flex items-center justify-center text-3xl'>
                            <span className='text-yellow-500 hover:stroke-yellow-500'>
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
              ))
            : Array.from({ length: props.array?.length }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    'basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/6',
                    props.classNameItem
                  )}
                >
                  <div className='p-1'>
                    <Card className={cn('', props.classNameCard)}>
                      <CardContent
                        className={cn(
                          'flex aspect-square items-center justify-center p-6',
                          props.classNameCardContent
                        )}
                      >
                        <span className='text-4xl font-semibold'>
                          {index + 1}
                        </span>
                      </CardContent>
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
