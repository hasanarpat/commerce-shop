import { products } from '@/app/data';
import { Button } from '@/components/ui/button';
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
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';

const SingleCategory = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div
      className={cn(
        'w-full p-16 md:p-4 lg:p-20 lg:py-8 flex flex-col items-center justify-center'
      )}
    >
      <div className='flex flex-col p-4 md:px-8 lg:px-16 xl:px-24 w-full mb-2'>
        <h3 className='text-xl font-bold text-emerald-400 mb-2 text-center'>
          Best of all in {id.toUpperCase()} category.
        </h3>
        <div className='bg-secondary flex flex-col md:flex-row w-full rounded-lg'>
          <div className='relative flex-1 h-80 w-full'>
            <Image
              alt='category hero image'
              src='https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              fill
              className='object-cover'
            />
          </div>
          <div className='flex-1 h-72 flex flex-col justify-between p-2 md:p-4 text-sm md:text-base box-content'>
            <h4 className='text-2xl text-sky-400'>
              Incididunt laborum et ad tempor eiusmod ipsum.
            </h4>
            <p>
              Et reprehenderit anim aute duis occaecat. Lorem ex dolor esse
              ipsum ad cupidatat laboris nisi magna. Dolore nostrud duis
              excepteur exercitation id. Sunt mollit tempor dolore pariatur
              exercitation.
            </p>
            <Button>See Offer</Button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  md:w-1/2 mx-auto items-center justify-center gap-8 mt-4'>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Spring Offers
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Best Sellers in {id}
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Outgoing
          </div>
        </div>
        <h4 className='text-center mt-8 mb-4 text-2xl'>Products in category</h4>
        <div className='flex flex-wrap w-full md:w-2/3 mx-auto items-center justify-center gap-2 gap-y-3'>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Bracelets
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Necklaces
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Perfumes
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Rings
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Crochets
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Broches
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Crochets
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Broches
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Crochets
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Broches
          </div>
          <div className='text-center hover:-translate-y-2 py-3 px-4 bg-secondary rounded-full cursor-pointer hover:bg-emerald-800 hover:text-emerald-50'>
            Broches
          </div>
        </div>
      </div>

      <div className='my-2  w-full text-center text-3xl font-bold'>
        <Link
          href={`/categories/${id}/products`}
          className='bg-emerald-600 px-8 rounded-full'
        >
          See All
        </Link>
      </div>
      {products.filter((item) => item.category === id).length > 0 && (
        <>
          <h5 className='my-1 text-start text-3xl font-extrabold w-full'>
            Suggested For You
          </h5>
          <Carousel className={cn('w-full max-w-xs md:max-w-lg lg:max-w-full')}>
            <CarouselContent>
              {products
                .filter((item) => item.category === id)
                .slice(0, 12)
                .map((item, index) => (
                  <CarouselItem
                    key={index}
                    className={cn(
                      'basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6',
                      `duration-[${index * 25}]`
                    )}
                  >
                    <div>
                      <Card className={cn('h-full flex-grow justify-between')}>
                        <CardContent
                          className={cn(
                            'flex aspect-square items-center justify-center p-0'
                          )}
                        >
                          <Link
                            className='w-full h-full relative'
                            href={`/products/${item.id}`}
                          >
                            {item.images && (
                              <Image
                                alt='product'
                                src={item.images[1]}
                                fill
                                className='object-cover'
                              />
                            )}
                          </Link>
                        </CardContent>
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className='p-0'>
                          <div className='w-full flex flex-col items-center justify-between gap-4'>
                            <div className='w-full flex items-center justify-between px-4'>
                              <span className='w-full text-start text-emerald-300'>
                                {item.cost}
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
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
    </div>
  );
};

export default SingleCategory;
