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
import GridCards from '@/components/shared/GridCards';

const CategoryProducts = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <main className=''>
      <div className='flex flex-col md:flex-row p-2 md:p-8 lg:p-12 xl:p-20 lg:pb-6 relative '>
        <aside className='bg-secondary w-full md:max-w-[16rem] p-1 md:p-2 lg:p-3 rounded-tl-lg rounded-bl-lg md:sticky z-20 top-[4rem] max-h-screen '>
          <div className='md:flex md:flex-col items-center md:items-start justify-center md:justify-between gap-2 [&>*]:mb-1'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Beden Seçin' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Bedenler</SelectLabel>
                  <SelectItem value='small'>Small</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='large'>Large</SelectItem>
                  <SelectItem value='xlarge'>XLarge</SelectItem>
                  <SelectItem value='xxlarge'>XXLarge</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Kampanya Seçin' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kampanyalar</SelectLabel>
                  <SelectItem value='sun'>Yaz</SelectItem>
                  <SelectItem value='winter'>Kış</SelectItem>
                  <SelectItem value='membership'>Üye Özel</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Dekorasyon ve aksesuar' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Aksesuar</SelectLabel>
                  <SelectItem value='decoration'>Dekorasyon</SelectItem>
                  <SelectItem value='accesories'>Aksesuar</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className='bg-background w-full rounded mt-2 md:mt-0 flex flex-col gap-2 p-2'>
              <p className='text-sm'>Maks. Fiyat</p>
              <Slider defaultValue={[33]} max={100} min={0} step={1} />
            </div>
            <div className='flex flex-col gap-4 mt-4 md:mt-0 p-4'>
              <RadioGroup defaultValue='option-one' className='flex flex-col'>
                <div>
                  <span>Cinsiyet</span>
                </div>
                <div className='flex gap-2'>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='option-one' id='option-one' />
                    <Label htmlFor='option-one'>Erkek</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='option-two' id='option-two' />
                    <Label htmlFor='option-two'>Kadın</Label>
                  </div>
                </div>
              </RadioGroup>
              <RadioGroup defaultValue='option-one' className='flex flex-col'>
                <div>
                  <span>Tükenenleri göster</span>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='option-one' id='option-one' />
                    <Label htmlFor='option-one'>Evet</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='option-two' id='option-two' />
                    <Label htmlFor='option-two'>Hayır</Label>
                  </div>
                </div>
              </RadioGroup>
              <RadioGroup defaultValue='option-one' className='flex flex-col'>
                <div>
                  <span>Hızlı Kargo</span>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='option-one' id='option-one' />
                    <Label htmlFor='option-one'>Evet</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='option-two' id='option-two' />
                    <Label htmlFor='option-two'>Hayır</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className='items-top flex space-x-4 mt-4 md:mt-0 px-4'>
              <Checkbox id='terms1' />
              <div className='grid gap-1.5 leading-none'>
                <label
                  htmlFor='terms1'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Doğaya dost ürün
                </label>
                <p className='text-sm text-muted-foreground'>
                  Geri dönüşüm ve sıfır atık projelerinden elde edilmiş ürünleri
                  göster.
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
