import { Button } from './ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export const Confirmorder = () => {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <p className='text-emerald-500 font-bold text-md'>TOTAL COST</p>
        <p className='text-3xl font-semibold text-gray-700'>
          1.399,99<span className='text-lg ml-1'>TL</span>
        </p>
      </div>
      <div className='w-full flex flex-col'>
        <div className='items-top flex space-x-2 space-y-2'>
          <Checkbox id='terms1' className='mt-2' />
          <div className='grid gap-1.5 leading-none'>
            <label
              htmlFor='terms1'
              className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Accept terms and conditions
            </label>
            <p className='text-xs text-muted-foreground'>
              You agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>
              .
            </p>
          </div>
        </div>
        <Button
          className='mt-4 bg-emerald-500 text-white w-full text-lg font-semibold py-[28px] rounded-lg'
          variant='link'
          type='submit'
        >
          Confirm Order
        </Button>
      </div>
      <div className='flex flex-col gap-2 bg-red-500'>
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
          <span>2.898,90 TL</span>
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
    </>
  );
};
