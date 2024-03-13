import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
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
  array: number[];
  title?: String;
}) => {
  return (
    <div
      className={cn(
        'w-full p-16 md:p-4 lg:p-20 flex flex-col items-center justify-center',
        props.classNameContainer
      )}
    >
      {props.title && (
        <div className='w-full text-emerald-500 mb-4 text-xl font-bold text-center md:text-start'>
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
          {Array.from({ length: props.array?.length }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/6',
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
                    <span className='text-4xl font-semibold'>{index + 1}</span>
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
