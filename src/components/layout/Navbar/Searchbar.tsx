import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Searchbar = () => {
  const handleSearchFormSubmit = (formData: FormData) => {
    const keytoSearch = formData.get('search-item');
    redirect(`/search/?item=${keytoSearch}`);
  };
  return (
    <div className='p-1 bg-secondary rounded-lg'>
      <Popover>
        <PopoverTrigger asChild>
          <Button className='w-full bg-transparent text-primary hover:text-secondary'>
            Search for products and categories
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full bg-accent border-none p-4 px-6 text-lg'>
          <div className='grid gap-4 w-96'>
            <form
              action={handleSearchFormSubmit}
              className='flex flex-col items-center gap-2 w-full'
            >
              <div className='flex flex-col items-start gap-4 w-full'>
                <Label htmlFor='search-item text-white'>Search for</Label>
                <Input
                  id='search-item'
                  name='search-item'
                  className='col-span-2 h-8 text-black'
                  type='text'
                  placeholder='Punkies'
                />
              </div>
              <div className='flex flex-col items-start gap-4 w-full'>
                <Button
                  type='submit'
                  className='w-full bg-secondary text-secondary-foreground hover:text-emerald-200 hover:bg-emerald-600'
                >
                  Search
                </Button>
              </div>
            </form>
            {/* SUGGESTIONS */}
            <div className='flex flex-col items-center gap-2 w-full'>
              <div className='flex flex-col gap-1 items-start w-full'>
                <h6 className='w-full text-sm'>Categories</h6>
                <Link
                  href='/categories/bracelets'
                  className='bg-emerald-600 hover:bg-emerald-400 w-full rounded px-1 hover:text-emerald-100'
                >
                  <h5>Bracelets</h5>
                </Link>
              </div>
              <Separator className='bg-gray-400 m-0' />
              <div className='flex flex-col gap-1 items-start w-full'>
                <h6 className='w-full text-sm'>Products</h6>
                <Link
                  href='/categories/bracelets'
                  className='bg-emerald-600 hover:bg-emerald-400 w-full rounded px-1 hover:text-emerald-100'
                >
                  <h5>Bracelets</h5>
                </Link>
                <Link
                  href='/categories/bracelets'
                  className='bg-emerald-600 hover:bg-emerald-400 w-full rounded px-1 hover:text-emerald-100'
                >
                  <h5>Bracelets</h5>
                </Link>
                <Link
                  href='/categories/bracelets'
                  className='bg-emerald-600 hover:bg-emerald-400 w-full rounded px-1 hover:text-emerald-100'
                >
                  <h5>Bracelets</h5>
                </Link>
              </div>
              <Separator className='bg-gray-400' />
              <div className='flex flex-col gap-1 items-start w-full'>
                <h6 className='w-full text-sm'>Sellers</h6>
                <Link
                  href='/categories/bracelets'
                  className='bg-emerald-600 hover:bg-emerald-400 w-full rounded px-1 hover:text-emerald-100'
                >
                  <h5>Bracelets</h5>
                </Link>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Searchbar;
