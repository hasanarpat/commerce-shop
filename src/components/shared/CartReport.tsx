import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { formatPrice } from '@/lib/formatPrice';
import { useContext } from 'react';
import { CartContext } from '@/context/cart-context';

const products = [
  {
    title: 'Casio AE-1200WHB-3BVDF Erkek Kol Saati',
    cost: 139999,
  },
  {
    title: 'Casio AE-1200WHB-3BVDF Erkek Kol Saati',
    cost: 139999,
  },
  {
    title: 'Casio AE-1200WHB-3BVDF Erkek Kol Saati',
    cost: 139999,
  },
  {
    title: 'Casio AE-1200WHB-3BVDF Erkek Kol Saati',
    cost: 139999,
  },
  ,
  {
    title: 'Casio AE-1200WHB-3BVDF Erkek Kol Saati',
    cost: 139999,
  },
  ,
  {
    title: 'Casio AE-1200WHB-3BVDF Erkek Kol Saati',
    cost: 139999,
  },
];
const CartReport = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='bg-emerald-500 text-white hover:bg-emerald-700 p-6 w-full'>
          Finish Shopping
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg'>
          <DrawerHeader>
            <DrawerTitle>Total Cost for your Cart</DrawerTitle>
            <DrawerDescription>Taxes are included</DrawerDescription>
          </DrawerHeader>
          <div className='p-4 pb-0'>
            <div className='flex flex-col items-center justify-center space-x-2'>
              <ScrollArea className='h-96 rounded-md border w-full'>
                <div className='p-4'>
                  <h4 className='mb-4 text-sm font-medium leading-none'>
                    Products
                  </h4>
                  {cartItems.map((product: any, i) => (
                    <div className='w-full' key={i}>
                      <div className='flex gap-2'>
                        <span className='border-border border-2 text-xl h-fit p-2 rounded-full '>
                          {product.quantity}
                        </span>
                        <div className='flex flex-col'>
                          <div className='text-xl lg:text-2xl font-bold tracking-tighter'>
                            {product.name}
                          </div>
                          <div className='text-[0.90rem] uppercase text-muted-foreground'>
                            {formatPrice(product.price)}
                          </div>
                        </div>
                      </div>
                      <Separator className='my-2' />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className='my-3'>
              <p>Total Cost:{formatPrice(getCartTotal())}</p>
            </div>
          </div>
          <DrawerFooter>
            <Button>
              <Link href={`/payment`}>Submit</Link>
            </Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartReport;
