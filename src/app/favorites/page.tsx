import ComboboxSort from '@/components/ComboboxSort';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

import { IoArrowBack } from 'react-icons/io5';
import { IoShareOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { RxCaretSort } from 'react-icons/rx';
import Link from 'next/link';
import GridCards from '@/components/shared/GridCards';
import { array3 } from '../data';
const Favorites = () => {
  return (
    <main className='p-4 lg:p-20 lg:py-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-6'>
          <Button variant='link' className='bg-primary text-primary-foreground'>
            <IoArrowBack className='' />
          </Button>
          <span className='font-semibold'>Favorites</span>
        </div>
        <Separator />
        <div className='flex items-center justify-between gap-6'>
          <span className='font-light bg-secondary rounded-lg flex-grow p-2 px-4'>
            201 products
          </span>
          <div className='flex items-center gap-4'>
            <Button variant='outline'>
              <IoShareOutline />
            </Button>
          </div>
        </div>
        <Separator />
        <div className='flex items-center gap-2 lg:gap-12'>
          <form action='' className='flex-grow'>
            <label
              htmlFor='email'
              className='relative text-gray-400 focus-within:text-gray-600 block'
            >
              <FaSearch className='pointer-events-none w-4 h-4 absolute top-5 transform -translate-y-1/2 left-3' />
            </label>
            <Input
              type='text'
              placeholder='Search in 201 products'
              className='pl-10'
            />
          </form>
          <div className='flex items-center gap-6'>
            <span className='font-semibold text-sm'>Sort by</span>
            <ComboboxSort />
          </div>
        </div>
        <Separator />
        <div className='flex items-center justify-start gap-2'>
          <Button className='text-lg font-semibold rounded-sm'>
            <Link href={{ pathname: '/', query: {} }}>In Stocks</Link>
          </Button>
          <Button className='text-lg font-semibold rounded-sm'>
            <Link href={{ pathname: '/', query: {} }}>Costs Decreased</Link>
          </Button>
          <Button className='text-lg font-semibold rounded-sm'>
            <Link
              href={{ pathname: '/', query: {} }}
              className='flex items-center gap-1'
            >
              Categories
              <RxCaretSort />
            </Link>
          </Button>
        </div>
        <div className='p-4 lg:px-24 2xl:px-64'>
          <GridCards items={array3} />
        </div>
      </div>
    </main>
  );
};

export default Favorites;
