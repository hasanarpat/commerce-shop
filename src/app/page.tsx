import Carousel from '@/components/shared/Carousel';
const array1 = [1, 2, 3];
const array2 = [
  {
    id: 1833,
    title: 'Tatlı Keçi',
    description: 'Keçi işte dünyanın en güzel şeylerinden',
    image:
      'https://images.pexels.com/photos/13497825/pexels-photo-13497825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: 'Satılık değil!!!',
    category: 'Cute',
  },
  {
    id: 1833,
    title: 'Süper Ördek',
    description: 'Sihirli güçleriyle Gotham şehrini korur',
    image:
      'https://images.pexels.com/photos/2397623/pexels-photo-2397623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: 'Satılık değil!!!',
    category: 'Cute',
  },
  {
    id: 1833,
    title: 'Ceket falan',
    description: 'Modern tarzda slim fit erkek pantolon',
    image:
      'https://images.pexels.com/photos/3522691/pexels-photo-3522691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 1833,
    title: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image:
      'https://images.pexels.com/photos/20220617/pexels-photo-20220617/free-photo-of-siyah-ve-beyaz-moda-adam-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 1833,
    title: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image:
      'https://images.pexels.com/photos/18254632/pexels-photo-18254632/free-photo-of-siyah-ve-beyaz-moda-kadin-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 1833,
    title: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image:
      'https://images.pexels.com/photos/19806386/pexels-photo-19806386/free-photo-of-siyah-ve-beyaz-adam-insanlar-kadin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 1833,
    title: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image:
      'https://images.pexels.com/photos/19806386/pexels-photo-19806386/free-photo-of-siyah-ve-beyaz-adam-insanlar-kadin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cost: '$25',
    category: 'jacket',
  },
];
export default function Home() {
  return (
    <main className=''>
      <section className='p-4 lg:p-12'>
        {/* HERO SECTION */}
        <h1 className=' bg-emerald-500 text-foreground text-3xl text-center p-1'>
          HardStone, metal müziğe gönül veren Neşet ertaş hayranı metalheadlere
          gelsin!
        </h1>
        <Carousel
          isProduct={false}
          array={array1}
          classNameContainer='p-2 lg:p-2'
          classNameCarousel='max-w-none md:max-w-none lg:max-w-[70%] w-[calc(100%-6rem)]'
          classNameContent=''
          classNameItem='basis-full md:basis-full lg:basis-full xl:basis-full'
          classNameCard=''
          classNameCardContent='aspect-video lg:aspect-[16/6]'
        />
      </section>
      <section className='p-4 lg:px-24'>
        {/* SLIDERS */}
        <Carousel
          isProduct={true}
          classNameContainer='p-3 lg:p-12 lg:py-2 min-h-[220px]'
          classNameCardContent=''
          classNameCard='hover:bg-emerald-500 hover:-translate-y-2 ease-in-out duration-100'
          array={array2}
          title='Trend'
        />
        <Carousel
          isProduct={true}
          classNameContainer='p-3 lg:p-12 lg:py-2 min-h-[220px]'
          classNameCardContent=''
          classNameCard='hover:bg-emerald-500 hover:-translate-y-2 ease-in-out duration-100'
          array={array2}
          title='New'
        />
        <Carousel
          isProduct={true}
          classNameContainer='p-3 lg:p-12 lg:py-2 min-h-[220px]'
          classNameCardContent=''
          classNameCard='hover:bg-emerald-500 hover:-translate-y-2 ease-in-out duration-100'
          array={array2}
          title='Hard Rock'
        />
        <Carousel
          isProduct={true}
          classNameContainer='p-3 lg:p-12 lg:py-2 min-h-[220px]'
          classNameCardContent=''
          classNameCard='hover:bg-emerald-500 hover:-translate-y-2 ease-in-out duration-100'
          array={array2}
          title='Casettes'
        />
        <Carousel
          isProduct={true}
          classNameContainer='p-3 lg:p-12 lg:py-2 min-h-[220px]'
          classNameCardContent=''
          classNameCard='hover:bg-emerald-500 hover:-translate-y-2 ease-in-out duration-100'
          array={array2}
          title='Accessories'
        />
      </section>
    </main>
  );
}
