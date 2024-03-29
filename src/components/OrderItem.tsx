import { FaCheckCircle } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { TbDeviceImacQuestion } from 'react-icons/tb';
import { GoInbox } from 'react-icons/go';

import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const OrderItem = ({
  products,
}: {
  products: {
    seller: string;
    productImg: string;
    title: string;
    price: string;
    isCancelled: boolean;
    date: string;
  }[];
}) => {
  console.log(products);

  return (
    <Accordion
      type='single'
      collapsible
      className='border border-border rounded-lg p-4 py-1 max-w-6xl'
    >
      <AccordionItem value='item-1' className='border-none'>
        <AccordionTrigger>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-2 w-[35%]'>
              {products.slice(0, 2).map((product, i) => (
                <div className='w-10 h-10 relative' key={i}>
                  <Image
                    alt=''
                    src={product.productImg}
                    fill
                    className='object-contain border border-border rounded-lg '
                  />
                </div>
              ))}
              {products.length > 3 && (
                <div className='w-10 h-10  border border-border rounded-lg bg-gray-400 flex items-center justify-center'>
                  +{products.length - 2}
                </div>
              )}

              <div className='text-sm text-gray-400'>
                Order no:
                <span className='text-md font-bold ml-2'>402 123 948</span>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <FaCheckCircle className='text-lg text-green-500' />
              <span className='text-xs font-medium ml-1'>Order completed</span>
            </div>
            <div className='flex flex-col items-center text-xs font-semibold mr-2'>
              <span>14 Dec Thu</span>
              <span className='text-green-600'>4.907,13 TL</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {products.map((product) => (
            <div
              className='border border-border rounded-lg flex flex-col mb-2'
              key={product.title}
            >
              <div className='flex items-center justify-between  p-4 py-3 '>
                <h3>{product.seller}</h3>
                <Button variant='secondary' size='sm'>
                  Ask to Seller
                </Button>
              </div>
              <Separator className='w-full' />
              <div className='flex flex-col md:flex-row'>
                <div className='flex-1 flex items-start gap-8 p-4'>
                  <Image
                    alt=''
                    src={product.productImg}
                    width={50}
                    height={80}
                    className='object-cover'
                  />
                  <div className='flex flex-col gap-2'>
                    <p className='text-sm'>{product.title}</p>
                    <p className='text-green-700'>{product.price}</p>
                    <Button size='sm' className='w-fit'>
                      Buy again
                    </Button>
                  </div>
                </div>
                <div
                  className={cn(
                    'flex-1 flex gap-4 items-start p-4',
                    product.isCancelled === true
                      ? 'bg-gray-100'
                      : 'bg-green-100'
                  )}
                >
                  {product.isCancelled === true ? (
                    <span className='text-3xl'>
                      <FcCancel />
                    </span>
                  ) : (
                    <span className='text-3xl'>
                      <FaArrowAltCircleDown className='fill-green-500' />
                    </span>
                  )}
                  <div className='flex flex-col gap-2'>
                    {product.isCancelled === true ? (
                      <p>This Product has been completed.</p>
                    ) : (
                      <p>This Product has been cancelled.</p>
                    )}
                    <p className='text-xs text-gray-500 font-light'>
                      {product.date}
                    </p>
                    {product.isCancelled === true ? (
                      <p className='text-xs w-[80%] text-justify border-2 border-border rounded-lg p-2'>
                        Eu ipsum commodo esse aliqua. Nisi nulla pariatur
                        incididunt do do eiusmod mollit eu quis ullamco cillum
                        qui aute elit.
                        <b>
                          Est fugiat enim cupidatat eu anim eiusmod voluptate
                          labore duis veniam ullamco deserunt irure labore.
                        </b>{' '}
                        Officia aliqua dolor aliqua nisi tempor do minim nisi
                        minim nisi cupidatat nulla. Laboris sint incididunt qui
                        magna.
                      </p>
                    ) : (
                      <>
                        <Separator />
                        <div className='flex flex-wrap gap-6'>
                          <Button
                            className='text-md font-light'
                            variant='ghost'
                            size='sm'
                          >
                            <GoInbox className='inline text-3xl mr-3' />
                            Track your order
                          </Button>
                          <Button
                            className='text-md font-light'
                            variant='ghost'
                            size='sm'
                          >
                            <LiaFileInvoiceSolid className='inline text-3xl mr-3' />
                            View Invoice
                          </Button>
                          <Button
                            className='text-md font-light'
                            variant='ghost'
                            size='sm'
                          >
                            <TbDeviceImacQuestion className='inline text-3xl mr-3' />
                            Track your order
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default OrderItem;

<div className='border border-border rounded-lg flex flex-col mb-2'>
  <div className='flex items-center justify-between  p-4 py-3 '>
    <h3>Ceramical</h3>
    <Button variant='secondary' size='sm'>
      Ask to Seller
    </Button>
  </div>
  <Separator className='w-full' />
  <div className='flex flex-col md:flex-row'>
    <div className='flex-1 flex items-start gap-8 p-4'>
      <Image
        alt=''
        src='https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
        width={50}
        height={80}
        className='object-cover'
      />
      <div className='flex flex-col gap-2'>
        <p className='text-sm'>
          Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası -
          Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam
        </p>
        <p className='text-green-700'>1.199,25 TL</p>
        <Button size='sm' className='w-fit'>
          Buy again
        </Button>
      </div>
    </div>
    <div className='flex-1 bg-gray-100 flex gap-4 items-start p-4'>
      <span className='text-3xl'>
        <FcCancel />
      </span>
      <div className='flex flex-col gap-2'>
        <p>This Product has been cancelled.</p>
        <p className='text-xs text-gray-500 font-light'>
          14 Dec Thu 2024, 12:32
        </p>
        <p className='text-xs w-[80%] text-justify border-2 border-border rounded-lg p-2'>
          Eu ipsum commodo esse aliqua. Nisi nulla pariatur incididunt do do
          eiusmod mollit eu quis ullamco cillum qui aute elit.
          <b>
            Est fugiat enim cupidatat eu anim eiusmod voluptate labore duis
            veniam ullamco deserunt irure labore.
          </b>{' '}
          Officia aliqua dolor aliqua nisi tempor do minim nisi minim nisi
          cupidatat nulla. Laboris sint incididunt qui magna.
        </p>
      </div>
    </div>
  </div>
</div>;
