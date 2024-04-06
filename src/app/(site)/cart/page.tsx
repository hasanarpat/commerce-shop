'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FaCartShopping } from 'react-icons/fa6';
import { RiCoupon4Fill } from 'react-icons/ri';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import Link from 'next/link';
import { FaTruck } from 'react-icons/fa';
import Image from 'next/image';
import { Minus, Plus, SprayCanIcon, Trash2 } from 'lucide-react';
import ProductCarousel from '@/components/shared/ProductCarousel';
import { array3 } from '../../data';
import CartReport from '@/components/shared/CartReport';
import { useContext } from 'react';
import { CartContext } from '@/context/cart-context';
import { formatPrice } from '@/lib/formatPrice';

const Cart = () => {
  const {
    cartItems,
    getCartTotal,
    removeFromCart,
    addToCart,
    removeItemFromCart,
  } = useContext(CartContext);

  const handleCartActions = (
    item: {
      id: number;
      name: string;
      price: number;
      quantity: number;
      img: string;
      seller: string;
      predictedDeliveryTime: string;
    },
    quantity: string
  ) => {
    quantity === 'plus' ? addToCart(item) : removeFromCart(item);
  };

  return (
    <main className='flex flex-col bg-secondary relative'>
      {cartItems === undefined ? (
        <div className='flex flex-col gap-8 p-12'>
          {/* EMTYP CART MESSAGE */}
          <div className='flex flex-col items-center gap-4'>
            <FaCartShopping className=' text-6xl' />
            <p className='text-3xl font-semibold'>
              Your cart is empty right now
            </p>
            <p className='text-lg font-mono w-1/2 text-center'>
              You can add products from Hardstones infinite possibilities with
              offers those are special for you right now.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className='flex items-center justify-center bg-slate-400 text-secondary'>
            <p className='p-2 font-bold'>
              My Cart
              <span className='font-light ml-2'>
                ({cartItems.length} product)
              </span>
            </p>
          </div>
          <Separator />
          <div className='bg-slate-400 text-secondary'>
            <p className='p-2 flex items-center'>
              <RiCoupon4Fill className='text-3xl mr-2 inline' />
              <span className='text-lg font-base'>My Coupons</span>
            </p>
          </div>
          <Separator className='my-3' />
          <div className='lg:w-[70%] 2xl:w-[80%] lg:mx-auto relative'>
            <div className='flex gap-4'>
              <div className='flex-grow grid grid-cols-1'>
                {cartItems.map((item: any) => (
                  <Card
                    className='rounded-none border-l-0 border-r-0 my-2'
                    key={item.id}
                  >
                    <CardHeader className='border-b-[1px] border-border'>
                      <CardTitle className='text-sm flex items-center justify-between'>
                        <span>
                          Seller:
                          <Link
                            href='/sellers/fashion-stone'
                            className='font-medium ml-2'
                          >
                            {item.seller}
                          </Link>
                        </span>
                        <span className='text-green-600 font-bold text-sm'>
                          Free Shipping
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='flex items-end justify-between w-full'>
                        <div className='flex flex-col gap-2 p-1'>
                          <p className='text-xs font-extralight'>
                            <FaTruck className='mr-2 text-lg inline' />
                            <span>
                              Predicted delivery time is{' '}
                              {item.predictedDeliveryTime}
                            </span>
                          </p>
                          <div className='flex items-start gap-4'>
                            <Checkbox
                              id='item-1'
                              className='data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white h-6 w-6 border-none'
                              checked={true}
                            />
                            <div className='relative w-36 h-36 lg:w-48 lg:h-48 border-2 border-spacing-2 border-gray-500 rounded-lg'>
                              <Image
                                alt='product'
                                src={item.img}
                                fill
                                className='object-cover rounded-lg'
                              />
                            </div>
                            <div className='flex flex-col gap-6'>
                              <p className='text-xl font-semibold'>
                                {item.name}
                              </p>
                              <Button
                                className='bg-purple-500 text-white hover:bg-current opacity-50 w-fit text-xs p-0 h-5 rounded-s px-1'
                                size='sm'
                              >
                                Buy with Hardstone credit
                              </Button>
                              <div className='rounded-full border-gray-500 border w-fit mt-'>
                                <div className='flex items-center p-2 gap-4'>
                                  <Button
                                    variant='ghost'
                                    className='p-0 w-6 h-6 rounded-full'
                                    onClick={() => removeItemFromCart(item)}
                                  >
                                    <Trash2 className='text-emerald-600' />
                                  </Button>
                                  <div className='flex gap-2 items-center'>
                                    <Button
                                      variant='ghost'
                                      className='p-0 w-6 h-6 rounded-full'
                                      onClick={() =>
                                        handleCartActions(item, 'minus')
                                      }
                                    >
                                      <Minus className='text-emerald-500' />
                                    </Button>
                                    <span>{item.quantity}</span>
                                    <Button
                                      variant='ghost'
                                      className='p-0 w-6 h-6 rounded-full'
                                      onClick={() =>
                                        handleCartActions(item, 'plus')
                                      }
                                    >
                                      <Plus className='text-emerald-600' />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-end justify-end'>
                          <p className='text-lg'>{formatPrice(item.price)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className='w-full bg-background my-10'>
                  <ProductCarousel
                    isProduct={true}
                    title={'Last ones You Visited'}
                    array={array3}
                  />
                  <ProductCarousel
                    isProduct={true}
                    title={'Similar to Your Orders'}
                    array={array3}
                  />
                </div>
                <div className='w-full bg-background my-4'>
                  <ProductCarousel
                    isProduct={true}
                    title={'Promoted'}
                    array={array3}
                  />
                </div>
              </div>
              <div className='hidden lg:block lg:sticky lg:top-24  max-w-[320px] w-full h-96 bg-popover mt-2 rounded-xl border border-border'>
                <div className='flex flex-col'>
                  <div className='flex flex-col gap-8  p-8'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-emerald-500 font-medium'>
                        Selected Products(1)
                      </p>
                      <p className='text-3xl font-semibold'>
                        {formatPrice(getCartTotal())}
                      </p>
                    </div>
                    <div className='w-full'>
                      <CartReport />
                    </div>
                  </div>
                  <div className='bg-green-200 drop-shadow-lg'>
                    <div className='flex items-center gap-4 p-1  text-gray-400'>
                      <SprayCanIcon className='w-32 h-32' />
                      <span className='text-xs font-extralight'>
                        Eu reprehenderit commodo quis non. Anim velit tempor
                        magna Lorem elit in dolor. Incididunt proident ut
                        laboris laborum elit eiusmod cillum reprehenderit velit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom-0 sticky z-20 bg-background p-4 lg:hidden'>
            <div className='w-full flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <p className='text-emerald-500 font-medium'>
                  Selected Products(1)
                </p>
                <p className='text-xl font-semibold'>
                  {formatPrice(getCartTotal())}
                </p>
              </div>
              <div>
                <CartReport />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
