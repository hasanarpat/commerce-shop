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

                        <div className='absolute text-xs md:text-base bottom-0 top-0 left-0 right-0 w-full text-emerald-300'>
                          <CardHeader className='flex flex-col gap-4'>
                            <CardTitle>
                              <h3>{item.title}</h3>
                            </CardTitle>
                            <CardDescription className='text-emerald-100'>
                              <p className='mb-2 hidden md:block'>
                                {item.description}
                              </p>
                              <Button>
                                <Link href={item.url}>See more</Link>
                              </Button>
                            </CardDescription>
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
