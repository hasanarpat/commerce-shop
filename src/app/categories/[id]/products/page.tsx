import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { products } from '@/app/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import GridCards from '@/components/shared/GridCards';

const CategoryProducts = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <main className=''>
      <div className='flex flex-col md:flex-row p-2 md:p-8 lg:p-12 xl:p-20 lg:pb-6 relative '>
        <aside className='bg-secondary w-full max-w-[16rem] p-1 md:p-2 lg:p-3 rounded-tl-lg rounded-bl-lg sticky top-[4rem] max-h-screen '>
          <div className='flex md:flex-col items-start justify-center md:justify-between gap-2 md:gap-6'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className='bg-zinc-600 w-full p-1 rounded-full'>
              <Slider defaultValue={[33]} max={100} min={0} step={1} />
            </div>
            <div className='flex flex-col gap-4'>
              <RadioGroup defaultValue='option-one' className='flex'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-one' id='option-one' />
                  <Label htmlFor='option-one'>Option One</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-two' id='option-two' />
                  <Label htmlFor='option-two'>Option Two</Label>
                </div>
              </RadioGroup>
              <RadioGroup defaultValue='option-one' className='flex'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-one' id='option-one' />
                  <Label htmlFor='option-one'>Option One</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-two' id='option-two' />
                  <Label htmlFor='option-two'>Option Two</Label>
                </div>
              </RadioGroup>
              <RadioGroup defaultValue='option-one' className='flex'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-one' id='option-one' />
                  <Label htmlFor='option-one'>Option One</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-two' id='option-two' />
                  <Label htmlFor='option-two'>Option Two</Label>
                </div>
              </RadioGroup>
            </div>
            <div className='items-top flex space-x-2'>
              <Checkbox id='terms1' />
              <div className='grid gap-1.5 leading-none'>
                <label
                  htmlFor='terms1'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Accept terms and conditions
                </label>
                <p className='text-sm text-muted-foreground'>
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div className=' flex-shrink w-full p-2 bg-secondary'>
          <GridCards items={products} />
        </div>
      </div>
      <div className='bg-secondary w-full mb-2'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};

export default CategoryProducts;
