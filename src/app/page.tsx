import Carousel from '@/components/shared/Carousel';
const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4, 5, 6];
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
          array={array1}
          classNameContainer='p-2 lg:p-2'
          classNameCarousel='max-w-none md:max-w-none lg:max-w-[70%] w-[calc(100%-6rem)]'
          classNameContent=''
          classNameItem='basis-full md:basis-full lg:basis-full xl:basis-full'
          classNameCard=''
          classNameCardContent='aspect-video lg:aspect-[16/6]'
        />
      </section>
      <section>
        {/* SLIDERS */}
        <Carousel
          classNameContainer='p-3 lg:p-12 min-h-[220px]'
          classNameCardContent=''
          classNameCard='hover:bg-emerald-500 hover:-translate-y-2 ease-in-out duration-100'
          array={array2}
          title='Jackets'
        />
      </section>
    </main>
  );
}
