import { cn } from '@/lib/utils';
import React from 'react';
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
import { TCarouselSuggestion } from '@/types';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const SuggestionCarousel = (props: {
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
  array: TCarouselSuggestion[];
  title?: String;
  isProduct: boolean;
}) => {
  return (
    <div
      className={cn(
        'w-full p-2 lg:p-2 flex flex-col items-center justify-center',
        props.classNameContainer
      )}
    >
      <Carousel
        className={cn(
          'max-w-none md:max-w-none lg:max-w-[70%] w-[calc(100%-6rem)]',
          props.classNameCarousel
        )}
      >
        <CarouselContent className={cn('', props.classNameContent)}>
          {props.array.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'basis-full md:basis-full lg:basis-full xl:basis-full',
                props.classNameItem
              )}
            >
              <div className='p-1'>
                <Card className={cn('', props.classNameCard)}>
                  <CardContent
                    className={cn(
                      'aspect-video lg:aspect-[16/6] flex items-center justify-center p-0',
                      props.classNameCardContent
                    )}
                  >
                    <div className='w-full h-full'>
                      <div className='w-full h-full relative'>
                        <Image
                          alt={item.description}
                          src={item.img}
                          fill
                          className='object-cover'
                        />

                        <div className='absolute text-xs md:text-base bottom-0 top-[3rem] left-0 right-0 w-full lg:top-1/3'>
                          <CardHeader className='flex flex-col items-center md:items-start gap-4 lg:gap-1'>
                            <CardTitle className='text-3xl lg:text-5xl font-bold'>
                              {item.title}
                            </CardTitle>
                            <CardDescription className=' mb-2 hidden md:block'>
                              {item.description}
                            </CardDescription>{' '}
                            <Button className='w-fit'>
                              <Link href={item.url}>Daha fazla</Link>
                            </Button>
                          </CardHeader>
                        </div>
                      </div>
                    </div>
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

export default SuggestionCarousel;
