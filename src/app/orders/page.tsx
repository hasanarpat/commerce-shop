import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MdWorkspacePremium } from 'react-icons/md';
import { GoInbox } from 'react-icons/go';
import { IoDiamondOutline } from 'react-icons/io5';
import { CiWallet } from 'react-icons/ci';
import { TbDeviceImacQuestion } from 'react-icons/tb';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiCoupon3Line } from 'react-icons/ri';
import { GrUserSettings } from 'react-icons/gr';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoLogOutOutline } from 'react-icons/io5';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import OrderItem from '@/components/OrderItem';

const orderItems = [
  [
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: true,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
  ],
  [
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
  ],
  [
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
  ],
  [
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
    {
      seller: 'Ceramical',
      productImg:
        'https://images.unsplash.com/photo-1711630031203-58a2f5a68ea3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'Ceramical 60 x 160 cm Çalışma Masası Bilgisayar Masası Ofis Masası - Atlantik Çam - Y: 73 cm D: 60 cm G: 160 cm/Atlantik Çam',
      price: '1.199,25 TL',
      isCancelled: false,
      date: '14 Dec Thu 2024, 12:32',
    },
  ],
];

const Orders = () => {
  return (
    <main className='md:p-4 min-h-screen'>
      <section className='flex items-start gap-12'>
        <aside className='hidden lg:flex max-w-xs w-full p-6 flex-col items-start gap-4'>
          <div className='flex items-center gap-6'>
            <Avatar className='w-16 h-16'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='text-xl font-bold'>John Doe</span>
          </div>
          <div className=' bg-pink-100 text-black flex items-center px-6 py-4 rounded-lg w-full text-md'>
            <span>
              <MdWorkspacePremium className='inline text-2xl text-white' />{' '}
              Premium chances for $1.
            </span>
          </div>
          <div className='flex items-center gap-6 text-emerald-600'>
            <GoInbox className='text-3xl' />
            <span className='text-sm font-semibold'>Orders</span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <IoDiamondOutline className='text-3xl' />
            <span className='text-sm font-semibold'>
              Special Offers For You
            </span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <CiWallet className='text-3xl' />
            <span className='text-sm font-semibold'>HardStonePay</span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <TbDeviceImacQuestion className='text-3xl' />
            <span className='text-sm font-semibold'>Questions</span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <MdOutlineRateReview className='text-3xl' />
            <span className='text-sm font-semibold'>Reviews</span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <RiCoupon3Line className='text-3xl' />
            <span className='text-sm font-semibold'>Coupons</span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <GrUserSettings className='text-3xl' />
            <span className='text-sm font-semibold'>User Settings</span>
          </div>
          <div className='flex flex-col items-start gap-3 text-sm'>
            <p className='text-gray-400'>
              <Link href='/lists'>My Lists</Link>
            </p>
            <div className='flex items-center gap-6 text-gray-600 cursor-pointer hover:text-red-600'>
              <span className='w-2 h-10 bg-red-500 rounded-r-md' />
              <span className='font-semibold'>
                <Link href='/favorites'>My Favorites</Link>
              </span>
            </div>
            <p className='text-gray-400'>See All Lists</p>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <RiCustomerService2Fill className='text-3xl' />
            <span className='text-sm font-semibold'>Customer Service</span>
          </div>
          <div className='flex items-center gap-6 text-gray-600 hover:text-emerald-600 cursor-pointer'>
            <IoLogOutOutline className='text-3xl' />
            <span className='text-sm font-semibold'>Log Out</span>
          </div>
        </aside>
        <div className='grid gap-6 w-full'>
          <p className='text-lg font-semibold'>My Orders</p>
          <div className='flex items-center flex-wrap gap-3'>
            <Button variant='outline'>
              <Search className='mr-4' /> Search in Orders
            </Button>
            <Button variant='outline'>All</Button>
            <Button variant='outline'>In Shipping</Button>
            <Button variant='outline'>Closed</Button>
            <Button variant='outline'>Cancelled</Button>
            <Button variant='outline'>Closed</Button>
            <Button variant='outline'>Returns</Button>
          </div>
          {/* PRODUCTS */}

          {orderItems.map((order, i) => (
            <OrderItem key={i} products={order} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Orders;
