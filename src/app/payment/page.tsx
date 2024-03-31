import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

const Payment = () => {
  return (
    <main className='lg:py-6 relative bg-secondary'>
      <div className='lg:w-[70%] 2xl:w-[80%] lg:mx-auto'>
        <div className='flex flex-col lg:flex-row gap-4 relative'>
          <div className='flex-grow grid grid-cols-1'></div>
          <div className='hidden lg:block lg:sticky lg:top-24 max-w-[260px] w-full min-h-96 bg-popover mt-2 border border-border'>
            <div className='flex flex-col'>
              <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-col gap-2'>
                  <p className='text-emerald-500 font-bold text-md'>
                    TOTAL COST
                  </p>
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
                        You agree to our <b>Terms of Service</b> and{' '}
                        <b>Privacy Policy</b>.
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
                <div className='flex flex-col gap-2'>
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
                      <span className='w-full text-green-600 text-end'>
                        - 75,00 TL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom-0 sticky z-20 bg-background lg:hidden w-full'>
            <div className='w-full flex flex-col items-center justify-between'>
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
                  <span>2.898,90 TL</span>
                </div>
                <div className='w-full flex flex-col items-start justify-between text-sm font-medium mb-2'>
                  <span>Promotions</span>
                  <div className='flex items-start justify-between mt-1'>
                    <span className='flex-grow text-start text-xs text-muted-foreground'>
                      Ayakkabı ve Çantalarda 750 TL ve üzeri 75 TL indirim
                    </span>
                    <span className='w-full text-green-600 text-end'>
                      - 75,00 TL
                    </span>
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
                    You agree to our <b>Terms of Service</b> and{' '}
                    <b>Privacy Policy</b>.
                  </label>
                </div>
              </div>
              <Separator />
              <div className='flex items-center justify-between w-full p-2 px-4'>
                <p className='text-emerald-500 font-bold text-sm'>
                  TOTAL COST{' '}
                  <span className='block text-foreground text-xl'>
                    1.399,99<span className='text-sm ml-1'>TL</span>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
