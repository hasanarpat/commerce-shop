'use client';
import { useContext } from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { CartContext } from '@/context/cart-context';
import { formatPrice } from '@/lib/formatPrice';

export const ConfirmOrderBottom = () => {
  const { getCartTotal } = useContext(CartContext);

  return (
    <>
      <div className='flex flex-col gap-2 w-full'>
        <div className='w-full flex items-center justify-between text-sm font-medium mb-2'>
          <span>Shipping</span>
          <span className='text-green-600'>
            Free
            <span className='text-muted-foreground line-through ml-1'>
              44,90 TL
            </span>
          </span>
        </div>
        <div className='w-full flex items-center justify-between text-sm font-medium mb-2'>
          <span>Products</span>
          <span>{formatPrice(getCartTotal())}</span>
        </div>
        <div className='w-full flex flex-col items-start justify-between text-sm font-medium mb-2'>
          <span>Promotions</span>
          <div className='flex items-start justify-between mt-1'>
            <span className='flex-grow text-start text-xs text-muted-foreground'>
              Ayakkabı ve Çantalarda 750 TL ve üzeri 75 TL indirim
            </span>
            <span className='w-full text-green-600 text-end'>- 75,00 TL</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className='items-top flex items-center justify-start space-x-2 space-y-2 w-full p-2'>
        <Checkbox id='terms1' />
        <div className='grid gap-1.5 leading-none'>
          <label
            htmlFor='terms1'
            className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            You agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
          </label>
        </div>
      </div>
      <Separator />
      <div className='flex items-center justify-between w-full p-2 px-4'>
        <p className='text-emerald-500 font-bold text-sm'>
          TOTAL COST{' '}
          <span className='block text-foreground text-xl'>
            {formatPrice(getCartTotal())}
          </span>
        </p>
        <Button
          className='w-fit bg-emerald-500 text-white text-lg font-semibold py-[28px] rounded-lg'
          variant='link'
          type='submit'
        >
          Confirm Order
        </Button>
      </div>
    </>
  );
};
